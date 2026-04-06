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
    title: "Interface de ERP comercial",
    description:
      "Sidebar fixa, busca global, dashboard por módulo e fluxo preparado para cadastro, operação e acompanhamento.",
  },
  {
    title: "Base pronta para evolução",
    description:
      "A vitrine publicada apresenta o produto sem depender da aplicação operacional completa, preservando espaço para evolução técnica independente.",
  },
] as const;

export default function PortfolioSalesSystemPage() {
  return (
    <ProjectCasePage
      delivery={[
        {
          title: "Estrutura comercial publicada com narrativa clara",
          description:
            "A landing organiza proposta, benefícios e visão do produto de forma mais convincente para negócio e operação.",
        },
        {
          title: "Base para cadastros, vendas e acompanhamento",
          description:
            "O case apresenta um produto preparado para clientes, produtos, estoque, vendas e leitura de indicadores em uma mesma experiência.",
        },
        {
          title: "Produto desenhado para seguir como SaaS",
          description:
            "A arquitetura apresentada favorece evolução contínua, desacoplamento e publicação independente da vitrine principal.",
        },
        {
          title: "Posicionamento mais forte para um ERP comercial",
          description:
            "A página agora trata o projeto como produto, não só como tela solta, o que melhora percepção de maturidade e valor.",
        },
      ]}
      description="Case de um sistema comercial pensado para unir landing, visão de produto e operação interna em uma estrutura capaz de evoluir como SaaS. O foco aqui é mostrar clareza de proposta, arquitetura de módulos e contexto de negócio."
      externalLinks={[
        {
          href: "https://sales-system-hazel.vercel.app",
          label: "Ver projeto online",
        },
      ]}
      features={features}
      metrics={[
        { label: "Modelo", value: "ERP comercial com narrativa de produto" },
        { label: "Foco", value: "Operação, indicadores e evolução SaaS" },
        { label: "Entrega", value: "Interface publicada com contexto técnico" },
      ]}
      modules={modules}
      previewAlt="Dashboard do sistema de vendas"
      previewCaption="Uma visão real do painel comercial, com estrutura de módulos, atalhos operacionais e leitura rápida dos dados do sistema."
      previewHeight={1928}
      previewSrc="/img/portfolio-sales-system-real-preview.png"
      previewWidth={3456}
      subtitle="Fluxo comercial organizado para uso real."
      title="Sistema de vendas"
    />
  );
}
