"use client";

import { FormEvent, useState } from "react";
import type { PortfolioFooterCopy } from "../portfolio-home-page.data";
import styles from "./portfolio-footer.module.css";

type PortfolioFooterProps = {
  copy: PortfolioFooterCopy;
  isPageReady: boolean;
};

export function PortfolioFooter({ copy, isPageReady }: PortfolioFooterProps) {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return;
    }

    const subject = encodeURIComponent(copy.newsletterSubject);
    const body = encodeURIComponent(`${copy.newsletterBody}\n\nE-mail: ${trimmedEmail}`);
    window.location.href = `mailto:dabitech.ds@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className={isPageReady ? styles.footerEntered : styles.footer}>
      <div className={styles.footerBrand}>
        <span>DaBi Tech - Digital Solutions</span>
        <span>{copy.brand}</span>
      </div>

      <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
        <label className={styles.newsletterLabel} htmlFor="newsletter-email">
          {copy.newsletterLabel}
        </label>
        <div className={styles.newsletterControls}>
          <input
            className={styles.newsletterInput}
            id="newsletter-email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder={copy.newsletterPlaceholder}
            type="email"
            value={email}
          />
          <button className={styles.newsletterButton} type="submit">
            {copy.newsletterButton}
          </button>
        </div>
      </form>
    </footer>
  );
}
