import Link from "next/link";
import sharedStyles from "../portfolio-shared.module.css";
import styles from "./portfolio-contact.module.css";

type PortfolioContactProps = {
  isPageReady: boolean;
};

export function PortfolioContact({ isPageReady }: PortfolioContactProps) {
  return (
    <section
      className={isPageReady ? styles.contactSectionEntered : styles.contactSection}
      id="contato"
    >
      <div className={styles.contactCopy}>
        <span className={sharedStyles.eyebrow}>Contato</span>
        <h2>Vamos tirar sua ideia do papel.</h2>
        <p>Se fizer sentido para o seu negócio, eu desenvolvo.</p>
        <p>
          Transformo sua necessidade em um site institucional, sistema interno ou produto web com
          visual consistente e operação alinhada ao momento do projeto.
        </p>
      </div>

      <div className={styles.contactActions}>
        <a className={`${sharedStyles.buttonBase} ${styles.contactPrimaryCta}`} href="mailto:dabitech.ds@gmail.com">
          dabitech.ds@gmail.com
        </a>
        <Link
          className={`${sharedStyles.buttonBase} ${styles.contactSecondaryCta}`}
          href="https://wa.me/5541920038570"
          rel="noreferrer"
          target="_blank"
        >
          Orçamento no WhatsApp
        </Link>
      </div>
    </section>
  );
}
