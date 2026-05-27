import styles from "./Benefits.module.css";

import consultationImage from "../../assets/consultation-meeting.png";
import orangeIcon from "../../assets/orange-icon.png";

import calendarIcon from "../../assets/calendar-icon.png";
import taxIcon from "../../assets/tax-icon.png";
import loanIcon from "../../assets/loan-icon.png";
import marketIcon from "../../assets/market-icon.png";
import homeIcon from "../../assets/new-home-icon.png";

const benefits = [
  {
    text: "A personalised consultation to simplify the home-buying process.",
    icon: calendarIcon,
  },
  {
    text: "Guidance on taxes, fees, and hidden costs.",
    icon: taxIcon,
  },
  {
    text: "A clear understanding of loan options and financing plans.",
    icon: loanIcon,
  },
  {
    text: "Market analysis to help you assess property value.",
    icon: marketIcon,
  },
  {
    text: "Answers to any specific questions you have about your home-buying journey.",
    icon: homeIcon,
  },
];

export default function Benefits() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>What You’ll Get for ₹99</h2>

          <ul className={styles.list}>
            {benefits.map((benefit) => (
              <li className={styles.item} key={benefit.text}>
                <span className={styles.iconWrap}>
                  <img className={styles.orangeIcon} src={orangeIcon} alt="" />

                  <img className={styles.innerIcon} src={benefit.icon} alt="" />
                </span>

                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageWrap}>
          <img src={consultationImage} alt="Consultation meeting" />
        </div>
      </div>
    </section>
  );
}