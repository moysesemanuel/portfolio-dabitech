import type { PortfolioStoryCopy } from "../portfolio-home-page.data";
import styles from "./portfolio-scroll-story.module.css";

type PortfolioScrollStoryProps = {
  copy: PortfolioStoryCopy;
  mode: "light" | "dark";
  progress: number;
};

function renderTypingColorTitle(title: string, progress: number, className: string, mode: "light" | "dark") {
  const characters = Array.from(title);
  const visibleCount = Math.max(0, Math.floor(progress * characters.length));
  const segments = title.split(/(\s+)/);
  let characterOffset = 0;

  return (
    <h2 className={className}>
      {segments.map((segment, segmentIndex) => {
        if (/^\s+$/.test(segment)) {
          characterOffset += segment.length;
          return segment;
        }

        const wordOffset = characterOffset;
        const wordCharacters = Array.from(segment);
        characterOffset += segment.length;

        return (
          <span aria-hidden="true" className={styles.titleWord} key={`${segment}-${segmentIndex}`}>
            {wordCharacters.map((character, index) => {
              const stateClassName =
                wordOffset + index < visibleCount
                  ? mode === "light"
                    ? styles.titleCharActive
                    : styles.titleCharActiveDark
                  : mode === "light"
                    ? styles.titleCharInactive
                    : styles.titleCharInactiveDark;

              return (
                <span className={`${styles.titleChar} ${stateClassName}`} key={`${character}-${wordOffset + index}`}>
                  {character}
                </span>
              );
            })}
          </span>
        );
      })}
      <span className={styles.srOnly}>{title}</span>
    </h2>
  );
}

export function PortfolioScrollStory({ copy, mode, progress }: PortfolioScrollStoryProps) {
  const sectionClassName = mode === "light" ? styles.sectionLight : styles.sectionDark;
  const panelClassName = mode === "light" ? styles.panelLight : styles.panelDark;
  const textClassName = mode === "light" ? styles.copyLight : styles.copyDark;
  const typingProgress =
    mode === "light"
      ? Math.min(1, Math.max(0, (progress - 0.02) * 1.2))
      : Math.min(1, Math.max(0, (progress - 0.01) * 1.95));
  const leadOpacity = mode === "light" ? 0.54 + progress * 0.46 : 0.62 + progress * 0.38;

  return (
    <section className={`${styles.sectionBase} ${sectionClassName}`}>
      <div className={styles.stickyFrame}>
        <div className={`${styles.storyPanel} ${panelClassName}`}>
          <div className={`${styles.storyCopy} ${textClassName}`}>
            <span className={styles.eyebrow}>{copy.eyebrow}</span>
            {renderTypingColorTitle(copy.title, typingProgress, styles.typingTitle, mode)}
            <p className={styles.storyLead} style={{ opacity: leadOpacity }}>
              {copy.body}
            </p>
          </div>

          <div className={styles.storySteps}>
            {copy.details.map((detail, index) => {
              const baseProgress =
                mode === "light"
                  ? progress
                  : Math.min(1, Math.max(0, (progress - 0.01) * 1.95));
              const stepStart = 0.08 + index * 0.2;
              const stepWindow = 0.16;
              const stepProgress = Math.max(0, Math.min(1, (baseProgress - stepStart) / stepWindow));

              return (
                <article
                  className={styles.storyStep}
                  key={detail}
                  style={{
                    opacity: 0.12 + stepProgress * 0.88,
                    transform: `translateY(${24 - stepProgress * 24}px)`,
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
