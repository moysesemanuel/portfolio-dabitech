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
    title: "Base própria para continuidade editorial",
    description:
      "A aplicação foi estruturada para sustentar publicação, manutenção e crescimento do conteúdo com autonomia, sem parecer só uma vitrine estática dentro do portfólio.",
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
      description="Case de uma plataforma editorial criada para fortalecer autoridade de marca, organizar conteúdo especializado e construir uma experiência digital mais confiável para um público materno-infantil bem definido."
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
        { label: "Foco", value: "Autoridade digital, clareza editorial e gestão" },
        { label: "Entrega", value: "Catálogo público com operação privada" },
      ]}
      modules={modules}
      previewAlt="Preview do projeto Lana Baby Lab"
      previewCaption="Uma vitrine editorial com linguagem acolhedora, catálogo por idade e operação privada para manter o conteúdo."
      previewHeight={900}
      previewSrc="/img/portfolio-lana-baby-lab-preview.png"
      previewWidth={1400}
      subtitle="Autoridade editorial com experiência pública e operação privada."
      title="Lana Baby Lab"
    />
  );
}
