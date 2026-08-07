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
    headline: "Desenvolvedor <b>Back-end</b> · APIs REST · Qualidade de Software",

    // Coloque a foto em assets/img/foto.jpg (recorte vertical, 4:5, ~800x1000px).
    // Enquanto o arquivo não existir, a página mostra um avatar com as iniciais.
    foto: "assets/img/foto.jpg",
    fotoAlt: "Foto de Rafael Mascarenhas Borges",

    // Confirme se este é o seu perfil (foi lido da configuração local do Git).
    github: "https://github.com/RafaelBorges22",
    linkedin: "[INFORMAR LINKEDIN]",
    email: "[INFORMAR E-MAIL]",
    local: "[INFORMAR CIDADE / ESTADO]",

    resumo: [
      "Desenvolvedor em formação com experiência prática em aplicações web de ponta a ponta: modelagem de banco, construção de APIs REST, integração com o front-end e configuração do ambiente em containers.",
      "No back-end trabalho principalmente com <strong>Python e FastAPI</strong>, aplicando separação em camadas (controllers, services, repositories), SQLAlchemy com Alembic para migrations e autenticação via JWT. No front-end integro essas APIs usando <strong>React</strong> e <strong>Vue.js</strong>.",
      "Também tenho forte interesse em <strong>Qualidade de Software</strong> — escrita e execução de casos e cenários de teste, classificação de bugs por severidade e criticidade, análise de causa raiz e testes de API com Postman.",
    ],
  },

  /* ------------------------------------------------------------------------
     2. Formação acadêmica  (requisito 5)
     ------------------------------------------------------------------------ */
  formacao: {
    // O requisito da disciplina veio da Fatec / Centro Paula Souza.
    // Preencha com a unidade e o nome exato do curso conforme sua matrícula.
    instituicao: "[INFORMAR FACULDADE / UNIDADE]",
    curso: "[INFORMAR NOME DO CURSO]",
    inicio: "[INFORMAR ANO/SEMESTRE DE INÍCIO]",
    conclusao: "[INFORMAR PREVISÃO DE CONCLUSÃO]",
    situacao: "Cursando",
    semestreAtual: "[INFORMAR SEMESTRE ATUAL]",
    disciplina: "Laboratório de Desenvolvimento Multiplataforma",
  },

  /* ------------------------------------------------------------------------
     3. Experiência profissional  (requisito 6)
     Ordem: da mais recente para a mais antiga.
     `atual: true` exibe o selo "Atual" e ignora o campo `fim`.
     ------------------------------------------------------------------------ */
  experiencias: [
    {
      empresa: "[INFORMAR NOME DA EMPRESA]",
      cargo: "[INFORMAR CARGO / FUNÇÃO]",
      inicio: "[INFORMAR DATA DE INÍCIO]",
      fim: "",
      atual: true,
      local: "[INFORMAR CIDADE / MODELO DE TRABALHO]",
      // As atividades abaixo refletem o que está registrado no seu contexto
      // técnico. Ajuste a redação para o que você realmente executa no cargo.
      atividades: [
        "Desenvolvimento e manutenção de APIs REST em Python/FastAPI com arquitetura em camadas.",
        "Modelagem de banco de dados PostgreSQL, versionamento de schema com Alembic e consultas via SQLAlchemy.",
        "Implementação de autenticação e autorização com JWT e controle de acesso por permissões.",
        "Integração do back-end com interfaces em React, incluindo formulários e componentes de lançamento de horas.",
        "Configuração de ambientes com Docker e Docker Compose (API, PostgreSQL e pgAdmin em containers).",
        "Geração de relatórios em Excel e rotinas de cálculo de horas e valores.",
      ],
    },
    // Duplique o bloco abaixo para cada experiência anterior. Se não houver
    // experiência anterior, apague este objeto por completo.
    {
      empresa: "[INFORMAR EMPRESA ANTERIOR — ou apague este bloco]",
      cargo: "[INFORMAR CARGO / FUNÇÃO]",
      inicio: "[INFORMAR DATA DE INÍCIO]",
      fim: "[INFORMAR DATA DE DESLIGAMENTO]",
      atual: false,
      local: "[INFORMAR CIDADE]",
      atividades: [
        "[INFORMAR ATIVIDADE 1]",
        "[INFORMAR ATIVIDADE 2]",
      ],
    },
  ],

  /* ------------------------------------------------------------------------
     4. Cursos de extensão  (requisito 7)
     Não invente cursos. Se não fez nenhum, deixe o array vazio: cursos: []
     ------------------------------------------------------------------------ */
  cursos: [
    {
      nome: "[INFORMAR NOME DO CURSO]",
      instituicao: "[INFORMAR INSTITUIÇÃO]",
      local: "[INFORMAR LOCAL / ONLINE]",
      cargaHoraria: "[INFORMAR CARGA HORÁRIA]",
      inicio: "[INFORMAR DATA DE INÍCIO]",
      fim: "[INFORMAR DATA DE TÉRMINO]",
      certificado: "",
    },
    {
      nome: "[INFORMAR NOME DO CURSO]",
      instituicao: "[INFORMAR INSTITUIÇÃO]",
      local: "[INFORMAR LOCAL / ONLINE]",
      cargaHoraria: "[INFORMAR CARGA HORÁRIA]",
      inicio: "[INFORMAR DATA DE INÍCIO]",
      fim: "[INFORMAR DATA DE TÉRMINO]",
      certificado: "",
    },
  ],

  /* ------------------------------------------------------------------------
     5. Idiomas  (requisito 8)
     `escala` aceita: Básico | Intermediário | Avançado | Fluente | Nativo
     `pct` (0–100) controla o tamanho da barra.
     ------------------------------------------------------------------------ */
  idiomas: [
    {
      idioma: "Português",
      nivel: "Nativo",
      pct: 100,
      nota: "",
    },
    {
      idioma: "Inglês",
      nivel: "[INFORMAR NÍVEL]",
      pct: 0,
      nota: "Informe o nível (ex: Intermediário / B1) e ajuste `pct`.",
    },
    // Adicione outros idiomas ou apague este bloco se não houver.
    {
      idioma: "[INFORMAR IDIOMA — ou apague este bloco]",
      nivel: "[INFORMAR NÍVEL]",
      pct: 0,
      nota: "",
    },
  ],

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
        "Casos de teste", "Cenários de teste", "Severidade e criticidade",
        "Análise de causa raiz", "SLA", "Gestão de incidentes", "Postman",
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
        "Apuração de consumo mensal com cálculo de horas e valores",
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
        "PostgreSQL", "JWT", "Docker", "Postman",
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
       Os três projetos abaixo são as vagas dos semestres restantes.
       As tecnologias listadas seguem o seu contexto técnico — troque o nome,
       a descrição, o link e as screenshots pelos dados reais do projeto.
       ---------------------------------------------------------------------- */
    {
      slug: "projeto-java-spring",
      nome: "[INFORMAR NOME DO PROJETO — Java / Spring Boot]",
      semestre: "[INFORMAR SEMESTRE]",
      categoria: "Acadêmico",
      periodo: "[INFORMAR PERÍODO]",
      destaque: false,
      resumo:
        "Vaga reservada para o projeto acadêmico desenvolvido em Java com Spring Boot. Preencha a descrição, o repositório e as screenshots no arquivo assets/js/data.js.",

      capa: "",

      descricao: [
        "[INFORMAR: qual problema o projeto resolve]",
        "[INFORMAR: qual era o objetivo e como o sistema funciona]",
        "[INFORMAR: qual foi o contexto acadêmico — disciplina e semestre]",
      ],

      funcionalidades: [
        "[INFORMAR FUNCIONALIDADE 1]",
        "[INFORMAR FUNCIONALIDADE 2]",
      ],

      tecnologias: ["Java", "Spring Boot", "APIs REST", "SQL", "MySQL", "Git"],

      participacao: [
        "[INFORMAR: o que exatamente você desenvolveu neste projeto]",
        "[INFORMAR: quais tecnologias você usou na sua parte]",
      ],

      repo: "[INFORMAR LINK DO REPOSITÓRIO]",
      demo: "",
      screenshots: [],
    },

    {
      slug: "projeto-frontend",
      nome: "[INFORMAR NOME DO PROJETO — Front-end Vue.js / React]",
      semestre: "[INFORMAR SEMESTRE]",
      categoria: "Acadêmico",
      periodo: "[INFORMAR PERÍODO]",
      destaque: false,
      resumo:
        "Vaga reservada para o projeto de interface desenvolvido com Vue.js/Quasar ou React, demonstrando componentização, formulários, listagens e consumo de API.",

      capa: "",

      descricao: [
        "[INFORMAR: qual problema o projeto resolve]",
        "[INFORMAR: qual era o objetivo e como a interface funciona]",
        "[INFORMAR: qual foi o contexto acadêmico — disciplina e semestre]",
      ],

      funcionalidades: [
        "[INFORMAR FUNCIONALIDADE 1]",
        "[INFORMAR FUNCIONALIDADE 2]",
      ],

      tecnologias: ["JavaScript", "Vue.js", "Quasar", "Vite", "Axios", "Tailwind CSS"],

      participacao: [
        "[INFORMAR: quais telas e componentes você construiu]",
        "[INFORMAR: como fez a integração com a API]",
      ],

      repo: "[INFORMAR LINK DO REPOSITÓRIO]",
      demo: "",
      screenshots: [],
    },

    {
      slug: "projeto-banco-de-dados",
      nome: "[INFORMAR NOME DO PROJETO — Banco de Dados]",
      semestre: "[INFORMAR SEMESTRE]",
      categoria: "Acadêmico",
      periodo: "[INFORMAR PERÍODO]",
      destaque: false,
      resumo:
        "Vaga reservada para o projeto de modelagem e consultas em banco de dados (MySQL, PostgreSQL ou MongoDB), incluindo modelo conceitual, lógico e físico.",

      capa: "",

      descricao: [
        "[INFORMAR: qual problema o projeto resolve]",
        "[INFORMAR: qual foi o escopo da modelagem e quais consultas foram desenvolvidas]",
        "[INFORMAR: qual foi o contexto acadêmico — disciplina e semestre]",
      ],

      funcionalidades: [
        "[INFORMAR FUNCIONALIDADE 1]",
        "[INFORMAR FUNCIONALIDADE 2]",
      ],

      tecnologias: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Modelagem de dados"],

      participacao: [
        "[INFORMAR: qual parte da modelagem e das consultas você fez]",
        "[INFORMAR: quais ferramentas você utilizou]",
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
    { rotulo: "LinkedIn", url: "[INFORMAR LINKEDIN]", icone: "linkedin" },
    { rotulo: "E-mail", url: "[INFORMAR E-MAIL]", icone: "mail" },
  ],
};
