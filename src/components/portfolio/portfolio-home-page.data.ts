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
        services: "What this solves",
        projects: "Solutions",
        contact: "Contact",
      },
      secondaryCta: "Available for freelance projects",
      primaryCta: "View solutions",
    },
    hero: {
      eyebrow: "Full-stack systems for service businesses",
      signalBar: [
        "Booking conversion",
        "Operations and admin flows",
        "Retention-ready product thinking",
      ],
      title:
        "Full-stack systems for service businesses that need more bookings, better operations, and stronger customer retention.",
      lead:
        "I build modern web platforms for barbershops, beauty studios, clinics, and local premium brands, connecting customer-facing experience with day-to-day operations in one product.",
      evidence: [
        "Business thinking before feature lists",
        "Conversion-oriented UX with operational clarity",
        "Frontend and backend ownership in the same delivery",
      ],
      primaryCta: "View solutions",
      secondaryCta: "Book a discovery call",
      featuredTag: "Featured solution",
      featureSpecs: [
        { label: "Approach", value: "Commercial positioning plus real operational workflows" },
        { label: "Focus", value: "Bookings, retention, and trust-building product design" },
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
      eyebrow: "What this solves",
      title: "Digital systems that reduce operational friction and make service businesses look more premium.",
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
            "Admin-first thinking organizes appointments, customer data, and daily actions so the team can operate with more confidence.",
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
      title: "Selected solutions built to connect customer experience, operations, and business clarity.",
      description:
        "Each project is presented as a business solution first, with technical execution supporting positioning, conversion, and operational maturity.",
      primaryCta: "Open full solution",
      previous: "Previous",
      next: "Next",
      previousAria: "Previous solution",
      nextAria: "Next solution",
      dotsAria: "Portfolio solutions",
    },
    darkStory: {
      eyebrow: "Authority in depth",
      title: "Authority doesn't come from visuals alone. It comes from how the solution is conceived.",
      body:
        "Deeper sections should not lose clarity. The content starts almost merged with the background and gains brightness as scroll reinforces trust, structure, and delivery confidence.",
      details: [
        "Contrast rises with scroll to create a more premium reveal.",
        "The block reinforces authority before contact and commercial action.",
        "Footer and CTA arrive after the descent, with the brand already positioned as a serious partner.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "I build booking and operations systems for businesses that need a stronger commercial presence.",
      paragraphs: [
        "Ideal for barbershops, beauty studios, clinics, and local premium brands that want better digital experience without generic execution.",
        "The process starts with business goals, user flow, and positioning. Then I turn that direction into a published product with frontend, backend, and operational logic working together.",
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
      { label: "Positioning", value: "Business clarity, product thinking, and premium presentation" },
      { label: "Delivery", value: "Booking flows, admin operations, and scalable web systems" },
      { label: "Fit", value: "Barbershops, beauty studios, clinics, and local service brands" },
    ],
    projectsList: [
      {
        eyebrow: "Solution",
        title: "Booking and retention platform for barbershops",
        description:
          "A full-stack system designed to help grooming businesses convert more bookings, manage daily operations, and encourage repeat purchases through loyalty and customer flows.",
        meta: ["Online booking", "Customer area", "Admin operations", "Loyalty mechanics"],
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
        eyebrow: "Product",
        title: "Lana Baby Lab",
        description:
          "A content-driven platform with stronger editorial positioning, private access, and a more premium reading experience for a niche audience.",
        meta: ["Age-based content", "Private studio", "Authentication", "Node.js"],
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
        eyebrow: "Solution",
        title: "Sales platform with commercial landing flow",
        description:
          "A system concept that combines product positioning, landing experience, and internal commercial workflows in one clearer offer.",
        meta: ["CRM", "Sales pipeline", "Reports", "Commercial landing page"],
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
          "A centralized login foundation built for product ecosystems that need session control, reusable access flows, and future integration readiness.",
        meta: ["Central login", "HTTP-only cookies", "Prisma", "SSO-ready"],
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
        eyebrow: "Solution",
        title: "Support and ticket workflow platform",
        description:
          "An operational support system designed to make service requests clearer, more trackable, and more professional for both clients and internal teams.",
        meta: ["Help desk", "Kanban", "Service flow", "Technical portal"],
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
        services: "O que isso resolve",
        projects: "Soluções",
        contact: "Contato",
      },
      secondaryCta: "Disponível para projetos freelance",
      primaryCta: "Ver soluções",
    },
    hero: {
      eyebrow: "Sistemas full-stack para negócios de serviço",
      signalBar: [
        "Conversão em agendamento",
        "Operação e admin workflows",
        "Retenção pensada como produto",
      ],
      title:
        "Sistemas full-stack para negócios de serviço que precisam de mais agendamentos, operação mais fluida e retenção mais forte.",
      lead:
        "Eu construo plataformas web para barbearias, estúdios de beleza, clínicas e marcas locais premium, conectando experiência do cliente com operação diária no mesmo produto.",
      evidence: [
        "Visão de negócio antes da lista de funcionalidades",
        "UX orientada à conversão com clareza operacional",
        "Frontend e backend sob a mesma entrega",
      ],
      primaryCta: "Ver soluções",
      secondaryCta: "Agendar uma conversa",
      featuredTag: "Solução em destaque",
      featureSpecs: [
        { label: "Abordagem", value: "Posicionamento comercial com operação real por trás" },
        { label: "Foco", value: "Agendamento, retenção e confiança no produto" },
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
      eyebrow: "O que isso resolve",
      title: "Sistemas digitais que reduzem atrito operacional e fazem negócios de serviço parecerem mais premium.",
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
            "Pensamento orientado a admin workflow organiza horários, clientes e ações do dia a dia para a operação rodar com mais segurança.",
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
      title: "Soluções selecionadas para conectar experiência do cliente, operação e clareza de negócio.",
      description:
        "Cada projeto é apresentado primeiro como solução de negócio, com a execução técnica sustentando posicionamento, conversão e maturidade operacional.",
      primaryCta: "Abrir solução completa",
      previous: "Anterior",
      next: "Próximo",
      previousAria: "Solução anterior",
      nextAria: "Próxima solução",
      dotsAria: "Soluções do portfólio",
    },
    darkStory: {
      eyebrow: "Autoridade em profundidade",
      title: "Autoridade não vem do visual sozinho. Vem da forma como a solução é pensada.",
      body:
        "Um produto confiável precisa funcionar bem para quem compra, para quem administra e para quem depende da operação no dia a dia. Autoridade aparece quando posicionamento, fluxo e execução trabalham juntos.",
      details: [
        "Cada projeto começa com objetivo de negócio e prioridade operacional.",
        "A entrega conecta experiência do cliente com rotina interna real.",
        "O foco é construir algo sólido, útil e pronto para crescer.",
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Eu construo sistemas de agendamento e operação para negócios que precisam de presença comercial mais forte.",
      paragraphs: [
        "Ideal para barbearias, estúdios de beleza, clínicas e marcas locais premium que querem uma experiência digital melhor sem execução genérica.",
        "O processo começa por objetivo de negócio, fluxo do usuário e posicionamento. Depois disso, eu transformo essa direção em um produto publicado com frontend, backend e lógica operacional trabalhando juntos.",
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
      { label: "Posicionamento", value: "Clareza de negócio, visão de produto e apresentação premium" },
      { label: "Entrega", value: "Agendamento, operação interna e sistemas web escaláveis" },
      { label: "Fit", value: "Barbearias, estúdios, clínicas e marcas locais de serviço" },
    ],
    projectsList: [
      {
        eyebrow: "Solução",
        title: "Plataforma de agendamento e retenção para barbearias",
        description:
          "Um sistema full-stack pensado para ajudar negócios de grooming a converter mais agendamentos, organizar a operação diária e estimular recorrência com fluxos de fidelidade e relacionamento.",
        meta: ["Agendamento online", "Área do cliente", "Operação administrativa", "Fidelidade"],
        href: "/portfolio/barbearia",
        imageSrc: "/img/localhost_3001_admin_agenda.png",
        imageAlt: "Interface de agenda administrativa da plataforma para barbearia",
        imageWidth: 3456,
        imageHeight: 11084,
        scopeTitle: "Impacto no negócio",
        scopeDescription:
          "Construído para simular um fluxo comercial real de negócios de serviço, com foco em conversão de agendamento, retenção e operação do dia a dia.",
      },
      {
        eyebrow: "Produto",
        title: "Lana Baby Lab",
        description:
          "Uma plataforma editorial com posicionamento mais forte, acesso privado e experiência de leitura mais premium para um público nichado.",
        meta: ["Conteúdo por idade", "Studio privado", "Autenticação", "Node.js"],
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
        eyebrow: "Solução",
        title: "Plataforma comercial com landing page de vendas",
        description:
          "Um conceito de sistema que combina posicionamento de produto, experiência de landing page e fluxos comerciais internos dentro de uma proposta mais clara.",
        meta: ["CRM", "Funil comercial", "Relatórios", "Landing page comercial"],
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
          "Uma base de login centralizada para ecossistemas de produto que precisam de controle de sessão, reaproveitamento de acesso e prontidão para integrações futuras.",
        meta: ["Login central", "Cookies HTTP-only", "Prisma", "Pronto para SSO"],
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
        eyebrow: "Solução",
        title: "Plataforma de suporte e fluxo de chamados",
        description:
          "Um sistema operacional de suporte pensado para tornar solicitações mais claras, rastreáveis e profissionais para clientes e equipes internas.",
        meta: ["Help desk", "Kanban", "Fluxo de atendimento", "Portal técnico"],
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
