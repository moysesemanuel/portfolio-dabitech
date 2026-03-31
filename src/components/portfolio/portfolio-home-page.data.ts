export const INSTAGRAM_URL = "https://instagram.com/";

export const services = [
  {
    title: "Sites institucionais com direção visual",
    description:
      "Páginas comerciais com narrativa clara, presença de marca e estrutura preparada para crescimento.",
  },
  {
    title: "Sistemas internos e produtos web",
    description:
      "Painéis administrativos, fluxos operacionais e aplicações web pensadas para uso real, com foco em clareza, manutenção e evolução.",
  },
  {
    title: "Base técnica e continuidade",
    description:
      "Frontend, backend, banco de dados, autenticação e deploy organizados para garantir estabilidade e evolução contínua.",
  },
] as const;

export const projects = [
  {
    eyebrow: "Cliente",
    title: "Plataforma para barbearia premium",
    description:
      "Projeto com presença institucional forte e operação completa por trás, reunindo agenda, fidelidade, catálogo, carrinho e backoffice integrado.",
    meta: ["Agendamento online", "Área do cliente", "Backoffice", "Gestão de estoque"],
    href: "/portfolio/barbearia",
    imageSrc: "/img/localhost_3001_admin_agenda.png",
    imageAlt: "Tela do painel administrativo da barbearia",
    imageWidth: 3456,
    imageHeight: 11084,
    scopeTitle: "Escopo entregue",
    scopeDescription:
      "Interface pública, persistência em banco, autenticação, agenda, fidelidade, catálogo de produtos, estoque e rotina administrativa conectada à operação do negócio.",
  },
  {
    eyebrow: "Produto",
    title: "Sistema de vendas com landing page comercial",
    description:
      "Conceito de SaaS com página comercial, funil, indicadores e apresentação pensada para reforçar posicionamento e conversão.",
    meta: ["CRM comercial", "Funil de vendas", "Relatórios", "Landing page"],
    href: "/portfolio/sistema-vendas",
    imageSrc: "/img/portfolio-sales-system-preview.svg",
    imageAlt: "Preview da landing page do sistema de vendas",
    imageWidth: 1200,
    imageHeight: 720,
    scopeTitle: "Escopo proposto",
    scopeDescription:
      "Produto com arquitetura própria, pronto para evoluir com banco, cadastros, operação comercial e deploy independentes da vitrine institucional.",
  },
  {
    eyebrow: "Produto",
    title: "Sistema de chamados com operação cliente e técnico",
    description:
      "Help desk com Kanban, fluxo de atendimento, comentários, status e interfaces separadas para cliente e equipe técnica.",
    meta: ["Help desk", "Kanban", "Atendimento", "Portal técnico"],
    href: "/portfolio/sistema-chamados",
    imageSrc: "/img/portfolio-support-tickets-preview.svg",
    imageAlt: "Preview do sistema de chamados",
    imageWidth: 1400,
    imageHeight: 900,
    scopeTitle: "Escopo entregue",
    scopeDescription:
      "Sistema com backend próprio, gestão de tickets, fluxo de resposta e interface operacional inspirada em centrais de atendimento.",
  },
] as const;

export const highlights = [
  { label: "Entrega", value: "Web + sistema" },
  { label: "Base", value: "Full Stack" },
  { label: "Deploy", value: "Pronto para produção (Vercel-ready)" },
] as const;

export type PortfolioProject = (typeof projects)[number];
