import { ProjectCasePage } from "@/components/portfolio/project-case-page";

const modules = [
  "Home pública com navegação editorial e foco em introdução alimentar",
  "Categorias por idade para organizar receitas e facilitar descoberta",
  "Páginas individuais de receita com conteúdo detalhado e SEO básico",
  "Studio privado com autenticação para cadastrar e gerenciar receitas",
] as const;

const features = [
  {
    title: "Produto com linguagem própria e público bem definido",
    description:
      "O projeto foi desenhado para famílias com bebês em introdução alimentar, com direção visual leve e conteúdo estruturado para navegação simples.",
  },
  {
    title: "Backoffice privado para continuidade operacional",
    description:
      "Além da vitrine pública, existe uma área restrita para autenticação da administradora e manutenção do catálogo de receitas.",
  },
  {
    title: "Stack enxuta com servidor Node próprio",
    description:
      "A aplicação usa servidor próprio, persistência de conteúdo e organização modular para publicar o produto sem depender do portfólio principal.",
  },
] as const;

export default function PortfolioLanaBabyLabPage() {
  return (
    <ProjectCasePage
      delivery={[
        {
          title: "Catálogo editorial mais fácil de explorar",
          description:
            "A estrutura pública organiza receitas, categorias e páginas detalhadas para leitura rápida e navegação por contexto de idade.",
        },
        {
          title: "Base de conteúdo com operação administrativa",
          description:
            "O projeto inclui autenticação e studio privado para publicar, atualizar e manter receitas sem depender de edição manual no código.",
        },
        {
          title: "Posicionamento visual coerente com o nicho",
          description:
            "Tipografia, cores e tom editorial foram construídos para reforçar acolhimento, clareza e confiança no contexto materno-infantil.",
        },
        {
          title: "Estrutura pronta para seguir evoluindo",
          description:
            "A base atual comporta expansão de catálogo, novos filtros, melhorias de SEO e continuidade de produto fora da vitrine do portfólio.",
        },
      ]}
      description="Case de um blog de receitas para bebês com frente pública editorial e studio privado para gestão de conteúdo. O foco aqui é unir experiência leve, organização por idade e uma base operacional simples para continuidade do produto."
      externalLinks={[
        {
          href: "https://blog-lana-baby-lab.vercel.app",
          label: "Ver projeto online",
        },
        {
          href: "https://blog-lana-baby-lab.vercel.app/studio",
          label: "Abrir studio",
        },
      ]}
      features={features}
      metrics={[
        { label: "Modelo", value: "Blog editorial com backoffice privado" },
        { label: "Foco", value: "Receitas, navegação por idade e gestão" },
        { label: "Entrega", value: "Node.js com catálogo público e studio" },
      ]}
      modules={modules}
      previewAlt="Preview do projeto Lana Baby Lab"
      previewCaption="Uma vitrine editorial com linguagem acolhedora, catálogo por idade e operação privada para manter o conteúdo."
      previewHeight={900}
      previewSrc="/img/portfolio-lana-baby-lab-preview.svg"
      previewWidth={1400}
      subtitle="Conteúdo organizado para leitura pública e manutenção privada."
      title="Lana Baby Lab"
    />
  );
}
