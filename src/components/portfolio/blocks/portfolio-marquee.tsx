import Image from "next/image";
import type { PortfolioProject } from "../portfolio-home-page.data";
import styles from "./portfolio-marquee.module.css";

type PortfolioMarqueeProps = {
  projects: readonly PortfolioProject[];
};

const TRACK_REPEATS = 2;

export function PortfolioMarquee({ projects }: PortfolioMarqueeProps) {
  const marqueeItems = Array.from({ length: TRACK_REPEATS }, (_, repeatIndex) =>
    projects.map((project, index) => ({
      id: `${repeatIndex}-${project.href}`,
      project,
      focusClassName: styles[`focus${(index % 5) + 1}` as keyof typeof styles] ?? "",
    })),
  ).flat();

  return (
    <section aria-label="Prévia contínua dos projetos" className={styles.marqueeSection}>
      <div className={styles.marqueeIntro}>
        <span>Interface em movimento</span>
        <p>Recortes reais das telas publicados em um ritmo contínuo, como uma vitrine de produto.</p>
      </div>

      <div className={styles.marqueeViewport}>
        <div className={styles.marqueeTrack}>
          {marqueeItems.map(({ id, project, focusClassName }) => (
            <article className={styles.marqueeCard} key={id}>
              <div className={`${styles.marqueeImageWrap} ${focusClassName}`}>
                <Image
                  alt={project.imageAlt}
                  className={styles.marqueeImage}
                  height={project.imageHeight}
                  src={project.imageSrc}
                  width={project.imageWidth}
                />
              </div>
              <div className={styles.marqueeMeta}>
                <span>{project.eyebrow}</span>
                <strong>{project.title}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
