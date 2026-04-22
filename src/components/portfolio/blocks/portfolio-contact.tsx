import Link from "next/link";
import type { PortfolioContactCopy } from "../portfolio-home-page.data";
import sharedStyles from "../portfolio-shared.module.css";
import styles from "./portfolio-contact.module.css";

type PortfolioContactProps = {
  copy: PortfolioContactCopy;
  isPageReady: boolean;
};

export function PortfolioContact({ copy, isPageReady }: PortfolioContactProps) {
  return (
    <section
      className={isPageReady ? styles.contactSectionEntered : styles.contactSection}
      id="contato"
    >
      <div className={styles.contactCopy}>
        <span className={sharedStyles.eyebrow}>{copy.eyebrow}</span>
        <h2>{copy.title}</h2>
        {copy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
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
          {copy.whatsappCta}
        </Link>
      </div>
    </section>
  );
}
