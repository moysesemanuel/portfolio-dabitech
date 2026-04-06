import { ProjectCasePage } from "@/components/portfolio/project-case-page";

const modules = [
  "Tela web de login e cadastro com seleção de aplicação de destino",
  "Sessão central em cookie HTTP-only com persistência em PostgreSQL",
  "Middleware para leitura de sessão e proteção de rotas autenticadas",
  "Fluxo de handoff preparado para ERP, help desk e novos produtos",
] as const;

const features = [
  {
    title: "Autenticação tratada como infraestrutura compartilhada",
    description:
      "O projeto foi desenhado para servir mais de um sistema, concentrando login, sessão e regras de acesso em uma base única e reaproveitável.",
  },
  {
    title: "Backend organizado por camadas",
    description:
      "Rotas, controllers, services, middlewares e utilitários foram separados para facilitar manutenção, crescimento do fluxo e clareza de responsabilidades.",
  },
  {
    title: "Base pronta para evoluir em SSO real",
    description:
      "A estrutura atual já contempla cookie seguro, sessão persistida, troca de contexto entre aplicações e espaço para aprofundar autorização e handoff.",
  },
] as const;

export default function PortfolioAuthCentralPage() {
  return (
    <ProjectCasePage
      delivery={[
        {
          title: "Entrada única para mais de um produto",
          description:
            "O case mostra como ERP, help desk e novos sistemas podem compartilhar uma mesma camada de autenticação, reduzindo duplicação e inconsistência.",
        },
        {
          title: "Fluxo de acesso com mais segurança e controle",
          description:
            "Sessão em cookie HTTP-only, persistência em banco e middleware de autenticação reforçam a base técnica para uso real em produtos privados.",
        },
        {
          title: "Arquitetura preparada para crescer com o ecossistema",
          description:
            "A proposta já nasce com banco, serviços, validação e handoff entre aplicações, criando espaço para evolução gradual sem recomeçar do zero.",
        },
        {
          title: "Mais maturidade para produtos que dependem de login",
          description:
            "Em vez de repetir telas isoladas de acesso, o projeto apresenta uma central capaz de sustentar múltiplos fluxos com lógica compartilhada.",
        },
      ]}
      description="Case de uma central de autenticação pensada para múltiplos sistemas, com login, cadastro, sessão persistida, proteção de rotas e base preparada para handoff entre aplicações. O foco aqui é mostrar autenticação como infraestrutura de produto, não só como tela de acesso."
      features={features}
      metrics={[
        { label: "Modelo", value: "Auth central para ERP e help desk" },
        { label: "Foco", value: "Sessão, segurança e reutilização entre apps" },
        { label: "Entrega", value: "Node.js, Express, Prisma e PostgreSQL" },
      ]}
      modules={modules}
      previewAlt="Preview da central de autenticação"
      previewCaption="Uma base única para login, sessão e direcionamento entre produtos, com estrutura preparada para crescer junto do ecossistema."
      previewHeight={900}
      previewSrc="/img/portfolio-auth-system-preview.svg"
      previewWidth={1400}
      subtitle="Autenticação organizada como núcleo compartilhado entre sistemas."
      title="Central de autenticação"
    />
  );
}
