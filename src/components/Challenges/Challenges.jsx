import React from "react";
import styles from "./Challenges.module.css";

import angryIcon from "../../assets/challenge-icon-1.png";
import loanIcon from "../../assets/challenge-icon-2.png";
import sadIcon from "../../assets/challenge-icon-3.png";
import thinkingIcon from "../../assets/challenge-icon-4.png";

const Challenges = () => {
  const challenges = [
    {
      icon: angryIcon,
      title: "I can’t identify the various real estate taxes and fees.",
      description:
        "Our experts will simplify all the costs, ensuring no hidden fees surprise you.",
    },
    {
      icon: loanIcon,
      title: "Confused between fixed-rate and floating-rate loans?",
      description:
        "We’ll guide you through the right financing options based on your unique needs.",
    },
    {
      icon: sadIcon,
      title: "Legal paperwork and documentation are confusing.",
      description:
        "Get help navigating legal paperwork to meet all home-buying requirements.",
    },
    {
      icon: thinkingIcon,
      title: "Unsure if you’re paying too much?",
      description:
        "Our consultants will help you assess the true market value so you don’t overpay.",
    },
  ];

  return (
    <section className={styles.challengesSection}>
      <div className={styles.challengesContainer}>
        <p className={styles.subHeading}>Overcome with Common</p>
        <h2 className={styles.heading}>Home-Buying Challenges</h2>

        <div className={styles.challengeGrid}>
          {challenges.map((item, index) => (
            <div className={styles.challengeCard} key={index}>
              <div className={styles.iconNumberGroup}>
                <div className={styles.iconCircle}>
                  <img src={item.icon} alt="" className={styles.icon} />
                </div>

                <span className={styles.numberCircle}>{index + 1}</span>
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.challengeBtn}>
          Book Your Personalized Consultation Now
        </button>
      </div>
    </section>
  );
};

export default Challenges;