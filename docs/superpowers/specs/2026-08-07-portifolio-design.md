# Portfólio Acadêmico — Rafael Mascarenhas Borges

**Data:** 2026-08-07
**Disciplina:** Laboratório de Desenvolvimento Multiplataforma
**Origem dos requisitos:** `context/Requisito.pdf`
**Origem dos dados:** `context/data.md`

## 1. Objetivo

Página mestra com identidade visual própria contendo os dados pessoais, acadêmicos e
profissionais de Rafael, mais um portfólio com uma tela dedicada por projeto dos 5
primeiros semestres. Hospedagem em GitHub Pages.

## 2. Decisões tomadas

| Decisão | Escolha | Motivo |
|---|---|---|
| Direção visual | Dark tech premium | Alto impacto, destaca screenshots, identidade de dev |
| Telas de projeto | `projeto.html?p=<slug>` renderizado de `data.js` | URL própria por projeto, design em um só lugar, zero duplicação |
| Stack CSS | CSS puro com design tokens | Sem build, sem npm, sobe direto no GitHub Pages |
| Quantidade de projetos | 5 (um por semestre) | Aderência ao requisito |

## 3. Arquitetura

```
index.html            página mestra (requisitos 1–9a)
projeto.html          template único das telas de projeto (requisito 9b)
assets/css/style.css  design system + componentes
assets/js/data.js     FONTE ÚNICA DE VERDADE — todo o conteúdo
assets/js/ui.js       helpers compartilhados (ícones, reveal, lightbox, placeholders)
assets/js/home.js     hidrata a página mestra
assets/js/projeto.js  lê ?p=, monta a tela do projeto, trata slug inválido
assets/img/           foto e screenshots
.nojekyll             desativa o Jekyll no GitHub Pages
```

**Regra:** conteúdo nunca é editado no HTML. Só em `assets/js/data.js`.
Adicionar projeto = adicionar um objeto no array `projetos`.

### Contrato de `data.js`

```js
const DATA = {
  perfil:       { nome, headline, resumo[], foto, local, email, github, linkedin },
  formacao:     { instituicao, curso, inicio, conclusao, situacao, disciplina },
  experiencias: [{ empresa, cargo, inicio, fim, atual, local, atividades[] }],
  cursos:       [{ nome, instituicao, local, cargaHoraria, inicio, fim }],
  idiomas:      [{ idioma, nivel, escala, nota }],
  stack:        [{ grupo, itens[] }],
  projetos:     [{ slug, nome, semestre, periodo, categoria, resumo, capa,
                   descricao[], funcionalidades[], tecnologias[],
                   participacao[], repo, demo, screenshots[] }],
  links:        [{ rotulo, url, icone }]
}
```

## 4. Identidade visual

- **Base:** `#07090C`; superfícies `#0D1017` / `#131822` / `#1A212D`
- **Accent:** ciano `#22D3EE`; secundário violeta `#8B5CF6` (só em gradientes de destaque)
- **Alerta/pendência:** âmbar `#FBBF24`
- **Tipografia:** Inter (texto) + JetBrains Mono (metadados técnicos), Google Fonts com
  `preconnect` e `font-display: swap`, fallback de sistema. Escala fluida com `clamp()`.
- **Assinatura:** grid de fundo sutil, glow radial no hero, borda de gradiente que acende
  no hover dos cards, elevação suave.
- **Motion:** reveal por `IntersectionObserver` (fade + rise, ~400ms), desativado sob
  `prefers-reduced-motion`.

## 5. Seções da página mestra → requisito

| Seção | Requisito |
|---|---|
| Hero (foto, nome completo, headline, CTA GitHub) | 2, 3, 4 |
| Sobre + stack técnica agrupada | — |
| Formação (faculdade, curso, início, previsão de conclusão) | 5 |
| Experiência profissional (timeline: empresa, período, cargo, atividades) | 6 |
| Cursos de extensão (nome, instituição, local, carga horária, período) | 7 |
| Idiomas (idioma + nível) | 8 |
| Projetos (grid de cards clicáveis) | 9a |
| Contato / links | — |

## 6. Tela de projeto

Nome, badge de semestre/categoria, descrição (problema, objetivo, funcionamento),
funcionalidades, chips de tecnologias, bloco destacado **"Minha participação"**,
galeria de screenshots com lightbox, link para o repositório e navegação anterior/próximo.
Slug inexistente → mensagem amigável com link de volta.

## 7. Política de dados

`context/data.md` §22 proíbe inventar: faculdade, curso, semestres, datas acadêmicas,
empresas, cargos, cursos, certificados, idiomas e níveis, links e screenshots.

- Campos não confirmados ficam como string `"[INFORMAR X]"` no `data.js`.
- O renderizador detecta o padrão `[...]` e aplica a classe `.pending` (mono, âmbar,
  borda tracejada) — impossível publicar sem notar.
- Bloco sem nenhum dado real exibe um aviso de seção pendente em vez de quebrar.
- `PENDENCIAS.md` lista exatamente o que preencher, campo por campo.

Conteúdo tratado como confirmado: stack técnica (§3, §24), Sistema de Gerenciamento de
Projetos (§4, §5), API FastAPI em camadas (§6, §7), práticas de Docker/AWS (§9, §10) e
Qualidade de Software (§12).

## 8. Qualidade

- Responsivo mobile-first, 360px → 1440px+
- HTML semântico com landmarks, `skip-link`, foco visível, contraste AA
- `alt` em todas as imagens; fallback quando a imagem não existe (avatar de iniciais /
  placeholder de screenshot)
- Meta tags Open Graph e Twitter Card
- Sem dependências de runtime além das fontes; nenhum passo de build

## 9. Plano de implementação

1. `assets/css/style.css` — tokens, reset, base, componentes, responsivo, a11y
2. `assets/js/data.js` — dados reais + placeholders marcados
3. `assets/js/ui.js` — helpers compartilhados
4. `index.html` + `assets/js/home.js` — página mestra
5. `projeto.html` + `assets/js/projeto.js` — tela de projeto
6. `README.md` (deploy GitHub Pages), `PENDENCIAS.md`, `.nojekyll`
7. Verificação: abrir as duas páginas, checar responsivo e slug inválido
