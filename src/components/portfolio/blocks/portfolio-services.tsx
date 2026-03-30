import sharedStyles from "../portfolio-shared.module.css";
import styles from "./portfolio-services.module.css";

type Service = {
  title: string;
  description: string;
};

type PortfolioServicesProps = {
  isPageReady: boolean;
  services: readonly Service[];
};

export function PortfolioServices({ isPageReady, services }: PortfolioServicesProps) {
  return (
    <section
      className={isPageReady ? styles.servicesSectionEntered : styles.servicesSection}
      id="servicos"
    >
      <div className={sharedStyles.sectionHeading}>
        <span className={sharedStyles.eyebrow}>Serviços</span>
        <h2>Direção visual, interface e operação tratadas como um único produto.</h2>
        <p>
          Não se trata apenas de estética. É sobre construir um sistema digital que comunica bem,
          funciona corretamente e continua sustentável após o lançamento.
        </p>
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
