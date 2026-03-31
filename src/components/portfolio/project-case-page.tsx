import Image from "next/image";
import Link from "next/link";
import styles from "./project-case-page.module.css";

type CaseMetric = {
  label: string;
  value: string;
};

type CaseItem = {
  title: string;
  description: string;
};

type ProjectCasePageProps = {
  delivery: readonly CaseItem[];
  description: string;
  features: readonly CaseItem[];
  metrics: readonly CaseMetric[];
  modules: readonly string[];
  previewAlt: string;
  previewCaption: string;
  previewHeight: number;
  previewSrc: string;
  previewWidth: number;
  subtitle: string;
  title: string;
};

export function ProjectCasePage({
  delivery,
  description,
  features,
  metrics,
  modules,
  previewAlt,
  previewCaption,
  previewHeight,
  previewSrc,
  previewWidth,
  subtitle,
  title,
}: ProjectCasePageProps) {
  return (
    <main className={styles.page}>
      <div className={styles.pageInner}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Case publicado</span>
            <h1>{title}</h1>
            <p>{description}</p>

            <div className={styles.actions}>
              <Link className={styles.primaryCta} href="/">
                Voltar ao portfólio
              </Link>
              <a className={styles.secondaryCta} href="#modulos">
                Ver arquitetura do case
              </a>
            </div>

            <div className={styles.metricGrid}>
              {metrics.map((item) => (
                <article className={styles.metricCard} key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.previewWrap}>
            <div className={styles.previewCard}>
              <Image
                alt={previewAlt}
                className={styles.previewImage}
                height={previewHeight}
                priority
                src={previewSrc}
                width={previewWidth}
              />
            </div>
            <p className={styles.previewCaption}>{previewCaption}</p>
          </div>
        </section>

        <section className={styles.section} id="modulos">
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>Módulos</span>
            <h2>{subtitle}</h2>
          </div>

          <div className={styles.moduleGrid}>
            {modules.map((module, index) => (
              <article className={styles.moduleCard} key={module}>
                <span className={styles.moduleIndex}>{String(index + 1).padStart(2, "0")}</span>
                <strong>{module}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>Destaques</span>
            <h2>O valor do produto e o recorte técnico apresentado no case.</h2>
          </div>

          <div className={styles.featureGrid}>
            {features.map((item) => (
              <article className={styles.featureCard} key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionIntro}>
            <span className={styles.eyebrow}>Escopo apresentado</span>
            <h2>O que esse produto resolve na prática.</h2>
          </div>

          <div className={styles.deliveryGrid}>
            {delivery.map((item) => (
              <article className={styles.deliveryCard} key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
