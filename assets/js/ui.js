/* ==========================================================================
   Helpers compartilhados entre index.html e projeto.html
   Sem dependências externas.
   ========================================================================== */

/* --------------------------------------------------------------------------
   Texto e dados
   -------------------------------------------------------------------------- */

/** Escapa texto para uso seguro em HTML/atributos. */
function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** True quando o valor é um placeholder do tipo "[INFORMAR X]". */
function isPending(value) {
  return typeof value === "string" && /^\s*\[[^\]]*\]\s*$/.test(value.trim());
}

/** True quando o valor tem conteúdo real (não vazio e não placeholder). */
function has(value) {
  if (Array.isArray(value)) return value.some(has);
  return typeof value === "string"
    ? value.trim() !== "" && !isPending(value)
    : Boolean(value);
}

/**
 * Renderiza um valor de texto. Placeholders ganham destaque visual âmbar.
 * `html: true` permite tags simples vindas do data.js (strong, code, br).
 */
function val(value, { html = false, vazio = "—" } = {}) {
  if (value === undefined || value === null || String(value).trim() === "") {
    return `<span class="subtle">${esc(vazio)}</span>`;
  }
  if (isPending(value)) {
    return `<span class="pending" title="Dado ainda não informado — ver PENDENCIAS.md">${esc(value)}</span>`;
  }
  return html ? String(value) : esc(value);
}

/** Bloqueia esquemas de URL inseguros. Retorna "" se a URL não for utilizável. */
function safeUrl(url) {
  if (!has(url)) return "";
  const clean = String(url).trim();
  return /^(https?:|mailto:|tel:|#|\/|\.\/|[\w.-]+\/)/i.test(clean) ? clean : "";
}

/** Monta "início — fim" ou "início — Atual". */
function periodo({ inicio, fim, atual }) {
  const de = val(inicio);
  const ate = atual ? "<span class=\"chip chip--accent\">Atual</span>" : val(fim, { vazio: "—" });
  return `${de} <span class="subtle">→</span> ${ate}`;
}

/** Converte HTML em elemento(s). */
function fromHTML(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content;
}

/* --------------------------------------------------------------------------
   Ícones (SVG inline, stroke currentColor)
   -------------------------------------------------------------------------- */
const ICONS = {
  github:
    '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7A5.2 5.2 0 0 0 19.8 5a4.9 4.9 0 0 0-.1-3.6s-1.4-.5-4.6 1.7a12.4 12.4 0 0 0-6.2 0C5.7.9 4.3 1.4 4.3 1.4A4.9 4.9 0 0 0 4.2 5 5.2 5.2 0 0 0 2.8 8.8c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 8 18v4" transform="translate(0 2)"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-11h4v1.5A6 6 0 0 1 16 8Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  mail:
    '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2.5 6 9.5 7 9.5-7"/>',
  external:
    '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 6 6 6-6 6"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  menu: '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  building:
    '<path d="M4 21V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v15"/><path d="M15 10h3a2 2 0 0 1 2 2v9"/><path d="M8 8h3M8 12h3M8 16h3"/><path d="M2 21h20"/>',
  graduation:
    '<path d="M22 9 12 4 2 9l10 5 10-5Z"/><path d="M6 11.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5"/>',
  server:
    '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7.5h.01M7 17h.01"/>',
  layout:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  database:
    '<ellipse cx="12" cy="5.5" rx="8" ry="3.2"/><path d="M4 5.5v13c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-13"/><path d="M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2"/>',
  cloud:
    '<path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.6-1.4A4 4 0 0 0 7 19Z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  tool:
    '<path d="M14.7 6.3a4 4 0 1 0 5 5L21 21H3l9.7-9.7Z"/><path d="m14 14 7 7"/>',
  image:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.8"/><path d="m21 15-5-5L5 21"/>',
  alert:
    '<path d="M12 3 2 20h20L12 3Z"/><path d="M12 9v5"/><path d="M12 17.5h.01"/>',
  code: '<path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
  user: '<path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="8" r="4"/>',
  stack: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z"/>',
};

/** Retorna o markup de um ícone. */
function icon(name, size = 18) {
  const body = ICONS[name];
  if (!body) return "";
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none"
    stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
    stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
}

/* --------------------------------------------------------------------------
   Imagens com fallback (arquivo ainda não adicionado)
   -------------------------------------------------------------------------- */
const IMG_FALLBACKS = {
  capa: `<div class="media-empty">${icon("image", 26)}<span>Screenshot pendente<br>ver PENDENCIAS.md</span></div>`,
  shot: `<div class="media-empty">${icon("image", 26)}<span>Imagem não encontrada</span></div>`,
};

/**
 * Markup de imagem que, se o arquivo não existir, é trocada por um
 * placeholder. Se `src` estiver vazio, já devolve o placeholder.
 */
function imgOrFallback(src, alt, tipo = "capa") {
  const url = safeUrl(src);
  if (!url) return IMG_FALLBACKS[tipo];
  return `<img src="${esc(url)}" alt="${esc(alt)}" loading="lazy" decoding="async" data-fb="${tipo}">`;
}

/** Liga o tratamento de erro das imagens renderizadas dentro de `root`. */
function wireImageFallbacks(root = document) {
  root.querySelectorAll("img[data-fb]").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        const tipo = img.dataset.fb;
        img.replaceWith(fromHTML(IMG_FALLBACKS[tipo] || IMG_FALLBACKS.shot));
      },
      { once: true }
    );
  });
}

/* --------------------------------------------------------------------------
   Animação de entrada
   -------------------------------------------------------------------------- */
function initReveal(root = document) {
  const alvos = root.querySelectorAll(".reveal:not(.is-visible)");
  const reduzido = matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduzido || !("IntersectionObserver" in window)) {
    alvos.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        obs.unobserve(e.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  alvos.forEach((n) => obs.observe(n));
}

/* --------------------------------------------------------------------------
   Barra de navegação
   -------------------------------------------------------------------------- */
function initNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  const marcarScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
  marcarScroll();
  addEventListener("scroll", marcarScroll, { passive: true });

  const toggle = nav.querySelector(".nav__toggle");
  const menu = nav.querySelector(".nav__links");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const aberto = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(aberto));
    });

    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Destaca a seção visível no menu.
  const links = [...nav.querySelectorAll('.nav__link[href^="#"]')];
  const secoes = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (!secoes.length || !("IntersectionObserver" in window)) return;

  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) =>
          a.classList.toggle("is-active", a.getAttribute("href") === `#${e.target.id}`)
        );
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  secoes.forEach((s) => obs.observe(s));
}

/* --------------------------------------------------------------------------
   Lightbox das screenshots
   -------------------------------------------------------------------------- */
function criarLightbox(imagens) {
  if (!imagens.length) return null;

  const node = fromHTML(`
    <div class="lightbox" role="dialog" aria-modal="true" aria-label="Visualização da screenshot">
      <div class="lightbox__bar">
        <span class="lightbox__count mono"></span>
        <button class="icon-btn" type="button" data-lb="fechar" aria-label="Fechar (Esc)">
          ${icon("close", 20)}
        </button>
      </div>
      <div class="lightbox__stage"><img alt=""></div>
      <div class="lightbox__foot">
        <button class="icon-btn" type="button" data-lb="ant" aria-label="Imagem anterior">
          ${icon("chevronLeft", 20)}
        </button>
        <p class="muted lightbox__legenda"></p>
        <button class="icon-btn" type="button" data-lb="prox" aria-label="Próxima imagem">
          ${icon("chevronRight", 20)}
        </button>
      </div>
    </div>
  `).firstElementChild;

  document.body.append(node);

  const img = node.querySelector("img");
  const conta = node.querySelector(".lightbox__count");
  const legenda = node.querySelector(".lightbox__legenda");
  const navBtns = node.querySelectorAll('[data-lb="ant"], [data-lb="prox"]');
  let i = 0;
  let anterior = null;

  const pintar = () => {
    const atual = imagens[i];
    img.src = atual.src;
    img.alt = atual.legenda || `Screenshot ${i + 1}`;
    legenda.textContent = atual.legenda || "";
    conta.textContent = `${i + 1} / ${imagens.length}`;
    navBtns.forEach((b) => (b.hidden = imagens.length < 2));
  };

  const abrir = (indice) => {
    i = indice;
    pintar();
    anterior = document.activeElement;
    node.classList.add("is-open");
    document.body.style.overflow = "hidden";
    node.querySelector('[data-lb="fechar"]').focus();
  };

  const fechar = () => {
    node.classList.remove("is-open");
    document.body.style.overflow = "";
    if (anterior instanceof HTMLElement) anterior.focus();
  };

  const mover = (passo) => {
    i = (i + passo + imagens.length) % imagens.length;
    pintar();
  };

  node.addEventListener("click", (e) => {
    const acao = e.target.closest("[data-lb]")?.dataset.lb;
    if (acao === "fechar" || e.target === node) fechar();
    if (acao === "ant") mover(-1);
    if (acao === "prox") mover(1);
  });

  addEventListener("keydown", (e) => {
    if (!node.classList.contains("is-open")) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft") mover(-1);
    if (e.key === "ArrowRight") mover(1);
  });

  return { abrir };
}

/* --------------------------------------------------------------------------
   Rodapé
   -------------------------------------------------------------------------- */
function renderFooter(alvo, data) {
  if (!alvo) return;

  const links = data.links
    .map((l) => {
      const url = safeUrl(l.url);
      if (!url) {
        return `<span class="btn btn--sm btn--ghost" aria-disabled="true">
          ${icon(l.icone, 16)} ${l.rotulo} ${val(l.url)}
        </span>`;
      }
      const externo = /^https?:/i.test(url);
      return `<a class="btn btn--sm btn--ghost" href="${esc(url)}"
        ${externo ? 'target="_blank" rel="noopener noreferrer"' : ""}>
        ${icon(l.icone, 16)} ${esc(l.rotulo)}
      </a>`;
    })
    .join("");

  alvo.innerHTML = `
    <div class="container footer__inner">
      <div>
        <a class="brand" href="index.html">
          <span class="brand__mark" aria-hidden="true">${esc(data.perfil.iniciais)}</span>
          <span class="brand__text">${esc(data.perfil.nomeCurto)}</span>
        </a>
        <p class="footer__legal">
          Portfólio acadêmico · ${esc(data.formacao.disciplina)}<br>
          © <span data-ano></span> ${esc(data.perfil.nome)}
        </p>
      </div>
      <div class="footer__links">${links}</div>
    </div>
  `;

  const ano = alvo.querySelector("[data-ano]");
  if (ano) ano.textContent = new Date().getFullYear();
}
