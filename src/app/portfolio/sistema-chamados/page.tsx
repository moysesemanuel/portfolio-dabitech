import Link from "next/link";
import styles from "./page.module.css";

const modules = [
  "Kanban operacional com etapas de atendimento",
  "Perfis distintos para cliente e técnico",
  "Modal de ticket com chat e roteamento",
  "Fluxo de status com pausa, resolução e encerramento",
] as const;

const highlights = [
  {
    title: "Projeto separado do portfólio principal",
    description:
      "A aplicação foi criada como projeto standalone em `separated-repos/support-tickets-app`, com backend e estrutura próprios.",
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
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Projeto em destaque</span>
          <h1>Sistema de chamados</h1>
          <p>
            Esta vitrine apresenta o produto de suporte técnico dentro do portfólio principal. A
            aplicação completa segue separada, com seu próprio repositório e fluxo de evolução.
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
            alt="Preview do sistema de chamados"
            className={styles.previewImage}
            src="/img/portfolio-support-tickets-preview.svg"
          />
        </div>
      </section>

      <section className={styles.section} id="modulos">
        <div className={styles.sectionIntro}>
          <span className={styles.eyebrow}>Módulos</span>
          <h2>Atendimento estruturado para cliente e equipe técnica.</h2>
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
