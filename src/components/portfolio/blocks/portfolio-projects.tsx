import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../portfolio-shared.module.css";
import type { PortfolioProject } from "../portfolio-home-page.data";
import styles from "./portfolio-projects.module.css";

type PortfolioProjectsProps = {
  activeProject: PortfolioProject;
  activeProjectIndex: number;
  isPageReady: boolean;
  onNextProject: () => void;
  onPreviousProject: () => void;
  onSelectProject: (index: number) => void;
  projects: readonly PortfolioProject[];
};

export function PortfolioProjects({
  activeProject,
  activeProjectIndex,
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
        <span className={sharedStyles.eyebrow}>Projetos</span>
        <h2>Uma vitrine direta, navegável e com contexto suficiente para cada entrega.</h2>
        <p>
          Cada projeto combina visão de produto, interface publicada e recorte técnico real do que
          foi desenvolvido.
        </p>
      </div>

      <div className={styles.carouselShell}>
        <article className={styles.projectCard}>
          <div className={styles.projectVisual}>
            <Image
              alt={activeProject.imageAlt}
              height={activeProject.imageHeight}
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
                Abrir projeto completo
              </Link>
            </div>
          </div>
        </article>

        <div className={styles.carouselFooter}>
          <div className={styles.carouselControls}>
            <button
              aria-label="Projeto anterior"
              className={styles.carouselButton}
              onClick={onPreviousProject}
              type="button"
            >
              Anterior
            </button>
            <button
              aria-label="Próximo projeto"
              className={styles.carouselButton}
              onClick={onNextProject}
              type="button"
            >
              Próximo
            </button>
          </div>

          <div className={styles.carouselDots} role="tablist" aria-label="Projetos do portfólio">
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
