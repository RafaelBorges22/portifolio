# CONTEXTO DO USUÁRIO — RAFAEL MASCARENHAS BORGES

## 1. Objetivo deste documento

Este documento serve como contexto para uma IA compreender o perfil acadêmico, profissional e técnico de **Rafael Mascarenhas Borges**, principalmente para auxiliar na criação de seu **portfólio acadêmico/profissional** solicitado na disciplina de **Laboratório de Desenvolvimento Multiplataforma**.

O requisito da atividade determina a criação de uma página mestra individual contendo identidade visual, informações pessoais, formação, experiências profissionais, cursos, idiomas e um portfólio dos projetos desenvolvidos nos primeiros cinco semestres. Cada projeto deve possuir uma página/tela própria com descrição, tecnologias, código, screenshots e participação do aluno. A página final também deve ser hospedada, preferencialmente utilizando GitHub Pages.

---

# 2. Identificação

**Nome completo:** Rafael Mascarenhas Borges

**Área de interesse:** Desenvolvimento de Software / Desenvolvimento Backend / Qualidade de Software / APIs / Sistemas Web

**Perfil:** Desenvolvedor com experiência prática em desenvolvimento de aplicações web, APIs, bancos de dados, testes, Docker, integração entre frontend e backend e resolução de problemas de infraestrutura/desenvolvimento.

---

# 3. Perfil técnico

Rafael possui contato prático com diversas tecnologias de desenvolvimento de software.

### Backend

- Python
- FastAPI
- Django
- Java
- Spring Boot
- SQL
- SQLAlchemy
- Pydantic
- Alembic
- APIs REST
- JWT
- Autenticação e autorização
- Integração com bancos de dados
- Upload e gerenciamento de arquivos
- Geração de relatórios Excel

### Frontend

- JavaScript
- React
- Vue.js
- Vite
- Axios
- Tailwind CSS
- Quasar Framework
- HTML
- CSS
- React Router

### Bancos de dados

- PostgreSQL
- MySQL
- SQLite
- MongoDB

Possui experiência trabalhando com modelagem e integração de aplicações com bancos relacionais e não relacionais.

### DevOps / Infraestrutura

- Docker
- Docker Compose
- AWS
- Amazon ECR
- EC2
- Git
- GitHub
- GitHub Pages
- Variáveis de ambiente
- Containers
- Deploy de APIs

### Ferramentas

- VS Code
- IntelliJ IDEA
- Postman
- Git
- GitHub
- Docker
- pgAdmin
- MySQL Workbench
- Node.js / npm

---

# 4. Experiência com desenvolvimento

Rafael possui experiência prática desenvolvendo sistemas completos envolvendo frontend, backend e banco de dados.

Um dos principais trabalhos recentes envolve uma aplicação de **Gerenciamento de Projetos / Processos Operacionais**, desenvolvida utilizando principalmente:

- Python
- FastAPI
- SQLAlchemy
- Pydantic
- PostgreSQL
- Alembic
- React
- Vite
- Axios
- Docker

O sistema possui conceitos como:

- Usuários
- Projetos
- Serviços
- Alocações
- Fornecedores
- POs
- Consumo mensal
- Relatórios
- Autenticação
- JWT
- Controle de acesso
- Upload de arquivos
- Geração de arquivos Excel
- Cálculos financeiros
- Controle de horas
- APIs REST

---

# 5. Projeto de gerenciamento de processos/projetos

Um dos projetos mais relevantes trabalhados por Rafael é um sistema de gerenciamento operacional.

### Objetivo

O sistema tem como objetivo gerenciar projetos, serviços, recursos, alocações, consumo mensal e informações financeiras relacionadas aos projetos.

### Principais funcionalidades

- Cadastro de projetos
- Cadastro de usuários
- Cadastro de serviços
- Associação de serviços aos projetos
- Associação de POs aos projetos
- Controle de fornecedores
- Controle de alocações
- Controle de consumo mensal
- Cálculo de valores
- Cálculo de horas
- Geração de relatórios
- Upload de arquivos
- Autenticação utilizando JWT
- Controle de acesso
- Integração entre frontend e API

### Exemplo de cálculo de alocação

O sistema trabalha com informações como:

- Fornecedor
- Perfil
- Frente
- Frente de alocação
- Valor unitário
- Quantidade de recursos
- Quantidade semanal
- Total de horas
- Valor total

Um dos cálculos utilizados é:

`Total de horas = quantidade de recursos × quantidade semanal × 44`

E:

`Valor total = total de horas × valor unitário`

---

# 6. Projeto de API com FastAPI

Rafael possui experiência prática na criação de APIs utilizando FastAPI.

A arquitetura utilizada envolve separação de responsabilidades entre camadas, incluindo conceitos como:

- Controllers
- Services
- Repositories
- Entities / Models
- Schemas
- Configurações
- Autenticação
- Banco de dados

Também possui experiência trabalhando com:

- SQLAlchemy ORM
- Pydantic
- Alembic
- PostgreSQL
- UUID
- Enums
- Relacionamentos entre entidades
- Migrations
- JWT

---

# 7. Autenticação

Rafael já trabalhou com autenticação utilizando JWT.

O fluxo envolve:

1. Usuário realiza login.
2. Backend valida as credenciais.
3. API gera um JWT.
4. Frontend armazena o token.
5. Requisições autenticadas enviam o token.
6. Backend valida o token.
7. Rotas protegidas são liberadas conforme as permissões.

Também foi trabalhado o conceito de endpoint `/auth/me` para recuperar os dados do usuário autenticado.

---

# 8. Frontend

Rafael possui experiência com aplicações frontend utilizando React e Vue.js.

No React, já trabalhou com:

- React Router
- Protected Routes
- Axios
- LocalStorage
- Componentização
- Vite
- Integração com APIs
- Formulários
- Componentes personalizados

Também trabalhou com criação de componentes para entrada de horas, incluindo controles do tipo:

`−  campo de horas  +`

Além disso, possui experiência com Vue.js e Quasar Framework.

---

# 9. Docker

Rafael possui experiência utilizando Docker para desenvolvimento e execução de aplicações.

Já trabalhou com:

- Dockerfile
- Docker Compose
- Containers
- PostgreSQL em container
- pgAdmin
- APIs em containers
- Variáveis de ambiente
- Comunicação entre containers
- Volumes
- Imagens Docker

Também estudou estratégias para realizar deploy de uma API FastAPI utilizando:

`GitHub → Build Docker → Amazon ECR → EC2`

---

# 10. AWS

Rafael possui interesse e experiência prática inicial com infraestrutura AWS.

Já estudou uma arquitetura envolvendo:

- AWS EC2
- Amazon ECR
- Docker
- API FastAPI
- GitHub

Fluxo conceitual:

`GitHub`
↓
`Build da aplicação`
↓
`Docker Image`
↓
`Amazon ECR`
↓
`EC2`
↓
`Container da API`

Também estudou como atualizar automaticamente o container quando uma nova imagem é publicada no ECR.

---

# 11. Banco de dados

Rafael possui experiência com diferentes bancos de dados.

### PostgreSQL

É utilizado principalmente em projetos FastAPI.

Já trabalhou com:

- PostgreSQL 17
- SQLAlchemy
- Alembic
- pgAdmin
- Docker
- Migrations
- Relacionamentos
- UUID
- Queries SQL

### MySQL

Também possui experiência com MySQL e ferramentas como MySQL Workbench.

### MongoDB

Possui contato com MongoDB em projetos utilizando aplicações web.

### SQLite

Possui conhecimento e utilização em aplicações menores e ambientes de desenvolvimento.

---

# 12. Qualidade de Software / QA

Além do desenvolvimento, Rafael possui experiência/interesse relacionado a:

- Qualidade de Software
- QA
- Testes
- Casos de teste
- Cenários de teste
- Bugs
- Severidade
- Criticidade
- SLA
- Análise de causa raiz
- Suporte técnico
- Operações
- Gestão de incidentes
- Qualidade operacional
- SysOps

Já trabalhou conceitualmente com criação e execução de cenários e casos de teste.

Também possui experiência com Postman para testes de APIs.

---

# 13. Git e GitHub

Rafael utiliza Git e GitHub no desenvolvimento dos projetos.

Possui experiência com:

- Git clone
- Git add
- Git commit
- Git push
- Git pull
- Branches
- Merge
- Checkout
- Desenvolvimento utilizando branches
- Resolução de conflitos
- Organização de projetos

Também possui interesse em utilizar GitHub Pages para hospedagem do portfólio acadêmico.

---

# 14. Projetos que podem fazer parte do portfólio

Os projetos apresentados no portfólio devem priorizar aqueles que demonstrem evolução técnica durante os semestres.

Possíveis projetos a apresentar:

### 1. Sistema de Gerenciamento de Projetos

Tecnologias:

- Python
- FastAPI
- React
- PostgreSQL
- SQLAlchemy
- Alembic
- Docker
- JWT

Principais conceitos:

- API REST
- Autenticação
- CRUD
- Banco de dados
- Relacionamentos
- Arquitetura em camadas
- Frontend integrado ao backend
- Relatórios
- Upload de arquivos

---

### 2. Projetos Java / Spring Boot

Rafael possui conhecimento e experiência com:

- Java
- Spring Boot
- APIs REST
- SQL
- Backend

Projetos acadêmicos utilizando Java/Spring Boot podem ser incluídos quando os respectivos repositórios e informações forem disponibilizados.

---

### 3. Projetos Frontend

Podem ser apresentados projetos utilizando:

- Vue.js
- React
- JavaScript
- Vite
- Quasar
- Tailwind CSS

Esses projetos podem demonstrar conhecimento de:

- Componentização
- Interfaces
- Formulários
- Listagens
- Cards
- Tabelas
- Navegação
- Integração com APIs

---

### 4. Projetos de banco de dados

Projetos envolvendo:

- MySQL
- PostgreSQL
- MongoDB
- SQL
- Modelagem de dados

também podem ser utilizados para demonstrar a evolução acadêmica.

---

# 15. Estrutura recomendada para cada projeto

Cada projeto do portfólio deverá conter:

## Nome do projeto

Nome oficial do projeto.

## Descrição

Explicar de forma objetiva:

- Qual problema o projeto resolve.
- Qual era o objetivo.
- Como o sistema funciona.
- Qual foi o contexto acadêmico ou profissional.

## Tecnologias

Listar as tecnologias utilizadas.

Exemplo:

`Python • FastAPI • PostgreSQL • React • Docker`

## GitHub

Adicionar o link para o repositório do projeto.

## Screenshots

Adicionar imagens mostrando o projeto funcionando.

## Minha participação

Explicar especificamente o que Rafael desenvolveu.

Exemplo:

- Desenvolvimento do backend.
- Criação de APIs.
- Modelagem do banco.
- Implementação da autenticação.
- Desenvolvimento de telas.
- Integração frontend/backend.
- Implementação de testes.
- Configuração Docker.

---

# 16. Formação acadêmica

O requisito do portfólio exige apresentar:

- Faculdade
- Nome do curso
- Ano/semestre de início
- Previsão de conclusão

Essas informações **não foram confirmadas no histórico disponível** e devem ser preenchidas posteriormente.

Não inventar esses dados.

---

# 17. Experiência profissional

O portfólio deve apresentar experiências profissionais conforme solicitado pela atividade.

Para cada experiência devem ser informados:

- Empresa
- Data de início
- Data de desligamento, caso exista
- Cargo/função
- Descrição das atividades

O histórico disponível indica experiência/interesse em:

- Desenvolvimento de software
- Backend
- APIs
- QA
- Suporte técnico
- Operações
- Qualidade operacional
- SysOps

Entretanto, **datas exatas, nomes completos das empresas e cargos devem ser confirmados antes da publicação**.

---

# 18. Cursos de extensão

O requisito solicita:

- Nome do curso
- Local
- Instituição
- Quantidade de horas
- Data de início
- Data de término

Essas informações não estão suficientemente registradas no contexto disponível.

A IA não deve inventar cursos.

---

# 19. Idiomas

O requisito solicita informar:

- Idioma
- Nível de conhecimento

Os idiomas e respectivos níveis precisam ser confirmados antes da criação da versão definitiva do portfólio.

---

# 20. Identidade visual do portfólio

O portfólio deve possuir uma identidade visual própria.

A interface pode seguir uma estética moderna de desenvolvedor/software engineer, utilizando:

- Design responsivo
- Cards para projetos
- Seções bem organizadas
- Destaque para tecnologias
- Ícones
- Links para GitHub
- Screenshots dos projetos
- Navegação simples
- Animações discretas
- Boa hierarquia visual

A página principal deve funcionar como uma apresentação pessoal e também como um hub para acessar os projetos.

---

# 21. Estrutura sugerida do site

```text
PORTFÓLIO
│
├── Home
│   ├── Nome
│   ├── Foto
│   ├── Apresentação
│   ├── Tecnologias
│   └── Links
│
├── Sobre mim
│   ├── Formação
│   ├── Experiência
│   ├── Cursos
│   └── Idiomas
│
├── Projetos
│   ├── Projeto 01
│   ├── Projeto 02
│   ├── Projeto 03
│   └── Projeto 04
│
└── Contato / Links
    ├── GitHub
    └── Outros links
```

A página principal deve possuir cards para acessar cada projeto, conforme exigido pelo requisito.

---

# 22. Informações que NÃO devem ser inventadas

Ao produzir textos, páginas ou informações sobre Rafael, não inventar:

- Faculdade
- Curso
- Semestre
- Datas acadêmicas
- Previsão de conclusão
- Empresas
- Datas de contratação
- Datas de desligamento
- Cargos oficiais
- Cursos realizados
- Certificados
- Idiomas
- Níveis de idioma
- Links de GitHub
- Links de projetos
- Screenshots
- Participação em projetos que não foi confirmada

Quando uma informação estiver ausente, utilizar um placeholder como:

`[INFORMAR FACULDADE]`

`[INFORMAR LINK DO GITHUB]`

`[INFORMAR DATA]`

em vez de criar uma informação fictícia.

---

# 23. Como a IA deve me ajudar

Ao trabalhar comigo neste portfólio, considere que sou um desenvolvedor em formação com experiência prática principalmente em desenvolvimento de software, backend, APIs, bancos de dados, frontend, Docker, Git/GitHub e qualidade de software.

As respostas devem ser:

- Práticas
- Diretas
- Técnicas quando necessário
- Aplicáveis ao projeto
- Compatíveis com o nível de um estudante/desenvolvedor em formação
- Sem inventar experiências
- Sem exagerar conhecimentos que não foram confirmados

Quando for necessário escrever textos para o portfólio, priorizar uma linguagem profissional, mas natural, evitando frases genéricas de currículo ou textos excessivamente corporativos.

---

# 24. Tecnologias principais para destacar

As principais tecnologias que podem aparecer visualmente no portfólio são:

`Java`

`Spring Boot`

`Python`

`FastAPI`

`Django`

`JavaScript`

`React`

`Vue.js`

`Vite`

`Tailwind CSS`

`Quasar`

`PostgreSQL`

`MySQL`

`MongoDB`

`SQLite`

`SQLAlchemy`

`Pydantic`

`Alembic`

`Docker`

`AWS`

`Git`

`GitHub`

`Postman`

---

# 25. Objetivo final

O objetivo é criar um portfólio acadêmico/profissional que apresente a evolução de Rafael durante os primeiros cinco semestres do curso, demonstrando não apenas os projetos realizados, mas também sua participação, tecnologias utilizadas e evolução como desenvolvedor.

O resultado final deve atender ao requisito acadêmico e, ao mesmo tempo, possuir qualidade suficiente para funcionar como um portfólio profissional.

A página deverá ser publicada na internet, podendo utilizar GitHub Pages, conforme sugestão presente no requisito.