import styles from "./MoneyBackSection.module.css";

import orangePatternLeft from "../../assets/orange-pattern-left.png";
import orangePatternRight from "../../assets/orange-pattern-right.png";

export default function MoneyBackSection() {
  return (
    <section className={styles.section}>
      <img
        src={orangePatternLeft}
        alt=""
        className={`${styles.pattern} ${styles.patternLeft}`}
        aria-hidden="true"
      />

      <img
        src={orangePatternRight}
        alt=""
        className={`${styles.pattern} ${styles.patternRight}`}
        aria-hidden="true"
      />

      <div className={styles.content}>
        <h2>100% Money-Back</h2>

        <p className={styles.copy}>
          Your ₹99 ensures a dedicated consultant for your
          <br />
          one-on-one session. <strong>But here’s the best part</strong>
          <br />
          if you schedule and attend the meeting,
        </p>

        <div className={styles.refundText}>We’ll refund the full amount!</div>

        <p className={styles.winText}>It’s a win-win</p>

        <button className={styles.button} type="button">
          Book My Consultation for ₹99
        </button>
      </div>
    </section>
  );
}