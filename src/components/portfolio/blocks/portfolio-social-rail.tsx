import { INSTAGRAM_URL } from "../portfolio-home-page.data";
import { InstagramIcon } from "../ui/instagram-icon";
import styles from "./portfolio-social-rail.module.css";

type PortfolioSocialRailProps = {
  instagramLabel: string;
  socialLabel: string;
};

export function PortfolioSocialRail({ instagramLabel, socialLabel }: PortfolioSocialRailProps) {
  return (
    <aside aria-label={socialLabel} className={styles.socialRail}>
      <a
        aria-label={instagramLabel}
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
