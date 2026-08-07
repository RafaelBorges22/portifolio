/* ==========================================================================
   FONTE ÚNICA DE VERDADE DO PORTFÓLIO
   --------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para atualizar o conteúdo.
   Nada de conteúdo é escrito direto no HTML.

   REGRA IMPORTANTE
   Qualquer texto entre colchetes — ex: "[INFORMAR FACULDADE]" — é renderizado
   na página com destaque âmbar tracejado, sinalizando dado ainda não
   confirmado. Nunca invente informação: substitua o placeholder pelo dado
   real. A lista completa do que falta está em PENDENCIAS.md.

   Para adicionar um projeto: copie um objeto do array `projetos` e ajuste.
   O `slug` é o que vai na URL -> projeto.html?p=<slug>
   ========================================================================== */

const DATA = {
  /* ------------------------------------------------------------------------
     1. Perfil  (requisitos 2, 3, 4)
     ------------------------------------------------------------------------ */
  perfil: {
    nome: "Rafael Mascarenhas Borges",
    nomeCurto: "Rafael Borges",
    iniciais: "RB",
    headline: "Desenvolvedor <b>Full Stack</b> · Python &amp; FastAPI · React",

    // Coloque a foto em assets/img/foto.jpg (recorte vertical, 4:5, ~800x1000px).
    // Enquanto o arquivo não existir, a página mostra um avatar com as iniciais.
    foto: "assets/img/foto.jpg",
    fotoAlt: "Foto de Rafael Mascarenhas Borges",

    // ATENÇÃO: este endereço foi lido da configuração local do Git e ainda
    // precisa ser confirmado por você. Se estiver errado, corrija aqui E no
    // array `links` no final deste arquivo.
    github: "https://github.com/RafaelBorges22",
    linkedin: "https://www.linkedin.com/in/rafael-mascarenhas-borges",
    email: "rafaelmascarenhasborges@gmail.com",
    local: "São Paulo, SP",

    resumo: [
      "Desenvolvedor Full Stack na <strong>STIGMA SYSTEM</strong> e estudante de Desenvolvimento de Software Multiplataforma na Fatec Itaquera. Trabalho em aplicações web de ponta a ponta: modelagem de banco, construção de APIs REST, integração com o front-end e configuração do ambiente em containers.",
      "No back-end trabalho principalmente com <strong>Python e FastAPI</strong>, aplicando separação em camadas (controllers, services, repositories), SQLAlchemy com Alembic para migrations e autenticação via JWT. Tenho experiência também com <strong>Java e Spring Boot</strong> na construção de APIs REST. No front-end integro essas APIs usando <strong>React</strong>, além de Vue.js e Quasar.",
      "Além do desenvolvimento, trabalho com <strong>Qualidade de Software</strong> — escrita e execução de casos e cenários de teste, automação de testes com <strong>Selenium</strong>, testes de API com Postman, classificação de bugs por severidade e criticidade e análise de causa raiz.",
    ],
  },

  /* ------------------------------------------------------------------------
     2. Formação acadêmica  (requisito 5)
     ------------------------------------------------------------------------ */
  formacao: {
    instituicao: "Fatec Itaquera",
    curso: "Desenvolvimento de Software Multiplataforma",
    inicio: "2024",
    conclusao: "2026",
    situacao: "Cursando",
    semestreAtual: "6º semestre",
    disciplina: "Laboratório de Desenvolvimento Multiplataforma",
  },

  /* ------------------------------------------------------------------------
     3. Experiência profissional  (requisito 6)
     Ordem: da mais recente para a mais antiga.
     `atual: true` exibe o selo "Atual" e ignora o campo `fim`.
     ------------------------------------------------------------------------ */
  experiencias: [
    {
      empresa: "STIGMA SYSTEM",
      cargo: "Desenvolvedor Full Stack",
      inicio: "Outubro de 2025",
      fim: "",
      atual: true,
      local: "São Paulo, SP",
      atividades: [
        "Desenvolvimento e manutenção de aplicações web, atuando tanto no back-end quanto no front-end.",
        "Construção de APIs REST e implementação de regras de negócio da aplicação.",
        "Integração com bancos de dados e modelagem das entidades do domínio.",
        "Implementação de autenticação e controle de acesso.",
        "Integração entre os diferentes componentes da aplicação, conectando interface e API.",
        "Trabalho com Python, FastAPI, React, PostgreSQL, Docker e outras tecnologias utilizadas no desenvolvimento dos sistemas.",
      ],
    },

    /* Se você tiver uma experiência ANTERIOR que queira apresentar, descomente
       o bloco abaixo e preencha. Se não tiver, deixe como está.

    {
      empresa: "",
      cargo: "",
      inicio: "",
      fim: "",
      atual: false,
      local: "",
      atividades: ["", ""],
    },
    */
  ],

  /* ------------------------------------------------------------------------
     4. Cursos de extensão  (requisito 7)

     Array vazio = a seção "Cursos de extensão" NÃO aparece no site.

     ATENÇÃO: o requisito 7 da disciplina pede explicitamente os cursos de
     extensão. Se você tiver QUALQUER curso ou certificado (Alura, Udemy,
     Fatec, Senai, bootcamp, curso da própria empresa...), vale a pena
     adicionar — basta descomentar o bloco abaixo e preencher.

     cursos: [
       {
         nome: "",
         instituicao: "",
         local: "",           // cidade ou "Online"
         cargaHoraria: "",    // ex: "40 horas"
         inicio: "",
         fim: "",
         certificado: "",     // URL do certificado (opcional)
       },
     ],
     ------------------------------------------------------------------------ */
  cursos: [],

  /* ------------------------------------------------------------------------
     5. Idiomas  (requisito 8)

     Array vazio = a seção "Idiomas" NÃO aparece no site.
     Definido assim porque você informou falar apenas português.

     ATENÇÃO: o requisito 8 pede "línguas que fala e nível em cada língua".
     Para exibir a seção com o português, basta usar:

     idiomas: [{ idioma: "Português", nivel: "Nativo", pct: 100, nota: "" }],
     ------------------------------------------------------------------------ */
  idiomas: [],

  /* ------------------------------------------------------------------------
     6. Stack técnica
     ------------------------------------------------------------------------ */
  stack: [
    {
      grupo: "Back-end",
      icone: "server",
      itens: [
        "Python", "FastAPI", "Django", "Java", "Spring Boot",
        "APIs REST", "SQLAlchemy", "Pydantic", "Alembic", "JWT",
      ],
    },
    {
      grupo: "Front-end",
      icone: "layout",
      itens: [
        "JavaScript", "React", "React Router", "Vue.js", "Quasar",
        "Vite", "Axios", "Tailwind CSS", "HTML", "CSS",
      ],
    },
    {
      grupo: "Bancos de dados",
      icone: "database",
      itens: [
        "PostgreSQL", "MySQL", "SQLite", "MongoDB", "SQL", "Modelagem de dados",
      ],
    },
    {
      grupo: "DevOps e Cloud",
      icone: "cloud",
      itens: [
        "Docker", "Docker Compose", "AWS EC2", "Amazon ECR",
        "Git", "GitHub", "GitHub Pages", "Variáveis de ambiente",
      ],
    },
    {
      grupo: "Qualidade de Software",
      icone: "check",
      itens: [
        "Selenium", "Automação de testes", "Casos de teste", "Cenários de teste",
        "Severidade e criticidade", "Análise de causa raiz", "SLA",
        "Gestão de incidentes", "Postman",
      ],
    },
    {
      grupo: "Ferramentas",
      icone: "tool",
      itens: [
        "VS Code", "IntelliJ IDEA", "Postman", "pgAdmin",
        "MySQL Workbench", "Node.js / npm",
      ],
    },
  ],

  /* ------------------------------------------------------------------------
     7. Projetos  (requisito 9)
     Cada objeto gera um card na home e uma tela em projeto.html?p=<slug>
     ------------------------------------------------------------------------ */
  projetos: [
    {
      slug: "gerenciamento-de-projetos",
      nome: "Sistema de Gerenciamento de Projetos e Processos Operacionais",
      semestre: "[INFORMAR SEMESTRE]",
      categoria: "Profissional",
      periodo: "[INFORMAR PERÍODO]",
      destaque: true,
      resumo:
        "Aplicação web completa para gerenciar projetos, serviços, fornecedores, alocação de recursos, consumo mensal e informações financeiras, com API REST em FastAPI e front-end em React.",

      capa: "assets/img/projetos/gerenciamento-capa.png",

      descricao: [
        "O sistema resolve o controle manual e disperso de projetos e alocações que antes era feito em planilhas: cadastro de projetos, serviços associados, POs, fornecedores, alocação de recursos e apuração do consumo mensal ficavam em arquivos separados, sem rastreabilidade e sujeitos a erro de cálculo.",
        "A solução centraliza esses dados em uma API REST com PostgreSQL. Cada projeto passa a ter seus serviços, POs e alocações vinculados, e o consumo mensal é calculado a partir das horas e valores lançados, alimentando os relatórios exportados em Excel.",
        "O acesso é controlado por autenticação JWT: o login gera o token, o front-end o armazena e o envia nas requisições autenticadas, e o back-end valida o token liberando as rotas conforme as permissões do usuário. Um endpoint <code>/auth/me</code> recupera os dados do usuário autenticado.",
      ],

      funcionalidades: [
        "Cadastro de projetos, usuários, serviços e fornecedores",
        "Associação de serviços e POs aos projetos",
        "Controle de alocações por fornecedor, perfil e frente",
        "Apuração de consumo mensal com cálculo de horas",
        "Cálculos financeiros a partir dos valores unitários e das horas apuradas",
        "Geração de relatórios exportados em Excel",
        "Upload e gerenciamento de arquivos",
        "Autenticação JWT com controle de acesso por permissões",
        "Integração completa entre front-end e API REST",
      ],

      // Detalhe técnico que mostra domínio da regra de negócio.
      detalhes: [
        {
          titulo: "Regra de cálculo da alocação",
          conteudo:
            "Total de horas = quantidade de recursos × quantidade semanal × 44<br>Valor total = total de horas × valor unitário",
        },
      ],

      tecnologias: [
        "Python", "FastAPI", "SQLAlchemy", "Pydantic", "Alembic",
        "PostgreSQL", "JWT", "React", "Vite", "Axios", "Docker",
      ],

      participacao: [
        "Modelagem das entidades do domínio (projetos, serviços, alocações, fornecedores, POs e consumo mensal) e dos relacionamentos no PostgreSQL.",
        "Construção da API REST em FastAPI com separação em camadas: controllers, services, repositories, entities e schemas.",
        "Versionamento do schema do banco com Alembic (migrations) e mapeamento com SQLAlchemy, usando UUID e enums.",
        "Implementação do fluxo de autenticação com JWT, rotas protegidas e controle de acesso, incluindo o endpoint <code>/auth/me</code>.",
        "Desenvolvimento das telas em React com Vite, React Router e rotas protegidas, consumindo a API via Axios.",
        "Criação de componentes próprios de lançamento de horas (controle <code>− valor +</code>) e dos formulários de alocação.",
        "Implementação dos cálculos de horas e valores e da exportação dos relatórios em Excel.",
        "Configuração do ambiente com Docker e Docker Compose (API, PostgreSQL e pgAdmin), volumes e variáveis de ambiente.",
      ],

      // Substitua pelo link real do repositório. Se for privado, deixe "".
      repo: "[INFORMAR LINK DO REPOSITÓRIO]",
      demo: "",

      // Coloque os arquivos em assets/img/projetos/ com estes nomes,
      // ou ajuste os caminhos abaixo.
      screenshots: [
        { src: "assets/img/projetos/gerenciamento-login.png", legenda: "Tela de login com autenticação JWT" },
        { src: "assets/img/projetos/gerenciamento-projetos.png", legenda: "Listagem e cadastro de projetos" },
        { src: "assets/img/projetos/gerenciamento-alocacoes.png", legenda: "Controle de alocações e cálculo de horas" },
        { src: "assets/img/projetos/gerenciamento-relatorios.png", legenda: "Geração de relatórios em Excel" },
      ],
    },

    {
      slug: "api-rest-fastapi",
      nome: "API REST em FastAPI com arquitetura em camadas",
      semestre: "[INFORMAR SEMESTRE]",
      categoria: "[INFORMAR CONTEXTO — Acadêmico ou Profissional]",
      periodo: "[INFORMAR PERÍODO]",
      destaque: false,
      resumo:
        "API REST construída com FastAPI aplicando separação de responsabilidades em camadas, ORM com SQLAlchemy, validação com Pydantic, migrations com Alembic e autenticação JWT.",

      capa: "assets/img/projetos/api-fastapi-capa.png",

      descricao: [
        "Projeto focado em organizar uma API de forma que ela continue sustentável quando cresce. Em vez de concentrar regra de negócio nas rotas, as responsabilidades ficam divididas em camadas: <strong>controllers</strong> recebem a requisição, <strong>services</strong> aplicam a regra de negócio, <strong>repositories</strong> falam com o banco, e <strong>entities/schemas</strong> definem o modelo persistido e o contrato de entrada e saída.",
        "A persistência usa SQLAlchemy como ORM sobre PostgreSQL, com identificadores UUID, enums, relacionamentos entre entidades e migrations versionadas com Alembic. A validação de dados de entrada e saída é feita com Pydantic.",
        "A autenticação segue o fluxo completo de JWT: validação de credenciais no login, emissão do token, envio do token nas requisições autenticadas e validação no back-end para liberar as rotas protegidas conforme as permissões.",
      ],

      funcionalidades: [
        "Estrutura em camadas (controllers, services, repositories, entities, schemas)",
        "CRUD completo com validação via Pydantic",
        "Relacionamentos entre entidades e uso de UUID e enums",
        "Migrations versionadas com Alembic",
        "Autenticação JWT e rotas protegidas",
        "Documentação automática da API (OpenAPI / Swagger)",
        "Execução em container com PostgreSQL via Docker Compose",
      ],

      tecnologias: [
        "Python", "FastAPI", "SQLAlchemy", "Pydantic", "Alembic",
        "PostgreSQL", "JWT", "Docker", "Postman", "Swagger / OpenAPI",
      ],

      participacao: [
        "Definição da estrutura de pastas e das fronteiras entre as camadas da aplicação.",
        "Modelagem das entidades e dos relacionamentos, com UUID como chave e enums para estados do domínio.",
        "Configuração do SQLAlchemy e do Alembic, criando e aplicando as migrations.",
        "Implementação dos schemas Pydantic para validação de entrada e serialização de saída.",
        "Implementação do login, geração e validação de JWT e proteção das rotas.",
        "Testes manuais dos endpoints com Postman, cobrindo casos de sucesso e de erro.",
        "Containerização da API e do banco com Docker Compose e uso de variáveis de ambiente.",
      ],

      repo: "[INFORMAR LINK DO REPOSITÓRIO]",
      demo: "",

      screenshots: [
        { src: "assets/img/projetos/api-swagger.png", legenda: "Documentação automática gerada pelo FastAPI" },
        { src: "assets/img/projetos/api-postman.png", legenda: "Testes dos endpoints no Postman" },
      ],
    },

    /* ----------------------------------------------------------------------
       PROJETOS 3, 4 e 5 — ainda não identificados.

       Nada aqui foi presumido de propósito: nome, tecnologias e contexto
       ficam em branco até você indicar QUAIS projeto reais entram.

       Ordem de prioridade para escolher (do mais para o menos relevante):
         1. Projetos acadêmicos da Fatec
         2. Projetos interdisciplinares
         3. Projetos profissionais que possam ser apresentados
         4. Projetos pessoais relevantes

       Ao preencher, troque também o `slug` por algo descritivo
       (só minúsculas e hífens) — ele é o que vai na URL.

       Regra: só liste em `tecnologias` o que realmente foi usado NAQUELE
       projeto. E em `participacao`, descreva o que VOCÊ fez, não o que o
       projeto tem.
       ---------------------------------------------------------------------- */
    {
      slug: "projeto-03",
      nome: "[INFORMAR NOME DO PROJETO]",
      semestre: "[INFORMAR SEMESTRE]",
      categoria: "[INFORMAR CONTEXTO]",
      periodo: "[INFORMAR PERÍODO]",
      destaque: false,
      resumo:
        "Projeto ainda não definido. Escolha um projeto real dos seus primeiros semestres e preencha os campos deste bloco em assets/js/data.js.",

      capa: "",

      descricao: [
        "[INFORMAR: qual problema o projeto resolve]",
        "[INFORMAR: qual era o objetivo e como o sistema funciona]",
        "[INFORMAR: qual foi o contexto — disciplina, semestre ou empresa]",
      ],

      funcionalidades: [
        "[INFORMAR FUNCIONALIDADE 1]",
        "[INFORMAR FUNCIONALIDADE 2]",
      ],

      tecnologias: ["[INFORMAR TECNOLOGIAS]"],

      participacao: [
        "[INFORMAR: o que exatamente você desenvolveu neste projeto]",
        "[INFORMAR: quais tecnologias você usou na sua parte]",
      ],

      repo: "[INFORMAR LINK DO REPOSITÓRIO]",
      demo: "",
      screenshots: [],
    },

    {
      slug: "projeto-04",
      nome: "[INFORMAR NOME DO PROJETO]",
      semestre: "[INFORMAR SEMESTRE]",
      categoria: "[INFORMAR CONTEXTO]",
      periodo: "[INFORMAR PERÍODO]",
      destaque: false,
      resumo:
        "Projeto ainda não definido. Escolha um projeto real dos seus primeiros semestres e preencha os campos deste bloco em assets/js/data.js.",

      capa: "",

      descricao: [
        "[INFORMAR: qual problema o projeto resolve]",
        "[INFORMAR: qual era o objetivo e como o sistema funciona]",
        "[INFORMAR: qual foi o contexto — disciplina, semestre ou empresa]",
      ],

      funcionalidades: [
        "[INFORMAR FUNCIONALIDADE 1]",
        "[INFORMAR FUNCIONALIDADE 2]",
      ],

      tecnologias: ["[INFORMAR TECNOLOGIAS]"],

      participacao: [
        "[INFORMAR: o que exatamente você desenvolveu neste projeto]",
        "[INFORMAR: quais tecnologias você usou na sua parte]",
      ],

      repo: "[INFORMAR LINK DO REPOSITÓRIO]",
      demo: "",
      screenshots: [],
    },

    {
      slug: "projeto-05",
      nome: "[INFORMAR NOME DO PROJETO]",
      semestre: "[INFORMAR SEMESTRE]",
      categoria: "[INFORMAR CONTEXTO]",
      periodo: "[INFORMAR PERÍODO]",
      destaque: false,
      resumo:
        "Projeto ainda não definido. Escolha um projeto real dos seus primeiros semestres e preencha os campos deste bloco em assets/js/data.js.",

      capa: "",

      descricao: [
        "[INFORMAR: qual problema o projeto resolve]",
        "[INFORMAR: qual era o objetivo e como o sistema funciona]",
        "[INFORMAR: qual foi o contexto — disciplina, semestre ou empresa]",
      ],

      funcionalidades: [
        "[INFORMAR FUNCIONALIDADE 1]",
        "[INFORMAR FUNCIONALIDADE 2]",
      ],

      tecnologias: ["[INFORMAR TECNOLOGIAS]"],

      participacao: [
        "[INFORMAR: o que exatamente você desenvolveu neste projeto]",
        "[INFORMAR: quais tecnologias você usou na sua parte]",
      ],

      repo: "[INFORMAR LINK DO REPOSITÓRIO]",
      demo: "",
      screenshots: [],
    },
  ],

  /* ------------------------------------------------------------------------
     8. Links de contato (rodapé)
     ------------------------------------------------------------------------ */
  links: [
    { rotulo: "GitHub", url: "https://github.com/RafaelBorges22", icone: "github" },
    { rotulo: "LinkedIn", url: "https://www.linkedin.com/in/rafael-mascarenhas-borges", icone: "linkedin" },
    { rotulo: "E-mail", url: "mailto:rafaelmascarenhasborges@gmail.com", icone: "mail" },
  ],
};
