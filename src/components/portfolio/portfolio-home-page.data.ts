export const INSTAGRAM_URL = "https://instagram.com/dabitech.ds/";

export type PortfolioLocale = "en" | "pt-BR";

export type PortfolioHeaderCopy = {
  nav: {
    services: string;
    projects: string;
    contact: string;
  };
  secondaryCta: string;
  primaryCta: string;
};

export type PortfolioHeroCopy = {
  eyebrow: string;
  signalBar: string[];
  title: string;
  lead: string;
  evidence: string[];
  primaryCta: string;
  secondaryCta: string;
  featuredTag: string;
  featureSpecs: Array<{ label: string; value: string }>;
  featureCta: string;
};

export type PortfolioStoryCopy = {
  eyebrow: string;
  title: string;
  body: string;
  details: string[];
};

export type PortfolioMarqueeCopy = {
  ariaLabel: string;
  eyebrow: string;
  description: string;
};

export type PortfolioService = {
  title: string;
  description: string;
};

export type PortfolioServicesCopy = {
  eyebrow: string;
  title: string;
  description: string;
  items: PortfolioService[];
};

export type PortfolioProjectsCopy = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  previous: string;
  next: string;
  previousAria: string;
  nextAria: string;
  dotsAria: string;
};

export type PortfolioContactCopy = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  whatsappCta: string;
};

export type PortfolioFooterCopy = {
  brand: string;
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  newsletterSubject: string;
  newsletterBody: string;
};

export type PortfolioHighlight = {
  label: string;
  value: string;
};

export type PortfolioProject = {
  eyebrow: string;
  title: string;
  description: string;
  meta: string[];
  href: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  scopeTitle: string;
  scopeDescription: string;
};

export type PortfolioHomeContent = {
  socialLabel: string;
  instagramLabel: string;
  header: PortfolioHeaderCopy;
  hero: PortfolioHeroCopy;
  lightStory: PortfolioStoryCopy;
  marquee: PortfolioMarqueeCopy;
  services: PortfolioServicesCopy;
  projects: PortfolioProjectsCopy;
  darkStory: PortfolioStoryCopy;
  contact: PortfolioContactCopy;
  footer: PortfolioFooterCopy;
  highlights: PortfolioHighlight[];
  projectsList: PortfolioProject[];
};

export const localeOptions = [
  { value: "en", label: "EN", flag: "🇺🇸" },
  { value: "pt-BR", label: "PT-BR", flag: "🇧🇷" },
] as const;

export const portfolioContent: Record<PortfolioLocale, PortfolioHomeContent> = {
  en: {
    socialLabel: "Social links",
    instagramLabel: "DaBi Tech Instagram",
    header: {
      nav: {
        services: "What this solves ?",
        projects: "Solutions",
        contact: "Contact",
      },
      secondaryCta: "Available for freelance projects",
      primaryCta: "View solutions",
    },
    hero: {
      eyebrow: "Digital systems for service businesses",
      signalBar: [
        "Stronger positioning",
        "Smoother operations",
        "Better customer experience",
      ],
      title:
        "Digital systems for service businesses that need stronger positioning, smoother operations, and better customer experience.",
      lead:
        "I build modern web platforms that help service businesses improve perceived value, organize operations, and create clearer customer journeys — from commercial presentation to day-to-day use.",
      evidence: [
        "Business clarity before feature overload",
        "Customer-facing and internal flows working together",
        "One delivery connecting strategy, interface, and system",
      ],
      primaryCta: "View solutions",
      secondaryCta: "Book a discovery call",
      featuredTag: "Featured solution",
      featureSpecs: [
        {
          label: "Approach",
          value:
            "Commercial positioning with operational clarity behind it",
        },
        {
          label: "Focus",
          value:
            "Customer experience, internal structure, and business perception",
        },
      ],
      featureCta: "Open solution",
    },
    lightStory: {
      eyebrow: "Positioning first",
      title: "Start with a stronger commercial presence.",
      body:
        "The first screen should make the business feel more premium, more organized, and more ready to be hired. Design has to raise perceived value before the visitor reads every feature.",
      details: [
        "Strong positioning comes before feature lists.",
        "Design should increase perceived value, clarity, and trust.",
        "The right interface makes the business feel more ready to be chosen.",
      ],
    },
    marquee: {
      ariaLabel: "Continuous preview of selected solutions",
      eyebrow: "Product in motion",
      description:
        "Real published screens moving like a product showcase, so the portfolio feels closer to a premium service offer than a static gallery.",
    },
    services: {
      eyebrow: "What this solves ?",
      title:
        "Digital systems that reduce operational friction and make service businesses look more premium.",
      description:
        "The goal is not only to ship a website or dashboard. It is to improve booking flow, customer perception, and internal routines in the same product decision.",
      items: [
        {
          title: "Reduce manual booking work",
          description:
            "Booking flows, availability logic, and clear customer paths help the business spend less time handling routine scheduling manually.",
        },
        {
          title: "Avoid double bookings and operational confusion",
          description:
            "A clearer internal structure helps organize appointments, customers, and daily actions so the business can operate with more confidence.",
        },
        {
          title: "Increase repeat revenue with retention mechanics",
          description:
            "Loyalty features, return triggers, and continuity-focused journeys turn visits into stronger customer retention.",
        },
      ],
    },
    projects: {
      eyebrow: "Solutions",
      title:
        "Selected solutions across customer experience, commercial structure, operations, and infrastructure.",
      description:
        "Some projects improve how the business is perceived and used by customers. Others strengthen internal routine, access control, and operational clarity. Together, they show a broader ability to design digital systems beyond a single niche.",
      primaryCta: "Open full solution",
      previous: "Previous",
      next: "Next",
      previousAria: "Previous solution",
      nextAria: "Next solution",
      dotsAria: "Portfolio solutions",
    },
    darkStory: {
      eyebrow: "Authority in depth",
      title: "Authority appears when positioning and execution work together.",
      body:
        "A reliable product needs to work well for the customer, for the team running it, and for the business behind it. Authority does not come from visuals alone. It comes from combining commercial clarity, flow, and real delivery structure.",
      details: [
        "Every project starts with business goals, flow, and operational priorities.",
        "The delivery connects customer experience with the internal routine of the business.",
        "The result is a clearer, more solid system that is ready to evolve.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build a stronger digital experience for your business.",
      paragraphs: [
        "Ideal for barbershops, beauty studios, clinics, and local premium brands that want a better digital experience without generic execution.",
        "The process starts with business goals, customer flow, and commercial positioning. From there, I turn that direction into a published solution that improves perception, organization, and day-to-day use.",
      ],
      whatsappCta: "Ask for a quote on WhatsApp",
    },
    footer: {
      brand:
        "Premium digital systems for service businesses that need more bookings, better operations, and stronger perceived value.",
      newsletterLabel: "Newsletter",
      newsletterPlaceholder: "Your best email",
      newsletterButton: "Subscribe",
      newsletterSubject: "DaBi Tech newsletter",
      newsletterBody: "I want to subscribe to the DaBi Tech newsletter.",
    },
    highlights: [
      {
        label: "Positioning",
        value: "Stronger perceived value and clearer commercial presence",
      },
      {
        label: "Delivery",
        value:
          "Customer experience, internal routine, and system structure in one delivery",
      },
      {
        label: "Range",
        value:
          "From customer-facing platforms to operational and infrastructure systems",
      },
    ],
    projectsList: [
      {
        eyebrow: "Customer experience",
        title: "Booking and retention platform for barbershops",
        description:
          "A digital platform designed to help grooming businesses increase booking conversion, improve day-to-day organization, and strengthen customer loyalty through a more premium experience.",
        meta: [
          "Booking conversion",
          "Customer loyalty",
          "Daily operations",
          "Recurring revenue",
        ],
        href: "/portfolio/barbearia",
        imageSrc: "/img/localhost_3001_admin_agenda.png",
        imageAlt: "Admin schedule interface for the barbershop platform",
        imageWidth: 3456,
        imageHeight: 11084,
        scopeTitle: "Business impact",
        scopeDescription:
          "Built to simulate a real commercial workflow for service businesses, with focus on booking conversion, retention, and day-to-day operations.",
      },
      {
        eyebrow: "Content platform",
        title: "Lana Baby Lab",
        description:
          "A premium content platform designed to strengthen niche authority, organize private access, and create a more consistent digital experience for a specialized brand.",
        meta: [
          "Niche authority",
          "Private content access",
          "Premium reading flow",
          "Specialized brand structure",
        ],
        href: "/portfolio/lana-baby-lab",
        imageSrc: "/img/portfolio-lana-baby-lab-preview.svg",
        imageAlt: "Preview of the Lana Baby Lab platform",
        imageWidth: 1400,
        imageHeight: 900,
        scopeTitle: "Business impact",
        scopeDescription:
          "The product improves authority, publishing structure, and premium perception for a specialized brand that needs trust and consistency.",
      },
      {
        eyebrow: "Commercial operations",
        title: "Sales platform with commercial landing flow",
        description:
          "A commercial platform built to capture leads, organize follow-up, and give the business more visibility over pipeline, conversion, and positioning.",
        meta: [
          "Lead capture",
          "Commercial flow",
          "Pipeline visibility",
          "Stronger positioning",
        ],
        href: "/portfolio/sistema-vendas",
        imageSrc: "/img/portfolio-sales-system-real-preview.png",
        imageAlt: "Dashboard of the sales platform",
        imageWidth: 3456,
        imageHeight: 1928,
        scopeTitle: "Business impact",
        scopeDescription:
          "Positioned as a solution instead of a technical demo, the project shows how presentation and product structure can raise perceived market value.",
      },
      {
        eyebrow: "Infrastructure",
        title: "Authentication hub for multiple systems",
        description:
          "A centralized authentication foundation for digital ecosystems that need consistent access control, reusable login flows, and cleaner expansion across products.",
        meta: [
          "Centralized access",
          "Session consistency",
          "Reusable login flow",
          "Expansion readiness",
        ],
        href: "/portfolio/central-autenticacao",
        imageSrc: "/img/portfolio-auth-system-real-preview.png",
        imageAlt: "Authentication hub interface",
        imageWidth: 3454,
        imageHeight: 1750,
        scopeTitle: "Business impact",
        scopeDescription:
          "The architecture reduces duplication across products and prepares the ecosystem for secure authentication growth without restarting from scratch.",
      },
      {
        eyebrow: "Internal operations",
        title: "Support and ticket workflow platform",
        description:
          "An internal operations platform created to organize requests, improve response flow, and make service routines clearer for both teams and clients.",
        meta: [
          "Service requests",
          "Clear ownership",
          "Response structure",
          "Operational reliability",
        ],
        href: "/portfolio/sistema-chamados",
        imageSrc: "/img/portfolio-support-tickets-preview.svg",
        imageAlt: "Preview of the support workflow platform",
        imageWidth: 1400,
        imageHeight: 900,
        scopeTitle: "Business impact",
        scopeDescription:
          "The product improves service perception, response organization, and operational reliability in workflows that depend on clear ownership and status visibility.",
      },
    ],
  },

  "pt-BR": {
    socialLabel: "Redes sociais",
    instagramLabel: "Instagram da DaBi Tech",
    header: {
      nav: {
        services: "O que isso resolve?",
        projects: "Soluções",
        contact: "Contato",
      },
      secondaryCta: "Disponível para projetos freelance",
      primaryCta: "Ver soluções",
    },
    hero: {
      eyebrow: "Sistemas digitais para negócios de serviço",
      signalBar: [
        "Posicionamento mais forte",
        "Operação mais fluida",
        "Melhor experiência do cliente",
      ],
      title:
        "Sistemas digitais para negócios de serviço que precisam de posicionamento mais forte, operação mais fluida e melhor experiência para o cliente.",
      lead:
        "Eu construo plataformas web que ajudam negócios de serviço a aumentar valor percebido, organizar a operação e criar jornadas mais claras para o cliente — da apresentação comercial ao uso no dia a dia.",
      evidence: [
        "Clareza de negócio antes do excesso de funcionalidades",
        "Fluxos do cliente e da operação funcionando juntos",
        "Uma entrega conectando estratégia, interface e sistema",
      ],
      primaryCta: "Ver soluções",
      secondaryCta: "Agendar uma conversa",
      featuredTag: "Solução em destaque",
      featureSpecs: [
        {
          label: "Abordagem",
          value:
            "Posicionamento comercial com clareza operacional por trás",
        },
        {
          label: "Foco",
          value:
            "Experiência do cliente, estrutura interna e percepção de negócio",
        },
      ],
      featureCta: "Abrir solução",
    },
    lightStory: {
      eyebrow: "Posicionamento primeiro",
      title: "Comece com uma presença comercial mais forte.",
      body:
        "A primeira impressão do produto não deve apenas parecer bonita. Ela precisa transmitir organização, clareza e confiança para que o negócio seja percebido como algo mais sólido, valioso e pronto para ser escolhido.",
      details: [
        "O produto precisa comunicar valor antes de explicar funcionalidades.",
        "A experiência visual deve reforçar organização, confiança e diferenciação.",
        "Cada decisão de interface precisa servir à percepção comercial do negócio.",
      ],
    },
    marquee: {
      ariaLabel: "Prévia contínua das soluções selecionadas",
      eyebrow: "Produto em movimento",
      description:
        "Telas reais publicadas em ritmo contínuo, para o portfólio parecer mais uma oferta premium de serviço do que uma galeria estática.",
    },
    services: {
      eyebrow: "O que isso resolve ?",
      title:
        "Sistemas digitais que reduzem atrito operacional e fazem negócios de serviço parecerem mais premium.",
      description:
        "O objetivo não é só publicar um site ou dashboard. É melhorar agendamento, percepção de valor e rotina interna dentro da mesma decisão de produto.",
      items: [
        {
          title: "Reduzir trabalho manual com agendamentos",
          description:
            "Fluxos de booking, lógica de disponibilidade e caminhos mais claros fazem a empresa gastar menos tempo lidando manualmente com agendamentos.",
        },
        {
          title: "Evitar choques de agenda e ruído operacional",
          description:
            "Uma estrutura interna mais clara ajuda a organizar horários, clientes e ações do dia a dia para a operação rodar com mais segurança.",
        },
        {
          title: "Aumentar recorrência com mecânicas de retenção",
          description:
            "Recursos de fidelidade, gatilhos de retorno e jornadas de continuidade ajudam a transformar visitas em receita repetida.",
        },
      ],
    },
    projects: {
      eyebrow: "Soluções",
      title:
        "Soluções selecionadas entre experiência do cliente, estrutura comercial, operação e infraestrutura.",
      description:
        "Alguns projetos melhoram a forma como o negócio é percebido e usado pelo cliente. Outros fortalecem rotina interna, controle de acesso e clareza operacional. Juntos, eles mostram uma capacidade mais ampla de construir sistemas digitais além de um único nicho.",
      primaryCta: "Abrir solução completa",
      previous: "Anterior",
      next: "Próximo",
      previousAria: "Solução anterior",
      nextAria: "Próxima solução",
      dotsAria: "Soluções do portfólio",
    },
    darkStory: {
      eyebrow: "Autoridade em profundidade",
      title:
        "Autoridade aparece quando posicionamento e execução trabalham juntos.",
      body:
        "Um produto confiável precisa funcionar bem para quem compra, para quem administra e para quem depende da operação no dia a dia. Autoridade não vem só do visual. Ela aparece quando a solução une clareza comercial, fluxo e estrutura real de entrega.",
      details: [
        "Cada projeto começa com objetivo de negócio, fluxo e prioridade operacional.",
        "A entrega conecta experiência do cliente com a rotina interna do negócio.",
        "O resultado é um sistema mais sólido, claro e pronto para evoluir.",
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos construir uma experiência digital mais forte para o seu negócio.",
      paragraphs: [
        "Ideal para barbearias, estúdios de beleza, clínicas e marcas locais premium que querem uma experiência digital melhor sem execução genérica.",
        "O processo começa por objetivo de negócio, fluxo do cliente e posicionamento comercial. A partir disso, eu transformo essa direção em uma solução publicada que melhora percepção, organização e uso no dia a dia.",
      ],
      whatsappCta: "Pedir orçamento no WhatsApp",
    },
    footer: {
      brand:
        "Sistemas digitais premium para negócios de serviço que precisam de mais agendamentos, operação melhor e maior valor percebido.",
      newsletterLabel: "Newsletter",
      newsletterPlaceholder: "Seu melhor e-mail",
      newsletterButton: "Assinar",
      newsletterSubject: "Newsletter DaBi Tech",
      newsletterBody: "Quero entrar na newsletter da DaBi Tech.",
    },
    highlights: [
      {
        label: "Posicionamento",
        value: "Mais valor percebido e presença comercial mais clara",
      },
      {
        label: "Entrega",
        value:
          "Experiência do cliente, rotina interna e estrutura de sistema na mesma entrega",
      },
      {
        label: "Amplitude",
        value:
          "De plataformas voltadas ao cliente até sistemas de operação e infraestrutura",
      },
    ],
    projectsList: [
      {
        eyebrow: "Experiência do cliente",
        title: "Plataforma de agendamento e retenção para barbearias",
        description:
          "Uma plataforma digital pensada para ajudar negócios de grooming a aumentar a conversão em agendamentos, melhorar a organização do dia a dia e fortalecer a fidelização com uma experiência mais premium.",
        meta: [
          "Conversão em agendamentos",
          "Fidelização de clientes",
          "Operação diária",
          "Receita recorrente",
        ],
        href: "/portfolio/barbearia",
        imageSrc: "/img/localhost_3001_admin_agenda.png",
        imageAlt:
          "Interface de agenda administrativa da plataforma para barbearia",
        imageWidth: 3456,
        imageHeight: 11084,
        scopeTitle: "Impacto no negócio",
        scopeDescription:
          "Construído para simular um fluxo comercial real de negócios de serviço, com foco em conversão de agendamento, retenção e operação do dia a dia.",
      },
      {
        eyebrow: "Plataforma de conteúdo",
        title: "Lana Baby Lab",
        description:
          "Uma plataforma de conteúdo premium criada para fortalecer autoridade em nicho, organizar acesso privado e construir uma experiência digital mais consistente para uma marca especializada.",
        meta: [
          "Autoridade de nicho",
          "Acesso privado ao conteúdo",
          "Experiência premium de leitura",
          "Estrutura de marca especializada",
        ],
        href: "/portfolio/lana-baby-lab",
        imageSrc: "/img/portfolio-lana-baby-lab-preview.svg",
        imageAlt: "Preview da plataforma Lana Baby Lab",
        imageWidth: 1400,
        imageHeight: 900,
        scopeTitle: "Impacto no negócio",
        scopeDescription:
          "O produto melhora autoridade, organização editorial e percepção premium para uma marca especializada que depende de confiança e consistência.",
      },
      {
        eyebrow: "Operação comercial",
        title: "Plataforma comercial com landing page de vendas",
        description:
          "Uma plataforma comercial criada para captar leads, organizar acompanhamento e dar ao negócio mais visibilidade sobre funil, conversão e posicionamento.",
        meta: [
          "Captação de leads",
          "Fluxo comercial",
          "Visibilidade do funil",
          "Posicionamento mais forte",
        ],
        href: "/portfolio/sistema-vendas",
        imageSrc: "/img/portfolio-sales-system-real-preview.png",
        imageAlt: "Dashboard da plataforma comercial",
        imageWidth: 3456,
        imageHeight: 1928,
        scopeTitle: "Impacto no negócio",
        scopeDescription:
          "Posicionado como solução e não como demo técnica, o projeto mostra como apresentação e estrutura de produto elevam valor percebido no mercado.",
      },
      {
        eyebrow: "Infraestrutura",
        title: "Central de autenticação para múltiplos sistemas",
        description:
          "Uma fundação de autenticação centralizada para ecossistemas digitais que precisam de controle de acesso consistente, fluxos reutilizáveis de login e expansão mais organizada entre produtos.",
        meta: [
          "Acesso centralizado",
          "Consistência de sessão",
          "Fluxo reutilizável de login",
          "Pronto para expansão",
        ],
        href: "/portfolio/central-autenticacao",
        imageSrc: "/img/portfolio-auth-system-real-preview.png",
        imageAlt: "Interface da central de autenticação",
        imageWidth: 3454,
        imageHeight: 1750,
        scopeTitle: "Impacto no negócio",
        scopeDescription:
          "A arquitetura reduz repetição entre produtos e prepara o ecossistema para crescer com autenticação segura sem precisar recomeçar do zero.",
      },
      {
        eyebrow: "Operação interna",
        title: "Plataforma de suporte e fluxo de chamados",
        description:
          "Uma plataforma de operação interna criada para organizar solicitações, melhorar o fluxo de resposta e tornar as rotinas de atendimento mais claras para equipes e clientes.",
        meta: [
          "Solicitações de serviço",
          "Responsabilidade clara",
          "Estrutura de resposta",
          "Confiabilidade operacional",
        ],
        href: "/portfolio/sistema-chamados",
        imageSrc: "/img/portfolio-support-tickets-preview.svg",
        imageAlt: "Preview da plataforma de fluxo de chamados",
        imageWidth: 1400,
        imageHeight: 900,
        scopeTitle: "Impacto no negócio",
        scopeDescription:
          "O produto melhora percepção de atendimento, organização de resposta e confiabilidade operacional em rotinas que dependem de clareza de responsabilidade.",
      },
    ],
  },
};
