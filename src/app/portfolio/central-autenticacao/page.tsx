import { ProjectCasePage } from "@/components/portfolio/project-case-page";

const modules = [
  "Tela web de login e cadastro com seleção de aplicação de destino",
  "Camada central de sessão para manter acesso consistente entre produtos",
  "Proteção de rotas e leitura de contexto para áreas privadas",
  "Fluxo de handoff preparado para múltiplos produtos conectados",
] as const;

const features = [
  {
    title: "Autenticação tratada como infraestrutura compartilhada",
    description:
      "O projeto foi desenhado para servir mais de um sistema, concentrando login, sessão e regras de acesso em uma base única e reaproveitável.",
  },
  {
    title: "Arquitetura organizada para expansão gradual",
    description:
      "A base foi organizada para facilitar manutenção, expansão do fluxo e clareza de responsabilidades conforme o ecossistema digital cresce.",
  },
  {
    title: "Base pronta para evoluir como núcleo compartilhado",
    description:
      "A estrutura atual já sustenta troca de contexto entre aplicações e abre espaço para aprofundar autorização, governança de acesso e continuidade entre produtos.",
  },
] as const;

export default function PortfolioAuthCentralPage() {
  return (
    <ProjectCasePage
      delivery={[
        {
          title: "Entrada única para mais de um produto",
          description:
            "O case mostra como diferentes produtos podem compartilhar uma mesma base de acesso, reduzindo duplicação e inconsistência no ecossistema.",
        },
        {
          title: "Fluxo de acesso com mais confiança e controle",
          description:
            "A estrutura de sessão e proteção de áreas privadas reforça uma base confiável para produtos que dependem de continuidade entre login, uso e expansão.",
        },
        {
          title: "Arquitetura preparada para crescer com o ecossistema",
          description:
            "A proposta já nasce com responsabilidades bem separadas e handoff entre aplicações, criando espaço para evolução gradual sem recomeçar do zero.",
        },
        {
          title: "Mais maturidade para produtos que dependem de login",
          description:
            "Em vez de repetir telas isoladas de acesso, o projeto apresenta uma central capaz de sustentar múltiplos fluxos com lógica compartilhada.",
        },
      ]}
      description="Case de uma central de autenticação pensada para múltiplos sistemas, com entrada consistente, continuidade entre produtos e base preparada para sustentar um ecossistema digital mais organizado. O foco aqui é mostrar acesso como infraestrutura de produto, não só como mecanismo técnico."
      externalLinks={[
        {
          href: "https://login-system-ivory-seven.vercel.app",
          label: "Ver projeto online",
        },
      ]}
      features={features}
      metrics={[
        { label: "Modelo", value: "Núcleo de acesso para ecossistema digital" },
        { label: "Foco", value: "Consistência, confiança e reutilização entre produtos" },
        { label: "Entrega", value: "Base centralizada para login e continuidade" },
      ]}
      modules={modules}
      previewAlt="Tela da central de autenticação"
      previewCaption="A interface real da central de autenticação, com seleção de aplicação, acesso à conta e fluxo preparado para múltiplos produtos conectados."
      previewHeight={1750}
      previewSrc="/img/portfolio-auth-system-real-preview.png"
      previewWidth={3454}
      subtitle="Acesso organizado como base compartilhada entre sistemas."
      title="Central de autenticação"
    />
  );
}
