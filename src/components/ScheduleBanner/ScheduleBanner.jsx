import styles from "./ScheduleBanner.module.css";

import bannerBg from "../../assets/schedule-banner-bg.png";
import priceImage from "../../assets/price-99.png";

export default function ScheduleBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <img
          className={styles.bannerImage}
          src={bannerBg}
          alt=""
          aria-hidden="true"
        />

        <div className={styles.content}>
          <img className={styles.priceImage} src={priceImage} alt="₹99" />

          <button className={styles.button} type="button">
            Schedule Now
          </button>
        </div>
      </div>
    </section>
  );
}