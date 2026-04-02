import { ProjectCasePage } from "@/components/portfolio/project-case-page";

const modules = [
  "Home institucional com proposta, serviços e prova social",
  "Fluxo completo de agendamento com disponibilidade por horário",
  "Área do cliente com histórico e acompanhamento de atendimentos",
  "Backoffice com agenda, catálogo, fidelidade e gestão operacional",
] as const;

const features = [
  {
    title: "Presença institucional e operação no mesmo produto",
    description:
      "O projeto reúne frente comercial, experiência do cliente e rotina administrativa em uma base única, conectada ao negócio real.",
  },
  {
    title: "Fluxo operacional com profundidade de produto",
    description:
      "Além da interface pública, a solução cobre agenda, carrinho, fidelidade, estoque e processos internos para continuidade da operação.",
  },
  {
    title: "Case com recorte full stack claro",
    description:
      "A entrega combina frontend, backend, persistência, autenticação e módulos administrativos em uma estrutura preparada para produção.",
  },
] as const;

export default function PortfolioBarbeariaPage() {
  return (
    <ProjectCasePage
      delivery={[
        {
          title: "Experiência pública mais convincente para conversão",
          description:
            "A barbearia passa a apresentar serviços, posicionamento e diferenciais com mais clareza, reforçando percepção de valor desde a primeira visita.",
        },
        {
          title: "Agendamento com contexto real de operação",
          description:
            "O cliente consegue navegar pelos serviços, escolher horários e acompanhar sua relação com o negócio dentro de uma mesma jornada.",
        },
        {
          title: "Retaguarda administrativa integrada",
          description:
            "Agenda, catálogo, fidelidade, estoque e rotinas internas deixam de ser peças soltas e passam a operar de forma conectada.",
        },
        {
          title: "Produto pronto para evolução contínua",
          description:
            "A base foi organizada para suportar manutenção, novas regras de negócio e publicação contínua sem depender de refações estruturais.",
        },
      ]}
      description="Case de uma plataforma para barbearia premium que combina presença institucional, agendamento online, relacionamento com o cliente e gestão administrativa em uma experiência única. A proposta aqui é mostrar um produto com uso real, não só uma vitrine."
      externalLinks={[
        {
          href: "/agendamento",
          label: "Ver projeto online",
        },
      ]}
      features={features}
      metrics={[
        { label: "Modelo", value: "Site institucional com operação completa" },
        { label: "Foco", value: "Agenda, cliente e gestão administrativa" },
        { label: "Entrega", value: "Full stack com fluxo publicado" },
      ]}
      modules={modules}
      previewAlt="Tela do painel administrativo da barbearia"
      previewCaption="Um produto que combina vitrine, agendamento e backoffice em uma mesma base operacional."
      previewHeight={11084}
      previewSrc="/img/localhost_3001_admin_agenda.png"
      previewWidth={3456}
      subtitle="Presença comercial e operação conectadas no mesmo sistema."
      title="Plataforma para barbearia premium"
    />
  );
}
