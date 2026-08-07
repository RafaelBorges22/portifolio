/* ==========================================================================
   Renderização da página mestra (index.html) a partir do DATA.
   ========================================================================== */
(() => {
  const mount = (nome) => document.querySelector(`[data-mount="${nome}"]`);

  /* ---------------------------------------------------------------- Hero */
  function renderHero() {
    const { perfil, formacao, projetos, stack } = DATA;
    const alvo = mount("hero");
    if (!alvo) return;

    const totalTecnologias = new Set(stack.flatMap((g) => g.itens)).size;
    const gh = safeUrl(perfil.github);

    const metaItens = [
      has(perfil.local) ? `<li>${icon("pin", 15)} ${esc(perfil.local)}</li>` : "",
      `<li>${icon("graduation", 15)} ${val(formacao.curso)}</li>`,
      `<li>${icon("folder", 15)} ${projetos.length} projetos · ${totalTecnologias} tecnologias</li>`,
    ].join("");

    alvo.innerHTML = `
      <div class="container hero__grid">
        <div class="hero__intro reveal">
          <p class="eyebrow">Portfólio · ${esc(formacao.disciplina)}</p>

          <h1 class="hero__name">
            Rafael <span class="grad">Mascarenhas</span><br>Borges
          </h1>

          <p class="hero__headline">${perfil.headline}</p>

          <p class="hero__resumo">${perfil.resumo[0]}</p>

          <div class="hero__actions">
            <a class="btn btn--primary" href="#projetos">
              ${icon("stack", 17)} Ver projetos
            </a>
            ${
              gh
                ? `<a class="btn btn--ghost" href="${esc(gh)}" target="_blank" rel="noopener noreferrer">
                     ${icon("github", 17)} GitHub ${icon("external", 14)}
                   </a>`
                : `<span class="btn btn--ghost" aria-disabled="true">${icon("github", 17)} ${val(perfil.github)}</span>`
            }
            <a class="btn btn--ghost" href="#sobre">${icon("user", 17)} Sobre mim</a>
          </div>

          <ul class="hero__meta">${metaItens}</ul>
        </div>

        <figure class="photo reveal">
          <div class="photo__frame">
            ${
              safeUrl(perfil.foto)
                ? `<img src="${esc(perfil.foto)}" alt="${esc(perfil.fotoAlt)}" width="800" height="1000" data-fb="foto">`
                : ""
            }
          </div>
          <figcaption class="badge badge--live photo__tag">${val(formacao.situacao)}</figcaption>
        </figure>
      </div>
    `;

    // Fallback específico da foto: avatar com as iniciais.
    const foto = alvo.querySelector('img[data-fb="foto"]');
    if (foto) {
      foto.addEventListener(
        "error",
        () => {
          foto.replaceWith(
            fromHTML(`
              <div class="photo__fallback">
                <span class="photo__initials">${esc(perfil.iniciais)}</span>
                <span class="photo__hint">Adicione sua foto em<br><code>${esc(perfil.foto)}</code></span>
              </div>
            `)
          );
        },
        { once: true }
      );
    }
  }

  /* --------------------------------------------------------------- Sobre */
  function renderSobre() {
    const { perfil } = DATA;
    const alvo = mount("sobre");
    if (!alvo) return;

    const contato = [
      { rotulo: "E-mail", valor: perfil.email, icone: "mail", tipo: "email" },
      { rotulo: "Localização", valor: perfil.local, icone: "pin" },
      { rotulo: "GitHub", valor: perfil.github, icone: "github", tipo: "link" },
      { rotulo: "LinkedIn", valor: perfil.linkedin, icone: "linkedin", tipo: "link" },
    ];

    const linhas = contato
      .map(({ rotulo, valor, icone, tipo }) => {
        let conteudo = val(valor);

        if (tipo === "email" && has(valor)) {
          conteudo = `<a href="mailto:${esc(valor)}" class="crumb">${esc(valor)}</a>`;
        }

        if (tipo === "link") {
          const url = safeUrl(valor);
          if (url) {
            conteudo = `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" class="crumb">${esc(
              url.replace(/^https?:\/\/(www\.)?/, "")
            )} ${icon("external", 13)}</a>`;
          }
        }

        return `
          <div class="datalist__row">
            <dt class="datalist__key">${icon(icone, 14)} ${esc(rotulo)}</dt>
            <dd class="datalist__val">${conteudo}</dd>
          </div>`;
      })
      .join("");

    alvo.innerHTML = `
      <div class="prose reveal">
        ${perfil.resumo.map((p) => `<p>${p}</p>`).join("")}
      </div>
      <dl class="card datalist reveal">${linhas}</dl>
    `;
  }

  /* --------------------------------------------------------------- Stack */
  function renderStack() {
    const alvo = mount("stack");
    if (!alvo) return;

    alvo.innerHTML = DATA.stack
      .map(
        (g) => `
        <article class="card stack-card reveal">
          <header class="stack-card__head">
            <span class="stack-card__icon">${icon(g.icone, 18)}</span>
            <div>
              <h3 class="stack-card__title">${esc(g.grupo)}</h3>
              <p class="stack-card__count">${g.itens.length} itens</p>
            </div>
          </header>
          <ul class="chips">
            ${g.itens.map((i) => `<li class="chip">${esc(i)}</li>`).join("")}
          </ul>
        </article>`
      )
      .join("");
  }

  /* ------------------------------------------------------------ Formação */
  function renderFormacao() {
    const f = DATA.formacao;
    const alvo = mount("formacao");
    if (!alvo) return;

    const linhas = [
      ["Instituição", "building", f.instituicao],
      ["Curso", "graduation", f.curso],
      ["Início", "calendar", f.inicio],
      ["Previsão de conclusão", "calendar", f.conclusao],
      ["Semestre atual", "list", f.semestreAtual],
      ["Situação", "check", f.situacao],
      ["Disciplina", "code", f.disciplina],
    ]
      .map(
        ([k, ic, v]) => `
        <div class="datalist__row">
          <dt class="datalist__key">${icon(ic, 14)} ${esc(k)}</dt>
          <dd class="datalist__val">${val(v)}</dd>
        </div>`
      )
      .join("");

    alvo.innerHTML = `<dl class="card datalist reveal">${linhas}</dl>`;
  }

  /* --------------------------------------------------------- Experiência */
  function renderExperiencias() {
    const alvo = mount("experiencias");
    if (!alvo) return;

    const lista = DATA.experiencias || [];
    if (!lista.length) {
      ocultarSecao("experiencia");
      return;
    }

    const itens = lista
      .map(
        (e) => `
        <article class="card tl-item reveal">
          <div class="tl-item__top">
            <h3 class="tl-item__empresa">${val(e.empresa)}</h3>
            <p class="tl-item__periodo">${periodo(e)}</p>
          </div>
          <p class="tl-item__cargo">${val(e.cargo)}</p>
          ${has(e.local) ? `<p class="mono subtle" style="margin-block-end:.75rem">${icon("pin", 13)} ${esc(e.local)}</p>` : ""}
          <ul class="bullets">
            ${e.atividades.map((a) => `<li>${val(a, { html: true })}</li>`).join("")}
          </ul>
        </article>`
      )
      .join("");

    alvo.innerHTML = `<div class="timeline">${itens}</div>`;
  }

  /* -------------------------------------------------------------- Cursos */
  function renderCursos() {
    const alvo = mount("cursos");
    if (!alvo) return;

    const lista = DATA.cursos || [];
    if (!lista.length) {
      ocultarSecao("cursos");
      return;
    }

    const cards = lista
      .map((c) => {
        const link = safeUrl(c.certificado);
        return `
        <article class="card curso reveal">
          <div>
            <h3 class="curso__nome">${val(c.nome)}</h3>
            <p class="muted mono" style="margin-block-start:.35rem">${val(c.instituicao)}</p>
          </div>
          <div class="curso__meta">
            <div>${icon("pin", 14)} ${val(c.local)}</div>
            <div>${icon("clock", 14)} ${val(c.cargaHoraria)}</div>
            <div>${icon("calendar", 14)} ${val(c.inicio)} <span class="subtle">→</span> ${val(c.fim)}</div>
          </div>
          ${
            link
              ? `<a class="btn btn--sm btn--ghost" href="${esc(link)}" target="_blank" rel="noopener noreferrer">
                   Ver certificado ${icon("external", 13)}</a>`
              : ""
          }
        </article>`;
      })
      .join("");

    alvo.innerHTML = `<div class="cards-grid">${cards}</div>`;
  }

  /* ------------------------------------------------------------- Idiomas */
  function renderIdiomas() {
    const alvo = mount("idiomas");
    if (!alvo) return;

    const lista = DATA.idiomas || [];
    if (!lista.length) {
      ocultarSecao("idiomas");
      return;
    }

    alvo.innerHTML = `
      <div class="langs">
        ${lista
          .map((l) => {
            const pct = Math.max(0, Math.min(100, Number(l.pct) || 0));
            return `
            <article class="card lang reveal">
              <div class="lang__top">
                <h3 class="lang__nome">${val(l.idioma)}</h3>
                <p class="lang__nivel">${val(l.nivel)}</p>
              </div>
              <div class="lang__track" role="img"
                   aria-label="Nível em ${esc(isPending(l.idioma) ? "idioma não informado" : l.idioma)}: ${pct}%">
                <span class="lang__fill" style="--pct:${pct}%"></span>
              </div>
              <div class="lang__scale" aria-hidden="true">
                <span>Básico</span><span>Intermediário</span><span>Fluente</span>
              </div>
              ${has(l.nota) ? `<p class="lang__nota">${esc(l.nota)}</p>` : ""}
            </article>`;
          })
          .join("")}
      </div>
    `;
  }

  /* ------------------------------------------------------------ Projetos */
  function renderProjetos() {
    const alvo = mount("projetos");
    if (!alvo) return;

    const lista = DATA.projetos || [];
    if (!lista.length) {
      alvo.innerHTML = aviso("Nenhum projeto cadastrado em <code>data.js</code>.");
      return;
    }

    alvo.innerHTML = lista
      .map((p, i) => {
        const techs = p.tecnologias || [];
        const visiveis = techs.slice(0, 4);
        const resto = techs.length - visiveis.length;
        const url = `projeto.html?p=${encodeURIComponent(p.slug)}`;

        return `
        <article class="card pcard reveal">
          <div class="pcard__media">
            <span class="badge">${String(i + 1).padStart(2, "0")} · ${val(p.semestre)}</span>
            ${imgOrFallback(p.capa, `Capa do projeto ${isPending(p.nome) ? "" : p.nome}`.trim(), "capa")}
          </div>

          <div class="pcard__body">
            <h3 class="pcard__nome"><a href="${url}">${val(p.nome)}</a></h3>
            <p class="pcard__resumo">${esc(p.resumo)}</p>

            <ul class="chips">
              ${visiveis.map((t) => `<li class="chip">${esc(t)}</li>`).join("")}
              ${resto > 0 ? `<li class="chip chip--accent">+${resto}</li>` : ""}
            </ul>

            <div class="pcard__foot">
              <span class="mono subtle">${val(p.categoria)}</span>
              <span class="pcard__cta">Ver projeto ${icon("arrowRight", 15)}</span>
            </div>
          </div>
        </article>`;
      })
      .join("");
  }

  /* --------------------------------------------------------------- Util */
  function aviso(texto) {
    return `<p class="notice reveal">${icon("alert", 18)}<span>${texto} Consulte <code>PENDENCIAS.md</code>.</span></p>`;
  }

  /**
   * Remove uma seção inteira da página quando não há dados para ela,
   * junto com o link correspondente no menu. Evita seção vazia no site.
   */
  function ocultarSecao(id) {
    document.getElementById(id)?.remove();
    document.querySelector(`.nav__link[href="#${id}"]`)?.closest("li")?.remove();
  }

  /* --------------------------------------------------------------- Boot */
  renderHero();
  renderSobre();
  renderStack();
  renderFormacao();
  renderExperiencias();
  renderCursos();
  renderIdiomas();
  renderProjetos();
  renderFooter(mount("footer"), DATA);

  wireImageFallbacks(document);
  initNav();
  initReveal();
})();
