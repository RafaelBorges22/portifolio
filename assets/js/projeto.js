/* ==========================================================================
   Tela de apresentação de um projeto — projeto.html?p=<slug>
   ========================================================================== */
(() => {
  const alvo = document.querySelector('[data-mount="projeto"]');
  const rodape = document.querySelector('[data-mount="footer"]');

  const slug = new URLSearchParams(location.search).get("p");
  const lista = DATA.projetos || [];
  const indice = lista.findIndex((p) => p.slug === slug);
  const projeto = indice >= 0 ? lista[indice] : null;

  renderFooter(rodape, DATA);

  if (!projeto) {
    renderNaoEncontrado();
    initNav();
    initReveal();
    return;
  }

  const nomeLimpo = isPending(projeto.nome) ? "Projeto sem nome definido" : projeto.nome;
  document.title = `${nomeLimpo} — ${DATA.perfil.nomeCurto}`;

  const anterior = lista[indice - 1] || null;
  const proximo = lista[indice + 1] || null;

  alvo.innerHTML = `
    ${renderHero()}
    <div class="container">
      <hr class="divider">
      <div class="p-layout">
        <div>
          ${renderDescricao()}
          ${renderFuncionalidades()}
          ${renderDetalhes()}
          ${renderParticipacao()}
          ${renderScreenshots()}
        </div>
        ${renderAside()}
      </div>
      <hr class="divider">
      ${renderNavProjetos()}
    </div>
  `;

  /* ----------------------------------------------------------------- Hero */
  function renderHero() {
    const repo = safeUrl(projeto.repo);
    const demo = safeUrl(projeto.demo);

    return `
      <div class="container p-hero">
        <a class="crumb reveal" href="index.html#projetos">
          ${icon("arrowLeft", 15)} Voltar para todos os projetos
        </a>

        <div class="p-hero__badges reveal">
          <span class="badge">${String(indice + 1).padStart(2, "0")} de ${String(lista.length).padStart(2, "0")}</span>
          <span class="badge">${icon("calendar", 13)} ${val(projeto.periodo)}</span>
          <span class="badge">${val(projeto.categoria)}</span>
        </div>

        <h1 class="p-hero__title reveal">${val(projeto.nome)}</h1>
        <p class="p-hero__resumo reveal">${esc(projeto.resumo)}</p>

        <div class="p-hero__actions reveal">
          ${
            repo
              ? `<a class="btn btn--primary" href="${esc(repo)}" target="_blank" rel="noopener noreferrer">
                   ${icon("github", 17)} Ver o código ${icon("external", 14)}</a>`
              : `<span class="btn btn--ghost" aria-disabled="true">
                   ${icon("github", 17)} Repositório: ${val(projeto.repo)}</span>`
          }
          ${
            demo
              ? `<a class="btn btn--ghost" href="${esc(demo)}" target="_blank" rel="noopener noreferrer">
                   ${icon("globe", 17)} Ver online ${icon("external", 14)}</a>`
              : ""
          }
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------ Descrição */
  function renderDescricao() {
    const paragrafos = projeto.descricao || [];
    if (!paragrafos.length) return "";

    return `
      <section class="p-block reveal">
        <h2 class="p-block__title">${icon("list", 20)} Descrição do projeto</h2>
        <div class="prose">
          ${paragrafos.map((p) => `<p>${val(p, { html: true })}</p>`).join("")}
        </div>
      </section>
    `;
  }

  /* ------------------------------------------------------ Funcionalidades */
  function renderFuncionalidades() {
    const itens = projeto.funcionalidades || [];
    if (!itens.length) return "";

    return `
      <section class="p-block reveal">
        <h2 class="p-block__title">${icon("check", 20)} Principais funcionalidades</h2>
        <ul class="bullets">
          ${itens.map((i) => `<li>${val(i, { html: true })}</li>`).join("")}
        </ul>
      </section>
    `;
  }

  /* -------------------------------------------------- Detalhes técnicos */
  function renderDetalhes() {
    const itens = projeto.detalhes || [];
    if (!itens.length) return "";

    return itens
      .map(
        (d) => `
        <section class="p-block reveal">
          <h2 class="p-block__title">${icon("code", 20)} ${esc(d.titulo)}</h2>
          <p class="card" style="padding:1.25rem 1.5rem;font-family:var(--font-mono);font-size:var(--step--1);color:var(--fg-muted);line-height:2">
            ${d.conteudo}
          </p>
        </section>`
      )
      .join("");
  }

  /* --------------------------------------------------------- Participação */
  function renderParticipacao() {
    const itens = projeto.participacao || [];
    if (!itens.length) return "";

    return `
      <section class="p-block reveal">
        <h2 class="p-block__title">${icon("user", 20)} Minha participação no projeto</h2>
        <div class="highlight">
          <ul class="bullets">
            ${itens.map((i) => `<li>${val(i, { html: true })}</li>`).join("")}
          </ul>
        </div>
      </section>
    `;
  }

  /* --------------------------------------------------------- Screenshots */
  function renderScreenshots() {
    const shots = (projeto.screenshots || []).filter((s) => has(s.src));

    if (!shots.length) {
      return `
        <section class="p-block reveal">
          <h2 class="p-block__title">${icon("image", 20)} Screenshots</h2>
          <p class="notice">${icon("alert", 18)}
            <span>Nenhuma screenshot cadastrada para este projeto. Adicione as imagens em
            <code>assets/img/projetos/</code> e registre o caminho no array
            <code>screenshots</code> em <code>assets/js/data.js</code>.</span>
          </p>
        </section>
      `;
    }

    return `
      <section class="p-block reveal">
        <h2 class="p-block__title">${icon("image", 20)} Screenshots do projeto em funcionamento</h2>
        <div class="shots">
          ${shots
            .map(
              (s, i) => `
            <button class="card shot" type="button" data-shot="${i}"
                    aria-label="Ampliar: ${esc(s.legenda || `screenshot ${i + 1}`)}">
              <span class="shot__img">${imgOrFallback(s.src, s.legenda || `Screenshot ${i + 1} do projeto`, "shot")}</span>
              ${s.legenda ? `<span class="shot__legenda">${esc(s.legenda)}</span>` : ""}
            </button>`
            )
            .join("")}
        </div>
      </section>
    `;
  }

  /* --------------------------------------------------------------- Aside */
  function renderAside() {
    const techs = projeto.tecnologias || [];

    return `
      <aside class="p-aside reveal">
        <div class="card p-aside__card">
          <p class="p-aside__label">Tecnologias utilizadas</p>
          <ul class="chips">
            ${techs.map((t) => `<li class="chip chip--accent">${esc(t)}</li>`).join("")}
          </ul>
        </div>

        <div class="card p-aside__card">
          <p class="p-aside__label">Ficha do projeto</p>
          <dl class="datalist" style="padding:0">
            <div class="datalist__row" style="grid-template-columns:6.5rem 1fr">
              <dt class="datalist__key">Contexto</dt>
              <dd class="datalist__val">${val(projeto.categoria)}</dd>
            </div>
            <div class="datalist__row" style="grid-template-columns:6.5rem 1fr">
              <dt class="datalist__key">Período</dt>
              <dd class="datalist__val">${val(projeto.periodo)}</dd>
            </div>
            <div class="datalist__row" style="grid-template-columns:6.5rem 1fr">
              <dt class="datalist__key">Autor</dt>
              <dd class="datalist__val">${esc(DATA.perfil.nome)}</dd>
            </div>
          </dl>
        </div>
      </aside>
    `;
  }

  /* -------------------------------------------------- Anterior / próximo */
  function renderNavProjetos() {
    const cartao = (p, dir) => {
      if (!p) return "<span></span>";
      const label = dir === "ant" ? "← Projeto anterior" : "Próximo projeto →";
      return `
        <a class="card p-nav__item ${dir === "prox" ? "p-nav__item--next" : ""}"
           href="projeto.html?p=${encodeURIComponent(p.slug)}">
          <span class="p-nav__dir">${label}</span>
          <span class="p-nav__nome">${val(p.nome)}</span>
        </a>`;
    };

    return `<nav class="p-nav" aria-label="Navegação entre projetos">
      ${cartao(anterior, "ant")}${cartao(proximo, "prox")}
    </nav>`;
  }

  /* -------------------------------------------------------- Slug inválido */
  function renderNaoEncontrado() {
    const cards = lista
      .map(
        (p) => `<a class="btn btn--sm btn--ghost" href="projeto.html?p=${encodeURIComponent(p.slug)}">
                  ${val(p.nome)}</a>`
      )
      .join("");

    alvo.innerHTML = `
      <div class="container empty-state">
        <p class="empty-state__code grad">404</p>
        <h1 class="section__title">Projeto não encontrado</h1>
        <p class="muted" style="max-width:46ch">
          ${
            slug
              ? `Não existe projeto com o identificador <code>${esc(slug)}</code> em <code>data.js</code>.`
              : "Nenhum projeto foi informado na URL. Use <code>projeto.html?p=&lt;slug&gt;</code>."
          }
        </p>
        <a class="btn btn--primary" href="index.html#projetos">
          ${icon("arrowLeft", 17)} Voltar para o portfólio
        </a>
        ${cards ? `<div class="chips" style="justify-content:center;margin-block-start:1rem">${cards}</div>` : ""}
      </div>
    `;
  }

  /* ---------------------------------------------------------------- Boot */
  wireImageFallbacks(alvo);
  initNav();
  initReveal();

  const shots = (projeto.screenshots || []).filter((s) => has(s.src));
  const lightbox = criarLightbox(shots);

  if (lightbox) {
    alvo.querySelectorAll("[data-shot]").forEach((btn) => {
      btn.addEventListener("click", () => lightbox.abrir(Number(btn.dataset.shot)));
    });
  }
})();
