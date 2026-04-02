export const INSTAGRAM_URL = "https://instagram.com/dabitech.ds/";

export const services = [
  {
    title: "Sites que passam mais confiança e vendem melhor",
    description:
      "Páginas pensadas para elevar a percepção da sua marca, apresentar seu serviço com clareza e gerar conversas mais qualificadas com potenciais clientes.",
  },
  {
    title: "Sistemas que reduzem improviso no dia a dia",
    description:
      "Estruturo ferramentas que organizam atendimento, operação e processos internos para que o negócio ganhe mais controle, agilidade e consistência.",
  },
  {
    title: "Projetos pensados para crescer com o negócio",
    description:
      "A entrega não termina na interface. O projeto já nasce com uma base sólida para publicar, evoluir e evitar retrabalho quando a operação começar a exigir mais.",
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
    imageSrc: "/img/portfolio-sales-system-preview.svg",
    imageAlt: "Preview da landing page do sistema de vendas",
    imageWidth: 1200,
    imageHeight: 720,
    scopeTitle: "Valor para o negócio",
    scopeDescription:
      "O case mostra como um produto pode ganhar cara de solução real, com posicionamento mais forte e uma apresentação muito mais convincente para o mercado.",
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
  { label: "Foco", value: "Projetos que vendem e organizam" },
  { label: "Entrega", value: "Sites, sistemas e produtos web" },
  { label: "Objetivo", value: "Mais valor percebido e mais clareza" },
] as const;

export type PortfolioProject = (typeof projects)[number];
