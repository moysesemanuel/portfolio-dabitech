import Image from "next/image";
import Link from "next/link";
import {
  localeOptions,
  type PortfolioHeaderCopy,
  type PortfolioLocale,
} from "../portfolio-home-page.data";
import sharedStyles from "../portfolio-shared.module.css";
import styles from "./portfolio-header.module.css";

type PortfolioHeaderProps = {
  activeSection: string;
  locale: PortfolioLocale;
  onLocaleChange: (locale: PortfolioLocale) => void;
  onNavClick: (hash: "#servicos" | "#projetos" | "#contato") => void;
  copy: PortfolioHeaderCopy;
};

export function PortfolioHeader({
  activeSection,
  locale,
  onLocaleChange,
  onNavClick,
  copy,
}: PortfolioHeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#">
        <Image alt="Ícone DaBi Tech" height={48} priority src="/logo-icon.svg" width={48} />
        <div className={styles.brandCopy}>
          <strong>DaBi Tech</strong>
          <span>Digital Solutions</span>
        </div>
      </a>

      <nav className={styles.nav}>
        <a
          className={activeSection === "#servicos" ? styles.navLinkActive : styles.navLink}
          href="#servicos"
          onClick={() => onNavClick("#servicos")}
        >
          {copy.nav.services}
        </a>
        <a
          className={activeSection === "#projetos" ? styles.navLinkActive : styles.navLink}
          href="#projetos"
          onClick={() => onNavClick("#projetos")}
        >
          {copy.nav.projects}
        </a>
        <a
          className={activeSection === "#contato" ? styles.navLinkActive : styles.navLink}
          href="#contato"
          onClick={() => onNavClick("#contato")}
        >
          {copy.nav.contact}
        </a>
      </nav>

      <div className={styles.headerTools}>
        <div aria-label="Language switcher" className={styles.localeSwitch} role="group">
          {localeOptions.map((option) => (
            <button
              aria-pressed={locale === option.value}
              className={locale === option.value ? styles.localeButtonActive : styles.localeButton}
              key={option.value}
              onClick={() => onLocaleChange(option.value)}
              type="button"
            >
              <span aria-hidden="true">{option.flag}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.headerActions}>
          <Link className={`${sharedStyles.buttonBase} ${styles.headerSecondaryCta}`} href="#contato">
            {copy.secondaryCta}
          </Link>
          <Link className={`${sharedStyles.buttonBase} ${styles.headerPrimaryCta}`} href="#projetos">
            {copy.primaryCta}
          </Link>
        </div>
      </div>
    </header>
  );
}
