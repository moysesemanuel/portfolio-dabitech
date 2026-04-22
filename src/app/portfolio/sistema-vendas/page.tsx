import { ProjectCasePage } from "@/components/portfolio/project-case-page";

const modules = [
  "Painel com indicadores operacionais",
  "Clientes, produtos e estoque com listagem",
  "Vendas com persistência e resumo financeiro",
  "Perfil com fluxo lateral e ações de conta",
] as const;

const features = [
  {
    title: "Produto com estrutura própria",
    description:
      "A aplicação foi desenhada para evoluir como produto independente, com base própria para banco, regras de negócio e deploy.",
  },
  {
    title: "Estrutura comercial com leitura de produto real",
    description:
      "A estrutura de navegação, módulos e leitura de indicadores aproxima o projeto de uma operação comercial utilizável, não de um conceito solto.",
  },
  {
    title: "Base pronta para evolução",
    description:
      "A vitrine publicada apresenta o produto como uma base comercial consistente, preservando espaço para evolução operacional e técnica independente.",
  },
] as const;

export default function PortfolioSalesSystemPage() {
  return (
    <ProjectCasePage
      delivery={[
        {
          title: "Estrutura comercial publicada com narrativa mais convincente",
          description:
            "A landing organiza proposta, benefícios e visão do produto de forma mais convincente para negócio, operação e leitura comercial.",
        },
        {
          title: "Base para cadastros, vendas e acompanhamento",
          description:
            "O case apresenta um produto preparado para clientes, produtos, estoque, vendas e leitura de indicadores em uma mesma experiência.",
        },
        {
          title: "Produto desenhado para sustentar rotina comercial",
          description:
            "A arquitetura apresentada favorece continuidade, desacoplamento e amadurecimento de um fluxo comercial que pode seguir evoluindo como produto.",
        },
        {
          title: "Posicionamento mais forte para uma estrutura de vendas real",
          description:
            "A página agora trata o projeto como produto, não só como tela solta, o que melhora percepção de maturidade e valor.",
        },
      ]}
      description="Case de uma plataforma comercial pensada para unir captação, acompanhamento, indicadores e rotina interna em uma estrutura que parece uma operação real de vendas. O foco aqui é mostrar clareza comercial, contexto de produto e valor de negócio."
      externalLinks={[
        {
          href: "https://sales-system-hazel.vercel.app",
          label: "Ver projeto online",
        },
      ]}
      features={features}
      metrics={[
        { label: "Modelo", value: "Plataforma comercial com narrativa de produto" },
        { label: "Foco", value: "Captação, indicadores e rotina de vendas" },
        { label: "Entrega", value: "Interface publicada com contexto de negócio" },
      ]}
      modules={modules}
      previewAlt="Dashboard do sistema de vendas"
      previewCaption="Uma visão real do painel comercial, com estrutura de módulos, atalhos operacionais e leitura rápida dos dados do sistema."
      previewHeight={1928}
      previewSrc="/img/portfolio-sales-system-real-preview.png"
      previewWidth={3456}
      subtitle="Fluxo comercial organizado para uma operação que parece real."
      title="Sistema de vendas"
    />
  );
}
