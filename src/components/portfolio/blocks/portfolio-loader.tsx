import styles from "./portfolio-loader.module.css";

export function PortfolioLoader() {
  return (
    <div aria-hidden="true" className={styles.loaderOverlay}>
      <div className={styles.loaderMark}>
        <span className={styles.loaderLogo} />
        <span>DaBi Tech</span>
      </div>
    </div>
  );
}
