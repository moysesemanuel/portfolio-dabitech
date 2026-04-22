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
        "Digital systems that strengthen positioning, improve experience, and give the business a clearer structure to grow.",
      description:
        "The goal is not only to publish a website or dashboard. It is to make the business feel more solid, more organized, and easier to trust across customer-facing and internal flows.",
      items: [
        {
          title: "Create a stronger first impression",
          description:
            "The right product framing helps the business communicate value, clarity, and trust before the visitor compares every detail.",
        },
        {
          title: "Organize operations with less friction",
          description:
            "Internal flows, permissions, and routines become easier to follow when the system is built around clearer responsibilities and everyday use.",
        },
        {
          title: "Support growth with a stronger digital base",
          description:
            "Customer-facing platforms, internal systems, and shared infrastructure create a more stable foundation for expansion without improvised execution.",
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
        "Ideal for service businesses and specialist brands that need stronger positioning, clearer operations, and a digital experience that feels more solid.",
        "The process starts with business goals, customer flow, and commercial positioning. From there, I turn that direction into a published solution that improves perception, organization, and day-to-day use.",
      ],
      whatsappCta: "Ask for a quote on WhatsApp",
    },
    footer: {
      brand:
        "Premium digital systems for businesses that need stronger positioning, clearer operations, and more trust in the way they are experienced.",
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
        title: "Customer platform with positioning and operations built together",
        description:
          "A digital platform that combines commercial presence, customer journey, and internal routine in one product, showing how service businesses can feel more premium and more organized at the same time.",
        meta: [
          "Commercial positioning",
          "Customer journey",
          "Operational clarity",
          "Integrated delivery",
        ],
        href: "/portfolio/barbearia",
        imageSrc: "/img/localhost_3001_admin_agenda.png",
        imageAlt: "Admin schedule interface for the barbershop platform",
        imageWidth: 3456,
        imageHeight: 11084,
        scopeTitle: "Business impact",
        scopeDescription:
          "The case shows how customer-facing experience and internal structure can reinforce each other inside one coherent digital product.",
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
        imageSrc: "/img/portfolio-lana-baby-lab-preview.png",
        imageAlt: "Preview of the Lana Baby Lab platform",
        imageWidth: 2560,
        imageHeight: 1318,
        scopeTitle: "Business impact",
        scopeDescription:
          "The product improves authority, publishing structure, and premium perception for a specialized brand that needs trust and consistency.",
      },
      {
        eyebrow: "Commercial operations",
        title: "Commercial platform built around pipeline visibility",
        description:
          "A commercial platform built to structure lead capture, follow-up, and sales visibility in a way that feels closer to a real revenue operation than to an isolated interface demo.",
        meta: [
          "Lead capture",
          "Pipeline visibility",
          "Commercial routine",
          "Product credibility",
        ],
        href: "/portfolio/sistema-vendas",
        imageSrc: "/img/portfolio-sales-system-real-preview.png",
        imageAlt: "Dashboard of the sales platform",
        imageWidth: 3456,
        imageHeight: 1928,
        scopeTitle: "Business impact",
        scopeDescription:
          "The project makes the commercial layer feel concrete, with clearer revenue logic, stronger product framing, and more believable operational value.",
      },
      {
        eyebrow: "Infrastructure",
        title: "Authentication hub for multiple systems",
        description:
          "A centralized access foundation for digital ecosystems that need consistent entry points, shared trust, and a cleaner path to expand across multiple products.",
        meta: [
          "Shared access layer",
          "Ecosystem consistency",
          "Reusable entry flow",
          "Expansion readiness",
        ],
        href: "/portfolio/central-autenticacao",
        imageSrc: "/img/portfolio-auth-system-real-preview.png",
        imageAlt: "Authentication hub interface",
        imageWidth: 3454,
        imageHeight: 1750,
        scopeTitle: "Business impact",
        scopeDescription:
          "The structure reduces fragmentation between products and gives the ecosystem a more reliable base to grow without rebuilding access logic every time.",
      },
      {
        eyebrow: "Internal operations",
        title: "Support workflow with clearer responsibility across teams",
        description:
          "An internal workflow platform designed to organize requests, clarify ownership, and make response routines easier to manage for both teams and customers.",
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
          "The product improves service clarity, response accountability, and operational confidence in workflows that depend on visible responsibility.",
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
        "Sistemas digitais para negócios de serviço com mais valor, fluidez e experiência.",
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
        "Sistemas digitais que fortalecem posicionamento, melhoram a experiência e dão ao negócio uma estrutura mais clara para crescer.",
      description:
        "O objetivo não é só publicar um site ou dashboard. É fazer o negócio parecer mais sólido, mais organizado e mais confiável nos fluxos voltados ao cliente e na rotina interna.",
      items: [
        {
          title: "Criar uma primeira impressão mais forte",
          description:
            "O enquadramento certo de produto ajuda o negócio a comunicar valor, clareza e confiança antes mesmo de o cliente comparar cada detalhe.",
        },
        {
          title: "Organizar a operação com menos atrito",
          description:
            "Fluxos internos, permissões e rotinas ficam mais fáceis de sustentar quando o sistema é desenhado com responsabilidades mais claras e uso real no dia a dia.",
        },
        {
          title: "Sustentar crescimento com uma base digital mais forte",
          description:
            "Plataformas voltadas ao cliente, sistemas internos e infraestrutura compartilhada criam uma base mais estável para expandir sem execução improvisada.",
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
        "Ideal para negócios de serviço e marcas especialistas que precisam de posicionamento mais forte, operação mais clara e uma experiência digital mais sólida.",
        "O processo começa por objetivo de negócio, fluxo do cliente e posicionamento comercial. A partir disso, eu transformo essa direção em uma solução publicada que melhora percepção, organização e uso no dia a dia.",
      ],
      whatsappCta: "Pedir orçamento no WhatsApp",
    },
    footer: {
      brand:
        "Sistemas digitais premium para negócios que precisam de posicionamento mais forte, operação mais clara e mais confiança na forma como são percebidos.",
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
        title: "Plataforma para cliente com posicionamento e operação conectados",
        description:
          "Uma plataforma digital que une presença comercial, jornada do cliente e rotina interna no mesmo produto, mostrando como negócios de serviço podem parecer mais premium e mais organizados ao mesmo tempo.",
        meta: [
          "Posicionamento comercial",
          "Jornada do cliente",
          "Clareza operacional",
          "Entrega integrada",
        ],
        href: "/portfolio/barbearia",
        imageSrc: "/img/localhost_3001_admin_agenda.png",
        imageAlt:
          "Interface de agenda administrativa da plataforma para barbearia",
        imageWidth: 3456,
        imageHeight: 11084,
        scopeTitle: "Impacto no negócio",
        scopeDescription:
          "O case mostra como experiência voltada ao cliente e estrutura interna podem se reforçar dentro de um único produto digital coerente.",
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
        imageSrc: "/img/portfolio-lana-baby-lab-preview.png",
        imageAlt: "Preview da plataforma Lana Baby Lab",
        imageWidth: 2560,
        imageHeight: 1318,
        scopeTitle: "Impacto no negócio",
        scopeDescription:
          "O produto melhora autoridade, organização editorial e percepção premium para uma marca especializada que depende de confiança e consistência.",
      },
      {
        eyebrow: "Operação comercial",
        title: "Plataforma comercial construída em torno de visibilidade de funil",
        description:
          "Uma plataforma comercial criada para estruturar captação, acompanhamento e visibilidade de vendas de um jeito que parece muito mais uma operação real de receita do que uma interface isolada.",
        meta: [
          "Captação de leads",
          "Visibilidade do funil",
          "Rotina comercial",
          "Credibilidade de produto",
        ],
        href: "/portfolio/sistema-vendas",
        imageSrc: "/img/portfolio-sales-system-real-preview.png",
        imageAlt: "Dashboard da plataforma comercial",
        imageWidth: 3456,
        imageHeight: 1928,
        scopeTitle: "Impacto no negócio",
        scopeDescription:
          "O projeto torna a camada comercial mais concreta, com lógica de receita mais clara, enquadramento mais forte e valor operacional mais convincente.",
      },
      {
        eyebrow: "Infraestrutura",
        title: "Central de autenticação para múltiplos sistemas",
        description:
          "Uma base centralizada de acesso para ecossistemas digitais que precisam de entrada consistente, confiança compartilhada e caminho mais limpo para crescer entre produtos.",
        meta: [
          "Camada compartilhada de acesso",
          "Consistência entre produtos",
          "Fluxo reutilizável de entrada",
          "Pronto para expansão",
        ],
        href: "/portfolio/central-autenticacao",
        imageSrc: "/img/portfolio-auth-system-real-preview.png",
        imageAlt: "Interface da central de autenticação",
        imageWidth: 3454,
        imageHeight: 1750,
        scopeTitle: "Impacto no negócio",
        scopeDescription:
          "A estrutura reduz fragmentação entre produtos e cria uma base mais confiável para o ecossistema crescer sem refazer a lógica de acesso a cada nova entrega.",
      },
      {
        eyebrow: "Operação interna",
        title: "Fluxo de suporte com responsabilidade mais clara entre equipes",
        description:
          "Uma plataforma de operação interna criada para organizar solicitações, clarificar responsabilidade e tornar a rotina de resposta mais compreensível para equipes e clientes.",
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
          "O produto melhora clareza de atendimento, responsabilidade de resposta e confiança operacional em rotinas que dependem de dono visível e fluxo bem definido.",
      },
    ],
  },
};
