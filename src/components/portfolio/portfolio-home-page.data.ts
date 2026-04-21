export const INSTAGRAM_URL = "https://instagram.com/dabitech.ds/";

export const services = [
  {
    title: "Landing pages com presença de produto premium",
    description:
      "Páginas com hierarquia forte, narrativa comercial clara e direção visual mais madura para aumentar valor percebido logo no primeiro scroll.",
  },
  {
    title: "Sistemas que transformam operação em experiência",
    description:
      "Interfaces operacionais que deixam fluxos mais legíveis, menos improvisados e mais confiáveis para equipe, cliente e gestão.",
  },
  {
    title: "Base técnica pronta para publicar e evoluir",
    description:
      "O visual vem junto de uma estrutura que já nasce preparada para deploy, crescimento incremental e menos retrabalho conforme o produto amadurece.",
  },
] as const;

export const projects = [
  {
    eyebrow: "Cliente",
    title: "Plataforma para barbearia premium",
    description:
      "Uma presença digital mais forte para atrair clientes e uma operação mais organizada para sustentar o crescimento do negócio sem depender de improviso.",
    meta: ["Agendamento online", "Área do cliente", "Backoffice", "Gestão de estoque"],
    href: "/portfolio/barbearia",
    imageSrc: "/img/localhost_3001_admin_agenda.png",
    imageAlt: "Tela do painel administrativo da barbearia",
    imageWidth: 3456,
    imageHeight: 11084,
    scopeTitle: "Valor para o negócio",
    scopeDescription:
      "O projeto fortalece a imagem da barbearia, facilita o agendamento, melhora a experiência do cliente e dá mais controle sobre a operação diária.",
  },
  {
    eyebrow: "Produto",
    title: "Lana Baby Lab",
    description:
      "Um produto editorial com identidade própria, feito para transmitir cuidado, confiança e abrir espaço para crescimento de audiência e autoridade digital.",
    meta: ["Receitas por idade", "Studio privado", "Autenticação", "Node.js"],
    href: "/portfolio/lana-baby-lab",
    imageSrc: "/img/portfolio-lana-baby-lab-preview.svg",
    imageAlt: "Preview do projeto Lana Baby Lab",
    imageWidth: 1400,
    imageHeight: 900,
    scopeTitle: "Valor para o negócio",
    scopeDescription:
      "A entrega cria uma presença digital mais profissional, facilita a publicação de conteúdo e transforma um tema nichado em uma experiência com mais valor percebido.",
  },
  {
    eyebrow: "Produto",
    title: "Sistema de vendas com landing page comercial",
    description:
      "Uma proposta de produto com apresentação mais madura, capaz de comunicar valor com clareza e passar mais segurança para quem está avaliando contratar ou testar.",
    meta: ["CRM comercial", "Funil de vendas", "Relatórios", "Landing page"],
    href: "/portfolio/sistema-vendas",
    imageSrc: "/img/portfolio-sales-system-real-preview.png",
    imageAlt: "Dashboard do sistema de vendas",
    imageWidth: 3456,
    imageHeight: 1928,
    scopeTitle: "Valor para o negócio",
    scopeDescription:
      "O case mostra como um produto pode ganhar cara de solução real, com posicionamento mais forte e uma apresentação muito mais convincente para o mercado.",
  },
  {
    eyebrow: "Infraestrutura",
    title: "Central de autenticação para múltiplos sistemas",
    description:
      "Um núcleo de login pensado para concentrar autenticação, sessão e autorização em uma base reutilizável para ERP, help desk e futuros produtos conectados.",
    meta: ["Login central", "Cookie HTTP-only", "Prisma", "SSO-ready"],
    href: "/portfolio/central-autenticacao",
    imageSrc: "/img/portfolio-auth-system-real-preview.png",
    imageAlt: "Tela da central de autenticação",
    imageWidth: 3454,
    imageHeight: 1750,
    scopeTitle: "Valor para o negócio",
    scopeDescription:
      "A proposta reduz repetição entre produtos, cria uma base mais segura para acesso e prepara o ecossistema para crescer com autenticação mais consistente.",
  },
  {
    eyebrow: "Produto",
    title: "Sistema de chamados com operação cliente e técnico",
    description:
      "Um sistema pensado para tornar o atendimento mais claro, profissional e confiável, tanto para quem solicita suporte quanto para quem precisa operar a rotina.",
    meta: ["Help desk", "Kanban", "Atendimento", "Portal técnico"],
    href: "/portfolio/sistema-chamados",
    imageSrc: "/img/portfolio-support-tickets-preview.svg",
    imageAlt: "Preview do sistema de chamados",
    imageWidth: 1400,
    imageHeight: 900,
    scopeTitle: "Valor para o negócio",
    scopeDescription:
      "A proposta melhora a percepção de organização, acelera o fluxo de atendimento e cria uma experiência mais sólida para cliente e equipe.",
  },
] as const;

export const highlights = [
  { label: "Direção", value: "Produto, interface e narrativa" },
  { label: "Entrega", value: "Sites, sistemas e experiências web" },
  { label: "Resultado", value: "Mais autoridade visual e clareza comercial" },
] as const;

export type PortfolioProject = (typeof projects)[number];
