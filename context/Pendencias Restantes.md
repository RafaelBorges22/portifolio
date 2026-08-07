# CONTEXTO — PENDÊNCIAS DO PORTFÓLIO DE RAFAEL MASCARENHAS BORGES

## Objetivo

Este documento deve ser utilizado como contexto por uma IA para finalizar o portfólio acadêmico/profissional de **Rafael Mascarenhas Borges**.

O arquivo `PENDENCIAS.md` contém a lista oficial de informações que ainda precisam ser preenchidas no projeto. As informações do portfólio ficam concentradas principalmente em:

```text
assets/js/data.js
```

O objetivo é preencher as informações confirmadas utilizando:

1. Informações fornecidas diretamente por Rafael;
2. O perfil público do LinkedIn;
3. O contexto técnico e profissional já conhecido;
4. O arquivo original de pendências.

**Regra principal: não inventar informações.**

Quando uma informação ainda não estiver confirmada, manter como pendência/placeholder.

---

# 1. Perfil

## Nome

```text
Rafael Mascarenhas Borges
```

## E-mail

E-mail de contato confirmado por Rafael:

```text
rafaelmascarenhasborges@gmail.com
```

Portanto:

```js
perfil.email = "rafaelmascarenhasborges@gmail.com"
```

## Local

```text
São Paulo, SP
```

Portanto:

```js
perfil.local = "São Paulo, SP"
```

## LinkedIn

Perfil informado:

```text
https://www.linkedin.com/in/rafael-mascarenhas-borges
```

Portanto:

```js
perfil.linkedin = "https://www.linkedin.com/in/rafael-mascarenhas-borges"
```

## GitHub

O arquivo de pendências informa que o GitHub atualmente está configurado como:

```text
https://github.com/RafaelBorges22
```

Esse endereço foi identificado anteriormente na configuração local do Git, mas ainda precisa ser **confirmado por Rafael** como sendo o perfil correto.

Não alterar ou considerar definitivo sem confirmação.

Caso Rafael confirme:

```js
perfil.github = "https://github.com/RafaelBorges22"
```

O mesmo endereço deverá ser atualizado no array `links`.

---

# 2. Foto

O portfólio espera o arquivo:

```text
assets/img/foto.jpg
```

Formato recomendado:

```text
Proporção: 4:5
Resolução aproximada: 800x1000px
```

Enquanto a foto não existir, a página utiliza um avatar com as iniciais:

```text
RB
```

A foto deve ser fornecida pelo próprio Rafael.

Não utilizar ou gerar uma foto fictícia para representar o usuário.

---

# 3. Formação acadêmica

Informações confirmadas:

```text
Instituição: Fatec Itaquera
Curso: Desenvolvimento de Software Multiplataforma
Início: 2024
Previsão de conclusão: 2026
Semestre atual: 6º semestre
```

Portanto:

```js
formacao.instituicao = "Fatec Itaquera"
formacao.curso = "Desenvolvimento de Software Multiplataforma"
formacao.inicio = "2024"
formacao.conclusao = "2026"
formacao.semestreAtual = "6º semestre"
```

Esses dados devem substituir os placeholders existentes no `assets/js/data.js`.

---

# 4. Experiência profissional atual

## Empresa

```text
STIGMA SYSTEM
```

## Cargo

```text
Desenvolvedor Full Stack
```

## Início

```text
Outubro de 2025
```

## Situação

A experiência é atual.

Portanto:

```js
atual = true
fim = ""
```

## Local

```text
São Paulo, SP
```

## Estrutura esperada

```js
{
    empresa: "STIGMA SYSTEM",
    cargo: "Desenvolvedor Full Stack",
    inicio: "Outubro de 2025",
    fim: "",
    atual: true,
    local: "São Paulo, SP"
}
```

---

# 5. Atividades profissionais

Rafael atua como **Desenvolvedor Full Stack**.

O contexto técnico confirmado apresenta experiência prática com:

### Backend

- Python
- FastAPI
- Django
- Java
- Spring Boot
- APIs REST
- SQLAlchemy
- Pydantic
- Alembic
- JWT
- Autenticação
- Regras de negócio

### Frontend

- React
- Vue.js
- JavaScript
- Vite
- Axios
- Tailwind CSS
- Quasar Framework
- HTML
- CSS

### Bancos de dados

- PostgreSQL
- MySQL
- MongoDB
- SQLite
- SQL

### DevOps / infraestrutura

- Docker
- Docker Compose
- AWS
- Amazon ECR
- EC2
- Git
- GitHub

### Ferramentas

- VS Code
- IntelliJ IDEA
- Postman
- pgAdmin
- MySQL Workbench
- Node.js
- npm

---

## Descrição profissional sugerida

A descrição deve apresentar a atuação como desenvolvedor Full Stack sem afirmar que todas as tecnologias acima são utilizadas necessariamente no emprego atual.

Uma descrição adequada é:

```text
Atuação no desenvolvimento e manutenção de aplicações web,
participando da construção de soluções backend e frontend,
desenvolvimento de APIs REST, integração com bancos de dados,
implementação de regras de negócio, autenticação e integração
entre diferentes componentes da aplicação. Experiência com
Python, FastAPI, React, PostgreSQL, Docker e outras tecnologias
utilizadas no desenvolvimento de sistemas.
```

A descrição pode ser ajustada posteriormente para refletir com maior precisão as atividades realizadas especificamente na STIGMA SYSTEM.

---

# 6. Experiências anteriores

O `experiencias` possui um segundo objeto reservado para uma possível experiência anterior.

Não preencher com informações inventadas.

Se Rafael não possuir outra experiência profissional que queira apresentar no portfólio, remover completamente o segundo objeto:

```js
experiencias
```

---

# 7. Cursos de extensão

O portfólio possui campos para:

```text
nome
instituicao
local
cargaHoraria
inicio
fim
certificado
```

Até o momento, não foram fornecidas informações confirmadas suficientes sobre cursos de extensão.

Portanto, não inventar cursos.

Caso Rafael não possua cursos de extensão que queira apresentar:

```js
cursos = []
```

Caso posteriormente forneça os dados dos cursos, preencher cada objeto individualmente.

---

# 8. Idiomas

Rafael informou que fala apenas:

```text
Português
```

Porém, o portfólio **não precisa apresentar a seção de idiomas**.

Portanto, remover a seção de idiomas do `data.js` ou deixar o array vazio, conforme a estrutura utilizada pelo projeto.

Preferencialmente:

```js
idiomas = []
```

Não adicionar Inglês ou qualquer outro idioma.

---

# 9. Projeto 1 — Sistema de Gerenciamento de Projetos

Esse projeto já possui conteúdo elaborado com base no contexto técnico de Rafael.

Trata-se de um sistema de gerenciamento operacional/projetos.

## Tecnologias conhecidas

```text
Python
FastAPI
React
PostgreSQL
SQLAlchemy
Pydantic
Alembic
Docker
JWT
Axios
Vite
```

## Principais funcionalidades

- Cadastro de projetos;
- Cadastro de usuários;
- Cadastro de serviços;
- Associação de serviços aos projetos;
- Associação de POs aos projetos;
- Controle de fornecedores;
- Controle de alocações;
- Controle de consumo mensal;
- Cálculos financeiros;
- Cálculo de horas;
- Autenticação;
- JWT;
- Upload de arquivos;
- Geração de relatórios;
- Geração de arquivos Excel;
- Integração frontend/backend.

## Pendências

Ainda precisam ser confirmados:

```text
semestre
período
categoria
repositório
screenshots
```

### Categoria

O projeto pode ser classificado como:

```text
Profissional
```

por estar relacionado à experiência profissional de Rafael, porém essa classificação deve ser confirmada antes da publicação caso exista dúvida sobre o contexto em que o projeto foi desenvolvido.

### Repositório

Se o projeto for privado:

```js
repo = ""
```

Não inventar uma URL.

### Screenshots

Adicionar posteriormente:

```text
assets/img/projetos/gerenciamento-capa.png
assets/img/projetos/gerenciamento-login.png
assets/img/projetos/gerenciamento-projetos.png
assets/img/projetos/gerenciamento-alocacoes.png
assets/img/projetos/gerenciamento-relatorios.png
```

As imagens devem representar o sistema real.

---

# 10. Projeto 2 — API REST em FastAPI

Projeto relacionado ao desenvolvimento de uma API utilizando FastAPI.

## Tecnologias

```text
Python
FastAPI
SQLAlchemy
PostgreSQL
Pydantic
Alembic
JWT
Docker
Postman
Swagger/OpenAPI
```

## Conceitos demonstrados

- API REST;
- CRUD;
- Autenticação;
- JWT;
- ORM;
- PostgreSQL;
- Migrations;
- Pydantic;
- Controllers;
- Services;
- Repositories;
- Testes de API;
- Swagger;
- Postman.

## Pendências

Ainda precisam ser confirmados:

```text
semestre
categoria
período
repositório
screenshots
```

### Screenshots

Adicionar:

```text
assets/img/projetos/api-fastapi-capa.png
assets/img/projetos/api-swagger.png
assets/img/projetos/api-postman.png
```

---

# 11. Projetos 3, 4 e 5

O portfólio possui três espaços reservados para completar os cinco projetos.

Atualmente existem categorias prováveis relacionadas a:

```text
Java / Spring Boot
Front-end
Banco de Dados
```

Essas categorias não devem ser tratadas como projetos reais até que os projetos sejam identificados.

Para cada projeto, preencher:

```text
nome
slug
semestre
período
resumo
descrição
funcionalidades
tecnologias
participação
repo
capa
screenshots
```

---

# 12. Como selecionar os projetos 3, 4 e 5

Dar prioridade para projetos realmente realizados por Rafael durante os cinco primeiros semestres.

Prioridade:

1. Projetos acadêmicos da Fatec;
2. Projetos interdisciplinares;
3. Projetos profissionais que possam ser apresentados;
4. Projetos pessoais relevantes;
5. Outros projetos acadêmicos relevantes.

Não criar projetos fictícios apenas para preencher os cinco cards.

---

# 13. Tecnologias que podem aparecer nos projetos

## Backend

```text
Java
Spring Boot
Python
FastAPI
Django
SQLAlchemy
Pydantic
Alembic
```

## Frontend

```text
JavaScript
React
Vue.js
Vite
Axios
Tailwind CSS
Quasar
```

## Banco de dados

```text
PostgreSQL
MySQL
MongoDB
SQLite
SQL
```

## DevOps

```text
Docker
Docker Compose
AWS
Amazon ECR
EC2
Git
GitHub
```

## Ferramentas

```text
VS Code
IntelliJ IDEA
Postman
pgAdmin
MySQL Workbench
Node.js
npm
```

**Importante:** uma tecnologia somente deve ser adicionada à ficha de um projeto quando realmente tiver sido utilizada naquele projeto.

---

# 14. Participação nos projetos

A propriedade:

```text
participacao
```

é uma das partes mais importantes do portfólio.

A descrição deve explicar especificamente:

```text
O que Rafael fez?
```

e não somente:

```text
Quais tecnologias o projeto possui?
```

Exemplo:

```text
Atuei no desenvolvimento do backend da aplicação,
implementando APIs REST, integração com PostgreSQL,
autenticação utilizando JWT e regras de negócio.
Também participei da integração entre frontend e backend
e da implementação das funcionalidades de gerenciamento
do sistema.
```

O texto deve ser adaptado para cada projeto.

---

# 15. Publicação

Depois de todas as informações serem preenchidas:

```text
Publicar no GitHub Pages
```

Depois:

1. Conferir a URL final;
2. Abrir o site;
3. Testar todos os links;
4. Testar todos os cards;
5. Abrir os cinco projetos;
6. Conferir screenshots;
7. Testar em desktop;
8. Testar em celular.

---

# 16. Checklist atualizado

## Perfil

- [x] Nome
- [x] E-mail
- [x] Local
- [x] LinkedIn
- [ ] Foto
- [ ] Confirmar GitHub

## Formação

- [x] Instituição: Fatec Itaquera
- [x] Curso: Desenvolvimento de Software Multiplataforma
- [x] Início: 2024
- [x] Conclusão prevista: 2026
- [x] Semestre atual: 6º semestre

## Experiência profissional

- [x] Empresa: STIGMA SYSTEM
- [x] Cargo: Desenvolvedor Full Stack
- [x] Início: Outubro de 2025
- [x] Experiência atual
- [x] Local: São Paulo, SP
- [ ] Revisar descrição das atividades
- [ ] Confirmar se existe experiência anterior que deve ser apresentada

## Cursos

- [ ] Cursos de extensão
- [ ] Instituições
- [ ] Carga horária
- [ ] Datas
- [ ] Certificados

## Idiomas

- [x] Seção de idiomas não é necessária
- [x] Não adicionar Inglês
- [x] Não adicionar outros idiomas

## Projeto 1

- [ ] Semestre
- [ ] Período
- [ ] Categoria
- [ ] Repositório
- [ ] Screenshots

## Projeto 2

- [ ] Semestre
- [ ] Período
- [ ] Categoria
- [ ] Repositório
- [ ] Screenshots

## Projeto 3

- [ ] Identificar projeto
- [ ] Nome
- [ ] Slug
- [ ] Semestre
- [ ] Período
- [ ] Resumo
- [ ] Descrição
- [ ] Funcionalidades
- [ ] Tecnologias
- [ ] Participação
- [ ] Repositório
- [ ] Capa
- [ ] Screenshots

## Projeto 4

- [ ] Identificar projeto
- [ ] Nome
- [ ] Slug
- [ ] Semestre
- [ ] Período
- [ ] Resumo
- [ ] Descrição
- [ ] Funcionalidades
- [ ] Tecnologias
- [ ] Participação
- [ ] Repositório
- [ ] Capa
- [ ] Screenshots

## Projeto 5

- [ ] Identificar projeto
- [ ] Nome
- [ ] Slug
- [ ] Semestre
- [ ] Período
- [ ] Resumo
- [ ] Descrição
- [ ] Funcionalidades
- [ ] Tecnologias
- [ ] Participação
- [ ] Repositório
- [ ] Capa
- [ ] Screenshots

## Publicação

- [ ] GitHub Pages
- [ ] URL final
- [ ] Teste desktop
- [ ] Teste mobile

---

# 17. Dados pessoais confirmados

Utilizar estes dados como fonte principal para preencher o `data.js`:

```text
Nome:
Rafael Mascarenhas Borges

E-mail:
rafaelmascarenhasborges@gmail.com

Local:
São Paulo, SP

LinkedIn:
https://www.linkedin.com/in/rafael-mascarenhas-borges

Instituição:
Fatec Itaquera

Curso:
Desenvolvimento de Software Multiplataforma

Início:
2024

Previsão de conclusão:
2026

Semestre atual:
6º semestre

Empresa:
STIGMA SYSTEM

Cargo:
Desenvolvedor Full Stack

Início:
Outubro de 2025

Situação:
Atual
```

---

# 18. Regras para a IA

### REGRA 1 — Não inventar

Nunca inventar:

- Empresas;
- Cargos;
- Datas;
- Cursos;
- Certificados;
- Repositórios;
- Projetos;
- Screenshots;
- Tecnologias utilizadas em projetos;
- Experiências profissionais.

### REGRA 2 — Diferenciar conhecimento de experiência

O fato de Rafael conhecer uma tecnologia não significa necessariamente que ela foi utilizada profissionalmente.

### REGRA 3 — Priorizar informações fornecidas diretamente

Quando houver conflito entre informações antigas e informações fornecidas diretamente por Rafael neste documento, utilizar as informações mais recentes fornecidas por Rafael.

### REGRA 4 — Manter placeholders

Se uma informação ainda não estiver confirmada:

```text
não inventar
```

Manter o campo como pendência.

### REGRA 5 — Não adicionar idiomas

Rafael informou que fala apenas português e solicitou que a seção de idiomas não seja apresentada.

### REGRA 6 — Não considerar o GitHub confirmado

O GitHub `RafaelBorges22` ainda precisa ser confirmado antes de ser publicado.

---

# 19. Estado final esperado

Ao concluir as alterações, o `assets/js/data.js` deverá conter as informações reais e atualizadas de Rafael.

A estrutura esperada do portfólio é:

```text
PORTFÓLIO
│
├── Home
│   ├── Foto
│   ├── Nome
│   ├── Apresentação
│   ├── Tecnologias
│   └── Links
│
├── Sobre
│   ├── Formação
│   └── Experiência profissional
│
├── Projetos
│   ├── Projeto 01
│   ├── Projeto 02
│   ├── Projeto 03
│   ├── Projeto 04
│   └── Projeto 05
│
└── Contato
    ├── E-mail
    ├── LinkedIn
    └── GitHub
```

Antes da entrega, verificar se ainda existe qualquer destaque âmbar tracejado no site.

Se existir, significa que ainda há informações pendentes.

---

# 20. Verificação final

Antes de publicar:

1. Abrir `index.html`;
2. Procurar qualquer marca âmbar tracejada;
3. Abrir cada um dos cinco projetos;
4. Repetir a verificação;
5. Testar todos os links;
6. Testar os repositórios;
7. Conferir todas as screenshots;
8. Testar em desktop;
9. Reduzir a janela para largura de celular;
10. Verificar o layout responsivo;
11. Publicar no GitHub Pages;
12. Testar a URL final.