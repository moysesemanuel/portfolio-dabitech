import Image from "next/image";
import type { PortfolioMarqueeCopy, PortfolioProject } from "../portfolio-home-page.data";
import styles from "./portfolio-marquee.module.css";

type PortfolioMarqueeProps = {
  copy: PortfolioMarqueeCopy;
  projects: PortfolioProject[];
};

const TRACK_REPEATS = 2;

export function PortfolioMarquee({ copy, projects }: PortfolioMarqueeProps) {
  const marqueeItems = Array.from({ length: TRACK_REPEATS }, (_, repeatIndex) =>
    projects.map((project, index) => ({
      id: `${repeatIndex}-${project.href}`,
      project,
      focusClassName: styles[`focus${(index % 5) + 1}` as keyof typeof styles] ?? "",
    })),
  ).flat();

  return (
    <section aria-label={copy.ariaLabel} className={styles.marqueeSection}>
      <div className={styles.marqueeIntro}>
        <span>{copy.eyebrow}</span>
        <p>{copy.description}</p>
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
