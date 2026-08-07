# Pendências — o que falta preencher antes de publicar

Tudo abaixo aparece na página com **destaque âmbar tracejado** enquanto não for
preenchido. Todos os campos estão em um único arquivo: **`assets/js/data.js`**.

Nada aqui foi inventado de propósito — conforme `context/data.md` §22, dados não
confirmados ficam como placeholder em vez de informação fictícia.

---

## 1. Foto e identidade

- [ ] Adicionar `assets/img/foto.jpg` — recorte vertical **4:5**, ~800×1000px.
      Enquanto não existir, a página mostra um avatar com as iniciais "RB".
- [ ] `perfil.email` — e-mail de contato
- [ ] `perfil.local` — cidade / estado
- [ ] `perfil.linkedin` — URL do perfil
- [ ] **Confirmar** `perfil.github` — está como `https://github.com/RafaelBorges22`,
      lido da configuração local do Git. Se não for o perfil correto, corrija
      em `perfil.github` **e** no array `links` (final do arquivo).

## 2. Formação acadêmica — requisito 5

- [ ] `formacao.instituicao` — faculdade e unidade
- [ ] `formacao.curso` — nome exato do curso
- [ ] `formacao.inicio` — ano/semestre de início
- [ ] `formacao.conclusao` — previsão de conclusão
- [ ] `formacao.semestreAtual`

## 3. Experiência profissional — requisito 6

Para **cada** experiência (a atual e as anteriores):

- [ ] `empresa`
- [ ] `cargo`
- [ ] `inicio` e `fim` (deixe `atual: true` no emprego atual e `fim: ""`)
- [ ] `local`
- [ ] `atividades` — revisar a redação. As atividades pré-preenchidas na primeira
      experiência refletem o seu contexto técnico (FastAPI, PostgreSQL, Docker,
      React, JWT, relatórios em Excel). Ajuste para o que você realmente executa
      no cargo, ou apague o que não se aplicar.
- [ ] Se **não houver** emprego anterior, apague o segundo objeto do array
      `experiencias` por completo.

## 4. Cursos de extensão — requisito 7

Existem 2 blocos de exemplo. Para cada curso realizado:

- [ ] `nome`, `instituicao`, `local`, `cargaHoraria`, `inicio`, `fim`
- [ ] `certificado` (opcional) — URL do certificado; se preenchido, aparece um botão
- [ ] Se **não fez** cursos de extensão, deixe `cursos: []`

## 5. Idiomas — requisito 8

- [ ] `Inglês` → informar `nivel` e ajustar `pct` (0–100)
- [ ] Terceiro bloco: informar outro idioma **ou apagar o objeto**
- [ ] Confirmar `Português: Nativo`

## 6. Projetos — requisito 9

### Projeto 1 — Sistema de Gerenciamento de Projetos
Conteúdo já escrito com base no seu contexto técnico. Falta:
- [ ] `semestre`, `periodo`, e confirmar `categoria: "Profissional"`
- [ ] `repo` — link do repositório (se for privado, deixe `""`)
- [ ] Screenshots em `assets/img/projetos/`:
      `gerenciamento-capa.png`, `gerenciamento-login.png`,
      `gerenciamento-projetos.png`, `gerenciamento-alocacoes.png`,
      `gerenciamento-relatorios.png`

### Projeto 2 — API REST em FastAPI
Conteúdo já escrito. Falta:
- [ ] `semestre`, `categoria` (acadêmico ou profissional), `periodo`
- [ ] `repo`
- [ ] Screenshots: `api-fastapi-capa.png`, `api-swagger.png`, `api-postman.png`

### Projetos 3, 4 e 5 — vagas dos semestres restantes
São slots com a stack provável já preenchida (Java/Spring, Front-end, Banco de
Dados). Para cada um:
- [ ] `nome` — nome real do projeto
- [ ] `slug` — identificador da URL (só letras minúsculas e hífens)
- [ ] `semestre`, `periodo`
- [ ] `resumo` — 1 a 2 frases (aparece no card da home)
- [ ] `descricao` — problema, objetivo, funcionamento e contexto acadêmico
- [ ] `funcionalidades`
- [ ] `tecnologias` — ajustar a lista para o que foi realmente usado
- [ ] `participacao` — **o item mais avaliado**: o que exatamente você fez
- [ ] `repo`
- [ ] `capa` e `screenshots`

> Se um projeto não se encaixar nas categorias sugeridas, apenas troque o
> conteúdo — a estrutura é a mesma para qualquer projeto.

## 7. Publicação — requisito 10

- [ ] Publicar no GitHub Pages seguindo o passo a passo do `README.md`
- [ ] Conferir a URL final e testar em um celular

---

## Checagem final antes de entregar

1. Abrir `index.html` e procurar por **qualquer marca âmbar tracejada** — se
   ainda houver alguma, é dado faltando.
2. Abrir cada um dos 5 projetos pelos cards e repetir a checagem.
3. Testar todos os links de repositório.
4. Reduzir a janela até a largura de celular e verificar o layout.
