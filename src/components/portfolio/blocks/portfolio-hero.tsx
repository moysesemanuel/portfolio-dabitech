import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../portfolio-shared.module.css";
import type {
  PortfolioHeroCopy,
  PortfolioHighlight,
  PortfolioProject,
} from "../portfolio-home-page.data";
import styles from "./portfolio-hero.module.css";

type PortfolioHeroProps = {
  copy: PortfolioHeroCopy;
  featuredProject: PortfolioProject;
  highlights: PortfolioHighlight[];
  isPageReady: boolean;
};

export function PortfolioHero({ copy, featuredProject, highlights, isPageReady }: PortfolioHeroProps) {
  return (
    <section className={isPageReady ? styles.heroEntered : styles.hero}>
      <div className={styles.heroCopy}>
        <span className={sharedStyles.eyebrow}>{copy.eyebrow}</span>
        <div className={styles.heroSignalBar}>
          {copy.signalBar.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <h1>{copy.title}</h1>
        <p className={styles.heroLead}>{copy.lead}</p>

        <div className={styles.heroEvidence}>
          {copy.evidence.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className={styles.heroActions}>
          <Link className={`${sharedStyles.buttonBase} ${styles.heroPrimaryCta}`} href="#projetos">
            {copy.primaryCta}
          </Link>
          <a className={`${sharedStyles.buttonBase} ${styles.heroSecondaryCta}`} href="#contato">
            {copy.secondaryCta}
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
          <span className={styles.featureTag}>{copy.featuredTag}</span>
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

        <div className={styles.featureSpecGrid}>
          {copy.featureSpecs.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>

        <div className={styles.featureMeta}>
          {featuredProject.meta.slice(0, 3).map((item) => (
            <span key={item}>+ {item}</span>
          ))}
        </div>

        <Link className={`${sharedStyles.buttonBase} ${styles.featurePrimaryCta}`} href={featuredProject.href}>
          {copy.featureCta}
        </Link>
      </aside>
    </section>
  );
}
