import { INSTAGRAM_URL } from "../portfolio-home-page.data";
import { InstagramIcon } from "../ui/instagram-icon";
import styles from "./portfolio-social-rail.module.css";

export function PortfolioSocialRail() {
  return (
    <aside aria-label="Redes sociais" className={styles.socialRail}>
      <a
        aria-label="Instagram DaBi Tech"
        className={styles.socialRailLink}
        href={INSTAGRAM_URL}
        rel="noreferrer"
        target="_blank"
      >
        <InstagramIcon />
      </a>
    </aside>
  );
}
