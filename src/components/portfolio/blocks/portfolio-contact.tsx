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
        <h2>Se o seu produto ou serviço ainda parece menor do que realmente é, eu resolvo isso na interface.</h2>
        <p>Atendo negócios que precisam de apresentação mais forte, experiência mais madura e uma base técnica que sustente crescimento sem retrabalho.</p>
        <p>
          A conversa começa com escopo, direção visual e prioridade de negócio. Depois disso, eu
          transformo a ideia em uma entrega publicada e convincente.
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
