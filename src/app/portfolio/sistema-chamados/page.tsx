import { ProjectCasePage } from "@/components/portfolio/project-case-page";

const modules = [
  "Kanban operacional com etapas de atendimento",
  "Perfis distintos para cliente e técnico",
  "Modal de ticket com chat e roteamento",
  "Fluxo de status com pausa, resolução e encerramento",
] as const;

const features = [
  {
    title: "Projeto separado do portfólio principal",
    description:
      "A aplicação foi desenhada como produto independente, com backend próprio e fluxo operacional separado da vitrine principal.",
  },
  {
    title: "Operação inspirada em help desks reais",
    description:
      "Sidebar de sistema, Kanban por etapa, modal operacional e navegação voltada para rotina de atendimento.",
  },
  {
    title: "Base pronta para evolução",
    description:
      "O fluxo já suporta abertura, resposta, pausa, resolução e encerramento, com espaço para autenticação real e persistência expandida.",
  },
] as const;

export default function PortfolioSupportTicketsPage() {
  return (
    <ProjectCasePage
      delivery={[
        {
          title: "Atendimento visualmente mais fácil de entender",
          description:
            "O case deixa mais claro como cliente e equipe técnica percorrem etapas distintas dentro de uma mesma operação de suporte.",
        },
        {
          title: "Fluxo operacional com cara de produto real",
          description:
            "Kanban, modal de ticket, histórico e status formam uma narrativa muito mais próxima de um help desk que poderia entrar em produção.",
        },
        {
          title: "Separação clara entre vitrine e aplicação",
          description:
            "A página apresenta o valor do sistema como produto, enquanto a aplicação completa pode seguir evoluindo de forma independente.",
        },
        {
          title: "Mais contexto para cada entrega técnica",
          description:
            "O case agora mostra não só a interface, mas também o recorte funcional e a lógica operacional que sustentam o produto.",
        },
      ]}
      description="Case de um sistema de chamados com foco em operação cliente-técnico, leitura rápida do fluxo e contexto funcional suficiente para mostrar o produto como solução real de atendimento. A proposta aqui é apresentar valor, não só interface."
      features={features}
      metrics={[
        { label: "Modelo", value: "Help desk com fluxo operacional completo" },
        { label: "Foco", value: "Cliente, técnico, status e continuidade" },
        { label: "Entrega", value: "Case com contexto de produto e operação" },
      ]}
      modules={modules}
      previewAlt="Preview do sistema de chamados"
      previewCaption="Uma vitrine mais sólida para o produto, com foco em rotina operacional e leitura de fluxo em contexto real."
      previewHeight={900}
      previewSrc="/img/portfolio-support-tickets-preview.svg"
      previewWidth={1400}
      subtitle="Atendimento estruturado para cliente e equipe técnica."
      title="Sistema de chamados"
    />
  );
}
