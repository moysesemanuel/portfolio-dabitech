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
        <h2>Não é só sobre ter um site bonito. É sobre fazer o negócio parecer mais pronto.</h2>
        <p>
          Cada projeto é pensado para melhorar como sua marca é percebida, como sua operação
          funciona e como o cliente se sente ao entrar em contato com você.
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
