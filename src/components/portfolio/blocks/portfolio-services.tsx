import sharedStyles from "../portfolio-shared.module.css";
import type { PortfolioService, PortfolioServicesCopy } from "../portfolio-home-page.data";
import styles from "./portfolio-services.module.css";

type PortfolioServicesProps = {
  copy: PortfolioServicesCopy;
  isPageReady: boolean;
  services: PortfolioService[];
};

export function PortfolioServices({ copy, isPageReady, services }: PortfolioServicesProps) {
  return (
    <section
      className={isPageReady ? styles.servicesSectionEntered : styles.servicesSection}
      id="servicos"
    >
      <div className={sharedStyles.sectionHeading}>
        <span className={sharedStyles.eyebrow}>{copy.eyebrow}</span>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <article className={styles.serviceCard} key={service.title}>
            <span className={styles.serviceIndex}>{String(index + 1).padStart(2, "0")}</span>
            <strong>{service.title}</strong>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
