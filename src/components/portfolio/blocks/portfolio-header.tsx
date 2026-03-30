import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../portfolio-shared.module.css";
import styles from "./portfolio-header.module.css";

type PortfolioHeaderProps = {
  activeSection: string;
  onNavClick: (hash: "#servicos" | "#projetos" | "#contato") => void;
};

export function PortfolioHeader({ activeSection, onNavClick }: PortfolioHeaderProps) {
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
          Serviços
        </a>
        <a
          className={activeSection === "#projetos" ? styles.navLinkActive : styles.navLink}
          href="#projetos"
          onClick={() => onNavClick("#projetos")}
        >
          Projetos
        </a>
        <a
          className={activeSection === "#contato" ? styles.navLinkActive : styles.navLink}
          href="#contato"
          onClick={() => onNavClick("#contato")}
        >
          Contato
        </a>
      </nav>

      <div className={styles.headerActions}>
        <Link className={`${sharedStyles.buttonBase} ${styles.headerSecondaryCta}`} href="#contato">
          Falar comigo
        </Link>
        <Link className={`${sharedStyles.buttonBase} ${styles.headerPrimaryCta}`} href="#projetos">
          Ver projetos
        </Link>
      </div>
    </header>
  );
}
