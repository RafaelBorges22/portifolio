# Pendências — o que falta antes de publicar

Tudo que aparece na página com **destaque âmbar tracejado** é dado ainda não
confirmado. Todos os campos estão em um único arquivo: **`assets/js/data.js`**.

---

## ✅ Já preenchido

| Campo | Valor |
|---|---|
| Nome | Rafael Mascarenhas Borges |
| E-mail | rafaelmascarenhasborges@gmail.com |
| Local | São Paulo, SP |
| LinkedIn | linkedin.com/in/rafael-mascarenhas-borges |
| Instituição | Fatec Itaquera |
| Curso | Desenvolvimento de Software Multiplataforma |
| Início | 2024 |
| Previsão de conclusão | 2026 |
| Semestre atual | 6º semestre |
| Empresa | STIGMA SYSTEM |
| Cargo | Desenvolvedor Full Stack |
| Início na empresa | Outubro de 2025 (atual) |
| Local do trabalho | São Paulo, SP |
| Foto de perfil | `assets/img/projetos/imagem-perfil.jpg` |

---

## 🔴 Falta preencher

### 1. Confirmar o GitHub

- [ ] Confirmar que `https://github.com/RafaelBorges22` é o seu perfil.

Esse endereço foi lido da configuração local do Git, não foi confirmado por você.
Se estiver errado, corrija em **dois lugares** no `data.js`: `perfil.github` e o
array `links` (no final do arquivo).

### 2. Projetos 4 e 5

Os dois blocos estão vazios de propósito: nenhum projeto foi definido ainda.
Não foram inventados nomes nem tecnologias.

Para cada um (slugs atuais: `projeto-04`, `projeto-05`):

- [ ] Decidir qual projeto real entra
- [ ] `nome` e `slug` (só minúsculas e hífens — é o que vai na URL)
- [ ] `periodo` e `categoria` (Pessoal · Profissional · Estudo...)
- [ ] `resumo` — 1 a 2 frases (aparece no card)
- [ ] `descricao` — problema, objetivo, funcionamento e contexto
- [ ] `funcionalidades`
- [ ] `tecnologias` — **só o que foi realmente usado naquele projeto**
- [ ] `participacao` — **a parte mais importante**: o que VOCÊ fez, não o que o
      projeto tem
- [ ] `repo`, `capa` e `screenshots`

> **Alternativa:** se não tiver 5 projetos que valham a pena mostrar, apague os
> blocos que sobrarem. A grid se ajusta sozinha, e 2 projetos bem descritos
> valem mais que 5 com placeholder.

### 3. Projeto 1 — Sistema de Gerenciamento de Projetos

Conteúdo já escrito. Falta:

- [ ] `periodo`
- [ ] Confirmar `categoria: "Profissional"`
- [ ] `repo` — link do repositório. **Se for privado, use `repo: ""`** (o botão
      simplesmente não aparece). Não deixe o placeholder.
- [ ] Screenshots em `assets/img/projetos/`:
      `gerenciamento-capa.png`, `gerenciamento-login.png`,
      `gerenciamento-projetos.png`, `gerenciamento-alocacoes.png`,
      `gerenciamento-relatorios.png`

### 4. Projeto 2 — API REST em FastAPI

Conteúdo já escrito. Falta:

- [ ] `periodo` e `categoria`
- [ ] `repo` (ou `""` se privado)
- [ ] Screenshots: `api-fastapi-capa.png`, `api-swagger.png`, `api-postman.png`

### 5. Projeto 3 — VITAL Reciclagem

Conteúdo escrito a partir do README do repositório
[`RafaelBorges22/Vital-Front`](https://github.com/RafaelBorges22/Vital-Front) e da
sua informação de que fez o front-end em Vue e o back-end em Python com Flask,
com Docker usando imagem PostgreSQL. Capa e screenshots já adicionadas. Falta:

- [ ] `periodo`
- [ ] `categoria` — o repositório é um fork de `allanmsilva23/vital-reciclagem-frontend`,
      então parece um projeto em equipe. Preencha com o contexto real
      (ex: "Acadêmico", "Estudo", "Projeto em equipe").
- [ ] Se existir um repositório separado do back-end em Flask, vale citá-lo na
      descrição ou trocar o `repo` para ele — hoje o botão aponta para o front-end.
- [ ] Opcional: screenshots do painel do administrador e da tela de solicitação
      de coleta — são as telas que mais mostram o sistema funcionando.
- [ ] Conferir se a demo <https://vitalreciclagem.vercel.app> continua no ar

### 6. Publicação

- [ ] Publicar no GitHub Pages seguindo o passo a passo do `README.md`
- [ ] Conferir a URL final e testar em um celular

---

## 🟡 Seções desativadas — reative se quiser

Estas seções **não estão quebradas**: elas simplesmente não aparecem no site
porque os arrays estão vazios. É só preencher para elas voltarem, junto com o
link no menu.

### Cursos e certificações

`cursos: []`

Se você tiver qualquer curso ou certificado (Alura, Udemy, Fatec, Senai,
bootcamp, treinamento da empresa), vale muito adicionar — é conteúdo que
recrutador lê. O template está comentado no `data.js`, logo acima de `cursos: []`.

### Idiomas

`idiomas: []` — você informou falar apenas português.

Se quiser exibir a seção, é uma linha:

```js
idiomas: [{ idioma: "Português", nivel: "Nativo", pct: 100, nota: "" }],
```

### Experiência anterior

Só a STIGMA SYSTEM está cadastrada. Se você tiver um emprego anterior que queira
mostrar, há um bloco comentado no `data.js` logo depois da experiência atual —
basta descomentar e preencher.

---

## Checagem final antes de publicar

1. Abrir `index.html` e procurar por **qualquer marca âmbar tracejada** — se
   ainda houver alguma, é dado faltando.
2. Abrir cada projeto pelos cards e repetir a checagem.
3. Testar todos os links (GitHub, LinkedIn, e-mail, repositórios).
4. Reduzir a janela até a largura de celular e verificar o layout.
5. Publicar e testar a URL final no celular.
