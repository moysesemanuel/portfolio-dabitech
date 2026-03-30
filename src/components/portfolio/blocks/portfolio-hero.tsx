import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../portfolio-shared.module.css";
import type { PortfolioProject } from "../portfolio-home-page.data";
import styles from "./portfolio-hero.module.css";

type Highlight = {
  label: string;
  value: string;
};

type PortfolioHeroProps = {
  featuredProject: PortfolioProject;
  highlights: readonly Highlight[];
  isPageReady: boolean;
};

export function PortfolioHero({ featuredProject, highlights, isPageReady }: PortfolioHeroProps) {
  return (
    <section className={isPageReady ? styles.heroEntered : styles.hero}>
      <div className={styles.heroCopy}>
        <span className={sharedStyles.eyebrow}>Portfólio</span>
        <h1>Sites e sistemas com presença forte, leitura clara e estrutura pronta para operar.</h1>
        <p className={styles.heroLead}>
          Desenvolvo produtos digitais com foco em valor percebido, consistência visual e base
          técnica sólida para publicar, manter e evoluir.
        </p>

        <div className={styles.heroActions}>
          <Link className={`${sharedStyles.buttonBase} ${styles.heroPrimaryCta}`} href="#projetos">
            Explorar portfólio
          </Link>
          <a className={`${sharedStyles.buttonBase} ${styles.heroSecondaryCta}`} href="#contato">
            Falar comigo
          </a>
        </div>

        <div className={styles.highlightGrid}>
          {highlights.map((item) => (
            <article className={styles.highlightCard} key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </div>

      <aside className={styles.heroFeature}>
        <div className={styles.featureHeader}>
          <span className={styles.featureTag}>Projeto em destaque</span>
          <span className={styles.featureIndex}>01</span>
        </div>

        <div className={styles.featureImageWrap}>
          <Image
            alt={featuredProject.imageAlt}
            height={featuredProject.imageHeight}
            priority
            src={featuredProject.imageSrc}
            width={featuredProject.imageWidth}
          />
        </div>

        <div className={styles.featureBody}>
          <span className={styles.featureEyebrow}>{featuredProject.eyebrow}</span>
          <h2>{featuredProject.title}</h2>
          <p>{featuredProject.description}</p>
        </div>

        <div className={styles.featureMeta}>
          {featuredProject.meta.slice(0, 3).map((item) => (
            <span key={item}>+ {item}</span>
          ))}
        </div>

        <Link className={`${sharedStyles.buttonBase} ${styles.featurePrimaryCta}`} href={featuredProject.href}>
          Abrir projeto
        </Link>
      </aside>
    </section>
  );
}
