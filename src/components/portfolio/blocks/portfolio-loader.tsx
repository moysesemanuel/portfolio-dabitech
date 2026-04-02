import { DaBiTechLogo } from "@/components/shared/dabi-tech-logo";
import styles from "./portfolio-loader.module.css";

export function PortfolioLoader() {
  return (
    <div aria-hidden="true" className={styles.loaderOverlay}>
      <div className={styles.loaderStage}>
        <div className={styles.scanFrame}>
          <div className={styles.scanRing} />
          <div className={styles.scanGlow} />
        </div>

        <div className={styles.loaderMark}>
          <div className={styles.logoWrap}>
            <DaBiTechLogo className={styles.loaderLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}
