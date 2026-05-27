import styles from "./HeroConsultation.module.css";

import heroBg from "../../assets/hero-bg.png";
import heroPerson from "../../assets/hero-person.png";

export default function HeroConsultation() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1>
            Tired of Confusing{" "}
            <span>Home-Buying Processes?</span> Taxes, Fees, & Hidden Costs
            Holding You Back?
          </h1>

          <p>
            In this consultation, <strong>Gain Expert Guidance</strong> to make
            informed <strong>Home Buying Decisions</strong>, avoid hidden costs,
            and <strong>Buy Confidently.</strong>
          </p>

          <button type="button">Book Now for ₹99</button>
        </div>

        <div className={styles.imageArea}>
          <img src={heroPerson} alt="Thinking home buyer" />
        </div>
      </div>
    </section>
  );
}