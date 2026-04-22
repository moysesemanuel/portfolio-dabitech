import { ProjectCasePage } from "@/components/portfolio/project-case-page";

const modules = [
  "Fluxo operacional com etapas visíveis de atendimento",
  "Perfis distintos para cliente e equipe interna",
  "Ticket com histórico, conversa e roteamento",
  "Fluxo de status com pausa, resolução e encerramento",
] as const;

const features = [
  {
    title: "Projeto separado do portfólio principal",
    description:
      "A aplicação foi desenhada como produto independente, com backend próprio e fluxo operacional separado da vitrine principal.",
  },
  {
    title: "Operação desenhada para clareza de responsabilidade",
    description:
      "A estrutura destaca etapas, responsáveis e contexto de atendimento para tornar a rotina mais legível e menos difusa.",
  },
  {
    title: "Base pronta para evolução",
    description:
      "O fluxo já suporta abertura, resposta, pausa, resolução e encerramento, com espaço para aprofundar regras, acesso e persistência conforme a operação amadurece.",
  },
] as const;

export default function PortfolioSupportTicketsPage() {
  return (
    <ProjectCasePage
      delivery={[
        {
          title: "Atendimento visualmente mais fácil de entender",
          description:
            "O case deixa mais claro como cliente e equipe percorrem etapas distintas dentro de uma mesma rotina de suporte.",
        },
        {
          title: "Fluxo operacional com responsabilidade mais visível",
          description:
            "Etapas, ticket, histórico e status formam uma narrativa mais próxima de uma operação real em que cada demanda precisa de dono, contexto e continuidade.",
        },
        {
          title: "Separação clara entre vitrine e aplicação",
          description:
            "A página apresenta o valor do sistema como produto, enquanto a aplicação completa pode seguir evoluindo de forma independente.",
        },
        {
          title: "Mais contexto para cada entrega técnica",
          description:
            "O case agora mostra não só a interface, mas também a lógica de responsabilidade e o recorte funcional que sustentam o produto.",
        },
      ]}
      description="Case de uma plataforma de suporte pensada para organizar solicitações, clarificar responsabilidade e tornar o fluxo de resposta mais confiável para quem atende e para quem depende do atendimento. A proposta aqui é apresentar clareza operacional, não só interface."
      externalLinks={[
        {
          href: "https://support-tickets-app-nine.vercel.app",
          label: "Ver projeto online",
        },
      ]}
      features={features}
      metrics={[
        { label: "Modelo", value: "Fluxo de suporte com operação estruturada" },
        { label: "Foco", value: "Responsabilidade, resposta e continuidade" },
        { label: "Entrega", value: "Produto com contexto operacional claro" },
      ]}
      modules={modules}
      previewAlt="Preview do sistema de chamados"
      previewCaption="Uma vitrine mais sólida para o produto, com foco em responsabilidade operacional e leitura clara do fluxo em contexto real."
      previewHeight={900}
      previewSrc="/img/portfolio-support-tickets-preview.svg"
      previewWidth={1400}
      subtitle="Atendimento estruturado para cliente e equipe interna."
      title="Sistema de chamados"
    />
  );
}
