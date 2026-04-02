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
        <h2>Se o seu projeto precisa parecer mais profissional, esse é o momento de conversar.</h2>
        <p>Atendo negócios que querem vender melhor, transmitir mais confiança e organizar sua operação digital.</p>
        <p>
          Se você quer sair de uma presença improvisada para uma solução que realmente valorize o
          que oferece, me chama e eu estruturo isso com você.
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
          Pedir orçamento no WhatsApp
        </Link>
      </div>
    </section>
  );
}
