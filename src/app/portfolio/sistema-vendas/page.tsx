import Link from "next/link";
import styles from "./page.module.css";

const modules = [
  "Painel com indicadores operacionais",
  "Clientes, produtos e estoque com listagem",
  "Vendas com persistência e resumo financeiro",
  "Perfil com fluxo lateral e ações de conta",
] as const;

const highlights = [
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
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Projeto em destaque</span>
          <h1>Sistema de vendas</h1>
          <p>
            Esta página publica a vitrine do produto dentro do portfólio principal. A aplicação
            completa segue separada como projeto standalone, com banco e regras próprias.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primaryCta} href="/">
              Voltar ao portfólio
            </Link>
            <a className={styles.secondaryCta} href="#modulos">
              Ver módulos
            </a>
          </div>
        </div>

        <div className={styles.previewCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Preview do sistema de vendas"
            className={styles.previewImage}
            src="/img/portfolio-sales-system-preview.svg"
          />
        </div>
      </section>

      <section className={styles.section} id="modulos">
        <div className={styles.sectionIntro}>
          <span className={styles.eyebrow}>Módulos</span>
          <h2>Fluxo comercial organizado para uso real.</h2>
        </div>

        <div className={styles.moduleGrid}>
          {modules.map((module) => (
            <article className={styles.moduleCard} key={module}>
              <strong>{module}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.eyebrow}>Estrutura</span>
          <h2>O que já foi construído nesse projeto.</h2>
        </div>

        <div className={styles.highlightGrid}>
          {highlights.map((item) => (
            <article className={styles.highlightCard} key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
