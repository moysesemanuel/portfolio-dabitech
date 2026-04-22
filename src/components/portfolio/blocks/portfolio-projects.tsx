import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../portfolio-shared.module.css";
import type { PortfolioProject, PortfolioProjectsCopy } from "../portfolio-home-page.data";
import styles from "./portfolio-projects.module.css";

type PortfolioProjectsProps = {
  activeProject: PortfolioProject;
  activeProjectIndex: number;
  copy: PortfolioProjectsCopy;
  isPageReady: boolean;
  onNextProject: () => void;
  onPreviousProject: () => void;
  onSelectProject: (index: number) => void;
  projects: PortfolioProject[];
};

export function PortfolioProjects({
  activeProject,
  activeProjectIndex,
  copy,
  isPageReady,
  onNextProject,
  onPreviousProject,
  onSelectProject,
  projects,
}: PortfolioProjectsProps) {
  return (
    <section
      className={isPageReady ? styles.projectsSectionEntered : styles.projectsSection}
      id="projetos"
    >
      <div className={sharedStyles.sectionHeading}>
        <span className={sharedStyles.eyebrow}>{copy.eyebrow}</span>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
      </div>

      <div className={styles.carouselShell}>
        <div className={styles.projectSelectorRail}>
          {projects.map((project, index) => (
            <button
              className={
                activeProjectIndex === index ? styles.projectSelectorActive : styles.projectSelector
              }
              key={project.href}
              onClick={() => onSelectProject(index)}
              type="button"
            >
              <span>{project.eyebrow}</span>
              <strong>{project.title}</strong>
            </button>
          ))}
        </div>

        <article className={styles.projectCard}>
          <div className={styles.projectVisual}>
            <Image
              alt={activeProject.imageAlt}
              height={activeProject.imageHeight}
              loading={activeProjectIndex === 0 ? "eager" : "lazy"}
              src={activeProject.imageSrc}
              width={activeProject.imageWidth}
            />
          </div>

          <div className={styles.projectBody}>
            <div className={styles.projectHeader}>
              <div className={styles.projectHeaderTop}>
                <span className={styles.projectBadge}>{activeProject.eyebrow}</span>
                <span className={styles.projectNumber}>
                  {String(activeProjectIndex + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>
            </div>

            <div className={styles.projectMeta}>
              {activeProject.meta.map((item) => (
                <span key={item}>+ {item}</span>
              ))}
            </div>

            <div className={styles.scopeCard}>
              <strong>{activeProject.scopeTitle}</strong>
              <p>{activeProject.scopeDescription}</p>
            </div>

            <div className={styles.projectActions}>
              <Link className={`${sharedStyles.buttonBase} ${styles.projectPrimaryCta}`} href={activeProject.href}>
                {copy.primaryCta}
              </Link>
            </div>
          </div>
        </article>

        <div className={styles.carouselFooter}>
          <div className={styles.carouselControls}>
            <button
              aria-label={copy.previousAria}
              className={styles.carouselButton}
              onClick={onPreviousProject}
              type="button"
            >
              {copy.previous}
            </button>
            <button
              aria-label={copy.nextAria}
              className={styles.carouselButton}
              onClick={onNextProject}
              type="button"
            >
              {copy.next}
            </button>
          </div>

          <div className={styles.carouselDots} role="tablist" aria-label={copy.dotsAria}>
            {projects.map((project, index) => (
              <button
                aria-label={`Ir para ${project.title}`}
                aria-selected={activeProjectIndex === index}
                className={activeProjectIndex === index ? styles.carouselDotActive : styles.carouselDot}
                key={project.href}
                onClick={() => onSelectProject(index)}
                role="tab"
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
