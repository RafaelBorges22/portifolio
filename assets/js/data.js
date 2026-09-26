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
     1. Perfil
     ------------------------------------------------------------------------ */
  perfil: {
    nome: "Rafael Mascarenhas Borges",
    nomeCurto: "Rafael Borges",
    iniciais: "RB",

    // Linha pequena acima do nome, no topo da página.
    eyebrow: "Portfólio pessoal · São Paulo, Brasil",

    headline: "Desenvolvedor <b>Full Stack</b> · Python &amp; FastAPI · Java &amp; Spring Boot · React",

    // A moldura da foto é 4:5 (vertical) e usa `object-fit: cover`, então a
    // imagem é centralizada e o excedente é cortado — uma foto quadrada perde
    // ~10% de cada lateral. Se trocar, o ideal é um recorte 4:5 (~800x1000px).
    // Se o arquivo não existir, a página mostra um avatar com as iniciais.
    foto: "assets/img/projetos/imagem-perfil.jpg",
    fotoAlt: "Foto de Rafael Mascarenhas Borges",

    // ATENÇÃO: este endereço foi lido da configuração local do Git e ainda
    // precisa ser confirmado por você. Se estiver errado, corrija aqui E no
    // array `links` no final deste arquivo.
    github: "https://github.com/RafaelBorges22",
    linkedin: "https://www.linkedin.com/in/rafael-mascarenhas-borges",
    email: "rafaelmascarenhasborges@gmail.com",
    local: "São Paulo, SP",

    resumo: [
      "Desenvolvedor Full Stack na <strong>STIGMA SYSTEM</strong>, graduando em Desenvolvimento de Software Multiplataforma na Fatec Itaquera. Trabalho em aplicações web de ponta a ponta: modelagem de banco, construção de APIs REST, integração com o front-end e configuração do ambiente em containers.",
      "No back-end trabalho principalmente com <strong>Python e FastAPI</strong>, aplicando separação em camadas (controllers, services, repositories), SQLAlchemy com Alembic para migrations e autenticação via JWT. Tenho experiência também com <strong>Java e Spring Boot</strong> na construção de APIs REST. No front-end integro essas APIs usando <strong>React</strong>, além de Vue.js e Quasar.",
      "Além do desenvolvimento, trabalho com <strong>Qualidade de Software</strong> — escrita e execução de casos e cenários de teste, automação de testes com <strong>Selenium</strong>, testes de API com Postman, classificação de bugs por severidade e criticidade e análise de causa raiz.",
    ],
  },

  /* ------------------------------------------------------------------------
     2. Formação
     ------------------------------------------------------------------------ */
  formacao: {
    instituicao: "Fatec Itaquera",
    curso: "Desenvolvimento de Software Multiplataforma",
    inicio: "2024",
    conclusao: "2026",
    situacao: "Cursando",
    semestreAtual: "6º semestre",
  },

  /* ------------------------------------------------------------------------
     3. Experiência profissional
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
     4. Cursos e certificações

     Array vazio = a seção "Cursos e certificações" NÃO aparece no site.

     Se você tiver qualquer curso ou certificado (Alura, Udemy, Fatec, Senai,
     bootcamp, treinamento da empresa...), vale a pena adicionar — basta
     descomentar o bloco abaixo e preencher.

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
     5. Idiomas

     Array vazio = a seção "Idiomas" NÃO aparece no site.
     Definido assim porque você informou falar apenas português.

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
        "Python", "FastAPI", "Flask", "Django", "Java", "Spring Boot",
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
     7. Projetos
     Cada objeto gera um card na home e uma tela em projeto.html?p=<slug>
     ------------------------------------------------------------------------ */
  projetos: [
    {
      slug: "fluxora",
      nome: "Fluxora — Plataforma para nutricionistas de gestantes",
      categoria: "Acadêmico · Projeto Interdisciplinar",
      periodo: "2º semestre",
      destaque: true,
      resumo:
        "Projeto interdisciplinar do 2º semestre: plataforma web para nutricionistas que atendem gestantes, com site de apresentação, planos, depoimentos, contato e área de acesso com cadastro e login. Front-end em React com Tailwind CSS e back-end em PHP.",

      capa: "assets/img/projetos/Fluxora-Home.png",

      descricao: [
        "A Fluxora nasceu como projeto interdisciplinar do 2º semestre, reunindo em um único trabalho os conteúdos de desenvolvimento web, banco de dados e levantamento de requisitos vistos ao longo do semestre.",
        "O produto é uma plataforma voltada para <strong>nutricionistas que acompanham gestantes</strong> — um público em que o acompanhamento nutricional precisa ser contínuo e personalizado. O site apresenta a proposta da plataforma, as seções <em>Sobre</em>, <em>Planos</em>, <em>Depoimentos</em> e <em>Contato</em>, e leva o visitante até a área de acesso, onde ele se cadastra e entra na conta.",
        "O front-end foi construído em <strong>React</strong>, com a interface estilizada em <strong>Tailwind CSS</strong> e organizada em componentes reutilizáveis (cabeçalho, seções da landing page, cards de plano e de depoimento, formulários e rodapé). O back-end foi feito em <strong>PHP</strong>, responsável pelo cadastro de usuários, pela validação das credenciais no login e pela persistência dos dados enviados pelo site.",
      ],

      funcionalidades: [
        "Landing page com navegação entre as seções Início, Sobre, Planos, Depoimentos e Contato",
        "Apresentação da proposta da plataforma para nutricionistas de gestantes",
        "Seção de planos e de depoimentos de usuárias",
        "Formulário de contato",
        "Cadastro de usuário",
        "Login com e-mail e senha, exibir/ocultar senha e recuperação de senha",
        "Layout responsivo construído com utilitários do Tailwind CSS",
      ],

      tecnologias: [
        "React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "PHP",
      ],

      participacao: [
        "Participação no levantamento de requisitos e na definição das telas e seções da plataforma junto com o grupo.",
        "Desenvolvimento do front-end em <strong>React</strong>, dividindo a aplicação em componentes reutilizáveis para as seções da landing page, cards e formulários.",
        "Estilização de toda a interface com <strong>Tailwind CSS</strong>, definindo a identidade visual (paleta em roxo e rosa) e o comportamento responsivo do layout.",
        "Construção da tela de acesso — login e cadastro — com validação dos campos e o controle de exibir/ocultar senha.",
        "Desenvolvimento do back-end em <strong>PHP</strong> para o cadastro de usuários, a validação das credenciais no login e a persistência dos dados.",
        "Integração entre o front-end em React e o back-end em PHP, definindo o formato dos dados enviados e das respostas tratadas na interface.",
      ],

      // Substitua pelo link real do repositório. Se for privado, deixe "".
      repo: "[INFORMAR LINK DO REPOSITÓRIO]",
      demo: "",

      screenshots: [
        { src: "assets/img/projetos/Fluxora-Home.png", legenda: "Página inicial com a apresentação da plataforma" },
        { src: "assets/img/projetos/Fluxora-Login.png", legenda: "Tela de acesso — login e cadastro de usuário" },
        { src: "assets/img/projetos/Fluxora-Footer.png", legenda: "Seção de depoimentos e rodapé do site" },
        { src: "assets/img/projetos/Fluxora-Logo.png", legenda: "Identidade visual da Fluxora" },
      ],
    },

    {
      slug: "vital-reciclagem",
      nome: "VITAL Reciclagem — Gestão de reciclagem de óleo",
      categoria: "Acadêmico", // ex: "Acadêmico", "Pessoal", "Estudo"
      periodo: "3º semestre",
      destaque: false,
      resumo:
        "Plataforma para gerenciar a operação de uma empresa de reciclagem de óleo — da solicitação de coleta até a entrega — com perfis distintos para cliente, motorista e administrador. Front-end em Vue 3 e back-end em Python com Flask.",

      capa: "assets/img/projetos/Vital-Logo.png",

      descricao: [
        "A operação de uma recicladora de óleo envolve muitas pontas: o cliente pede a coleta, um motorista precisa ser acionado e fazer a entrega, o estoque de óleo reciclado precisa ser atualizado e o administrador precisa enxergar tudo isso. O VITAL centraliza esse fluxo em um único sistema, do pedido de coleta ao processamento.",
        "O sistema é dividido por perfil de acesso. O <strong>cliente</strong> se cadastra, abre solicitações de coleta e acompanha o histórico. O <strong>motorista</strong> visualiza as solicitações atribuídas e confirma a coleta realizada. O <strong>administrador</strong> gerencia produtos e estoque, clientes, motoristas, solicitações, relatórios e certificados, além de disparar notificações por e-mail sobre o status dos pedidos.",
        "O front-end é uma SPA em Vue 3 com Vue Router, consumindo a API via Axios. A autenticação é feita por JWT: o token emitido pela API é decodificado no front-end para identificar o perfil do usuário e liberar as rotas correspondentes. O back-end é uma API em <strong>Python com Flask</strong>, com o ambiente containerizado em <strong>Docker</strong> usando imagem do <strong>PostgreSQL</strong> para o banco.",
      ],

      funcionalidades: [
        "Perfis distintos de acesso — cliente, motorista e administrador — cada um com sua área e suas rotas",
        "Cadastro e login separados por perfil, com autenticação JWT",
        "Abertura e acompanhamento de solicitações de coleta de óleo pelo cliente",
        "Atribuição das solicitações aos motoristas e confirmação de coleta realizada",
        "Gestão de produtos e controle do estoque de óleo reciclado",
        "Gestão de clientes e de administradores (listagem, edição e exclusão)",
        "Relatórios da operação e emissão de certificados em PDF",
        "Notificações por e-mail sobre o status das solicitações",
      ],

      tecnologias: [
        "Vue.js 3", "Vue Router", "Vite", "Axios", "JWT", "jsPDF",
        "Python", "Flask", "APIs REST", "PostgreSQL", "Docker", "JavaScript",
      ],

      participacao: [
        "Desenvolvimento da API do sistema em <strong>Python com Flask</strong>, expondo os endpoints REST consumidos pelo front-end.",
        "Modelagem e persistência dos dados em <strong>PostgreSQL</strong> (usuários por perfil, produtos, estoque e solicitações de coleta).",
        "Configuração do ambiente em <strong>Docker</strong>, subindo o banco a partir da imagem oficial do PostgreSQL e usando variáveis de ambiente para a conexão.",
        "Implementação da autenticação com JWT e do controle de acesso por perfil (cliente, motorista e administrador) nas rotas da API.",
        "Desenvolvimento do front-end em <strong>Vue 3 com Vite</strong>, organizando a aplicação em views por perfil e componentes reutilizáveis (tabelas, modais e formulários de cadastro, edição e exclusão).",
        "Construção das telas de autenticação e cadastro separadas por perfil e do roteamento com <strong>Vue Router</strong>, liberando cada área conforme o perfil lido do token JWT.",
        "Implementação das áreas do sistema: solicitação e histórico de coletas do cliente, listagem de coletas do motorista com confirmação de entrega, e painel administrativo com produtos, estoque, clientes, solicitações e relatórios.",
        "Consumo da API com <strong>Axios</strong> e geração dos certificados e relatórios em PDF no próprio navegador com jsPDF.",
        "Integração de ponta a ponta entre o front-end e a API, definindo os contratos de requisição e resposta dos dois lados.",
      ],

      repo: "https://github.com/RafaelBorges22/Vital-Front",
      demo: "https://vitalreciclagem.vercel.app",

      screenshots: [
        { src: "assets/img/projetos/Vital.png", legenda: "Página Inicial" },
        { src: "assets/img/projetos/Vital-Login.png", legenda: "Login por perfil de usuário" },
        { src: "assets/img/projetos/Vital-Cadastro.png", legenda: "Cadastro de usuário" },
      ],
    },

    {
      slug: "kazu-tatoo",
      nome: "Kazu Tatoo — Sistema de agendamento para studio de tatuagem",
      categoria: "Acadêmico",
      periodo: "4º semestre",
      destaque: false,
      resumo:
        "Sistema de agendamento para um studio de tatuagem: site de apresentação do tatuador, galeria de trabalhos e fluxo de solicitação de orçamento e agendamento de sessões. Front-end em Vue.js com TypeScript, back-end em Java com Spring Boot e ambiente containerizado com Docker.",

      capa: "assets/img/projetos/KazuTatoo-Home.png",

      descricao: [
        "O agendamento em um studio de tatuagem costuma acontecer por mensagens soltas: o cliente manda a ideia da arte, o tatuador responde com um orçamento e os dois combinam a data por conversa. O Kazu Tatoo transforma esse fluxo em um sistema, reunindo em um só lugar a apresentação do studio, o pedido de orçamento e o agendamento das sessões.",
        "O site apresenta o trabalho do tatuador — a seção <em>Meu trabalho</em>, com a trajetória e o estilo, a seção <em>Sobre tatuagens</em> e uma <em>Galeria de trabalhos</em> em carrossel com as artes já feitas. A partir da home, o visitante entra no fluxo de <strong>Faça seu orçamento</strong>, onde descreve a tatuagem desejada e solicita o agendamento; o cadastro e o login separam o acesso do cliente do acesso do studio.",
        "O front-end foi construído em <strong>Vue.js com TypeScript</strong>, com as telas divididas em componentes e as respostas da API tipadas. O back-end é uma API REST em <strong>Java com Spring Boot</strong>, responsável pelo cadastro e autenticação dos usuários, pelas solicitações de orçamento e pela agenda do studio. Toda a aplicação sobe em containers com <strong>Docker</strong>.",
      ],

      funcionalidades: [
        "Landing page do studio com apresentação do tatuador e do seu estilo de trabalho",
        "Galeria de trabalhos em carrossel navegável, com indicadores de posição",
        "Cadastro e login de usuários, com acesso separado para cliente e studio",
        "Solicitação de orçamento a partir da descrição da tatuagem desejada",
        "Agendamento de sessões, com controle das datas e horários disponíveis",
        "Acompanhamento das solicitações e dos agendamentos pelo cliente",
        "Área do studio para visualizar e gerenciar os pedidos e a agenda",
        "Layout responsivo, adaptado para acesso pelo celular",
      ],

      tecnologias: [
        "Vue.js", "TypeScript", "JavaScript", "HTML", "CSS",
        "Java", "Spring Boot", "APIs REST", "Docker",
      ],

      participacao: [
        "Atuação como <strong>desenvolvedor full stack</strong>, do modelo de dados até a interface entregue ao usuário.",
        "Desenvolvimento da API REST em <strong>Java com Spring Boot</strong>, com os endpoints de cadastro, autenticação, orçamento e agendamento.",
        "Modelagem das entidades do domínio — usuário, solicitação de orçamento e agendamento — e da persistência dos dados.",
        "Implementação das regras de agendamento, controlando as datas e horários disponíveis para evitar conflito entre sessões.",
        "Desenvolvimento do front-end em <strong>Vue.js com TypeScript</strong>, organizando as telas em componentes reutilizáveis e tipando os dados trocados com a API.",
        "Construção das telas do site: home, seções de apresentação, galeria de trabalhos em carrossel e o fluxo de orçamento e agendamento.",
        "Implementação do cadastro e do login, com o controle de acesso às áreas de cliente e do studio.",
        "Configuração do ambiente em <strong>Docker</strong>, containerizando a aplicação e o banco de dados.",
        "Integração de ponta a ponta entre o front-end e a API, definindo os contratos de requisição e resposta dos dois lados.",
      ],

      repo: "https://github.com/RafaelBorges22/Project-LDW",
      demo: "",

      screenshots: [
        { src: "assets/img/projetos/KazuTatoo-Home.png", legenda: "Página inicial do studio com a chamada para o orçamento" },
        { src: "assets/img/projetos/KazuTatoo-Sobre.png", legenda: "Seção Meu trabalho, com a apresentação do tatuador" },
        { src: "assets/img/projetos/KazuTatoo-Tatuagens.png", legenda: "Seção Sobre tatuagens, explicando a proposta do studio" },
        { src: "assets/img/projetos/KazuTatoo-Carrossel.png", legenda: "Galeria de trabalhos em carrossel" },
      ],
    },

    {
      slug: "up-barber",
      nome: "Totem de Pagamento UP BARBER",
      categoria: "Academico",
      periodo: "5º semestre",
      destaque: false,
      resumo:
        "Projeto dedicado a fazer um totem de pagamento para barbearias, com integração de API de pagamento, QR Code e interface amigável para o usuário.",

      capa: "assets/img/projetos/up-capa.png",

      descricao: [
        "A necessidade de um atendente para efetuar pagamentos em barbearias, o projeto visa automatizar o processo de pagamento, permitindo que os clientes realizem transações de forma rápida e segura.",
        "O sistema funciona através de um totem interativo, onde o cliente seleciona os serviços desejados, gera um QR Code e realiza o pagamento via aplicativo bancário ou cartão de debito ou crédito utilizando NFC",
        "O projeto foi desenvolvido no contexto acadêmico, como parte de um curso de desenvolvimento de software, com o objetivo de aplicar conhecimentos em integração de APIs e desenvolvimento de interfaces.",],

      funcionalidades: [
        "Pagamentos via Pix utilizando o QR code gerado pelo Efi Bank",
        "Pagamento via Cartão de Débito ou Crédito utilizando NFC atrvés do InfinitePay",
      ],

      tecnologias: ["Java", "Spring Boot", "React", "Docker", "PostgreSQL", "NFC", "API de Pagamento"],

      participacao: [
        "Desenvolvimento do back-end em Java com Spring Boot, incluindo a integração com APIs de pagamento e a lógica de geração de QR Codes.",
        "Implementação da interface do usuário em React, garantindo uma experiência amigável e responsiva para os clientes.",
      ],

      repo: "https://github.com/RafaelBorges22/PI-5SM-FRONT",
      demo: "",
      screenshots: [
        { src: "assets/img/projetos/Up-barbeiro.jpg", legenda: "Selecionando Barbeiro do qual foi atendido" },
        { src: "assets/img/projetos/Up-carrinho.jpg", legenda: "Selecionando qual serviço foi realizado pelo barbeiro" },
        { src: "assets/img/projetos/Up-pagamento.jpg", legenda: "Tela de selecionar forma de pagamento" },
        { src: "assets/img/projetos/Up-QR.jpg", legenda: "Tela de gerar QR Code para pagamentos PIX" },
      ],
    },

    {
      slug: "smart-parking",
      nome: "Smart Parking — Sistema inteligente de estacionamento",
      categoria: "Acadêmico · Projeto Interdisciplinar",
      periodo: "6º semestre",
      destaque: false,
      resumo:
        "Sistema de estacionamento com IoT de ponta a ponta: um sensor ultrassônico no ESP32 detecta a ocupação da vaga, publica via MQTT e o back-end em Spring Boot com Kotlin atualiza o estado em tempo real para aplicativos Mobile, Web e Desktop feitos com Kotlin Multiplatform.",

      capa: "assets/img/projetos/DashSmart-Desktop.png",

      descricao: [
        "O Smart Parking monitora a ocupação das vagas de um estacionamento sem depender de conferência manual. Cada vaga tem um sensor, e o estado dela chega aos aplicativos pela cadeia <strong>Veículo → HC-SR04 → ESP32 → MQTT → Mosquitto → Spring Boot → PostgreSQL → API REST → Mobile / Web / Desktop</strong>.",
        "Na ponta física, um <strong>ESP32</strong> com o sensor ultrassônico <strong>HC-SR04</strong> mede a distância até o veículo e publica a leitura (LIVRE ou OCUPADA) em um tópico <strong>MQTT</strong> no broker <strong>Mosquitto</strong>. O back-end, uma API REST em <strong>Spring Boot com Kotlin</strong>, consome essas mensagens, atualiza a vaga, registra o histórico de medições e a última comunicação de cada dispositivo, e expõe os CRUDs de blocos, vagas, dispositivos e usuários com autenticação <strong>JWT</strong>.",
        "Os três frontends saem de um único código-fonte em <strong>Kotlin Multiplatform com Compose</strong>: o mesmo app roda no Android, no navegador (WebAssembly) e no Desktop. Algumas decisões de domínio guiaram a implementação — uma vaga em <em>manutenção</em> não é sobrescrita pelo sensor, e a API continua no ar mesmo com o broker fora, reconectando sozinha quando ele volta.",
      ],

      funcionalidades: [
        "Detecção da ocupação da vaga por sensor ultrassônico HC-SR04 ligado a um ESP32",
        "Envio das leituras via MQTT para o broker Mosquitto e consumo automático pelo back-end",
        "Atualização do estado das vagas em tempo real, com histórico de medições",
        "Monitoramento dos dispositivos pela data da última comunicação, identificando sensores offline",
        "CRUDs de blocos, vagas, dispositivos e usuários",
        "Autenticação JWT com perfis ADMIN e USER",
        "Vagas em manutenção protegidas contra alteração pelo sensor",
        "Aplicativo único para Mobile (Android), Web e Desktop com Kotlin Multiplatform",
        "Simulador de sensor para demonstrar o fluxo sem a placa física",
        "Documentação interativa da API com Swagger",
      ],

      tecnologias: [
        "Kotlin", "Spring Boot", "Kotlin Multiplatform", "Compose Multiplatform",
        "PostgreSQL", "Flyway", "JWT", "MQTT", "Mosquitto", "ESP32", "C++",
        "Docker", "Swagger / OpenAPI",
      ],

      participacao: [
        "Desenvolvimento da API REST em <strong>Spring Boot com Kotlin</strong>, com os CRUDs de blocos, vagas, dispositivos e usuários.",
        "Implementação da autenticação e autorização com <strong>JWT</strong>, separando os perfis ADMIN e USER.",
        "Implementação do consumidor <strong>MQTT</strong> que recebe as leituras dos sensores e atualiza o estado das vagas, com reconexão automática ao broker.",
        "Modelagem do banco em <strong>PostgreSQL</strong> com migrations versionadas em <strong>Flyway</strong>, incluindo o vínculo único entre vaga e dispositivo.",
        "Desenvolvimento do firmware do <strong>ESP32</strong> em C++ para leitura do sensor HC-SR04 e publicação no tópico MQTT.",
        "Desenvolvimento dos frontends Mobile, Web e Desktop a partir de um único código em <strong>Kotlin Multiplatform</strong>.",
        "Configuração da infraestrutura com <strong>Docker Compose</strong> (PostgreSQL e Mosquitto) e scripts de automação para o simulador de sensor e para subir o app no emulador Android.",
        "Escrita de 35 testes de integração cobrindo os CRUDs, a autenticação JWT e o consumo das mensagens MQTT.",
      ],

      // Substitua pelo link real do repositório. Se for privado, deixe "".
      repo: "[INFORMAR LINK DO REPOSITÓRIO]",
      demo: "",

      screenshots: [
        { src: "assets/img/projetos/DashSmart-Desktop.png", legenda: "Dashboard (Desktop) com a visão geral da ocupação e das vagas por bloco" },
        { src: "assets/img/projetos/VagasSmart-Desktop.png", legenda: "Mapa de vagas por bloco, com cores por status e anéis por tipo de vaga" },
        { src: "assets/img/projetos/DispostitivosSmart-Desktop.png", legenda: "Gestão dos sensores ESP32, com status online/offline e vaga vinculada" },
        { src: "assets/img/projetos/LeituraSmart-Dektop.png", legenda: "Leituras dos sensores recebidas do broker MQTT em tempo real" },
      ],
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
