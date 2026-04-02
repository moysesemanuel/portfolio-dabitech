import styles from "./portfolio-footer.module.css";

type PortfolioFooterProps = {
  isPageReady: boolean;
};

export function PortfolioFooter({ isPageReady }: PortfolioFooterProps) {
  return (
    <footer className={isPageReady ? styles.footerEntered : styles.footer}>
      <div className={styles.footerBrand}>
        <span>DaBi Tech - Digital Solutions</span>
        <span>Projetos digitais para marcas que precisam parecer maiores, mais fortes e mais profissionais.</span>
      </div>
    </footer>
  );
}
