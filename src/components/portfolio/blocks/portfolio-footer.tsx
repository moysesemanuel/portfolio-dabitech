"use client";

import { FormEvent, useState } from "react";
import styles from "./portfolio-footer.module.css";

type PortfolioFooterProps = {
  isPageReady: boolean;
};

export function PortfolioFooter({ isPageReady }: PortfolioFooterProps) {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return;
    }

    const subject = encodeURIComponent("Newsletter DaBi Tech");
    const body = encodeURIComponent(`Quero entrar na newsletter da DaBi Tech.\n\nE-mail: ${trimmedEmail}`);
    window.location.href = `mailto:dabitech.ds@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className={isPageReady ? styles.footerEntered : styles.footer}>
      <div className={styles.footerBrand}>
        <span>DaBi Tech - Digital Solutions</span>
        <span>Projetos digitais para marcas que precisam parecer maiores, mais fortes e mais profissionais.</span>
      </div>

      <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
        <label className={styles.newsletterLabel} htmlFor="newsletter-email">
          Newsletter
        </label>
        <div className={styles.newsletterControls}>
          <input
            className={styles.newsletterInput}
            id="newsletter-email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Seu melhor e-mail"
            type="email"
            value={email}
          />
          <button className={styles.newsletterButton} type="submit">
            Assinar
          </button>
        </div>
      </form>
    </footer>
  );
}
