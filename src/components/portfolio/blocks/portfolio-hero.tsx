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
        <span className={sharedStyles.eyebrow}>Portfólio de produto digital</span>
        <div className={styles.heroSignalBar}>
          <span>Design com cara de produto real</span>
          <span>Interface publicada</span>
          <span>Base pronta para evoluir</span>
        </div>
        <h1>Interfaces e páginas com o mesmo peso visual de uma landing de produto premium.</h1>
        <p className={styles.heroLead}>
          Eu desenho e implemento experiências web para negócios que precisam parecer mais
          organizados, mais sérios e mais valiosos, sem cair em layout genérico ou apresentação
          improvisada.
        </p>

        <div className={styles.heroEvidence}>
          <span>Narrativa visual clara para vender melhor</span>
          <span>Blocos com hierarquia, contraste e ritmo de leitura</span>
          <span>Execução técnica suficiente para virar produto de verdade</span>
        </div>

        <div className={styles.heroActions}>
          <Link className={`${sharedStyles.buttonBase} ${styles.heroPrimaryCta}`} href="#projetos">
            Ver projetos
          </Link>
          <a className={`${sharedStyles.buttonBase} ${styles.heroSecondaryCta}`} href="#contato">
            Solicitar um projeto
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

        <div className={styles.featureSpecGrid}>
          <article>
            <span>Abordagem</span>
            <strong>Interface comercial + operação real</strong>
          </article>
          <article>
            <span>Foco</span>
            <strong>Valor percebido, clareza e confiança</strong>
          </article>
        </div>

        <div className={styles.featureMeta}>
          {featuredProject.meta.slice(0, 3).map((item) => (
            <span key={item}>+ {item}</span>
          ))}
        </div>

        <Link className={`${sharedStyles.buttonBase} ${styles.featurePrimaryCta}`} href={featuredProject.href}>
          Ver case
        </Link>
      </aside>
    </section>
  );
}
