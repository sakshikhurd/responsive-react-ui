import React from "react";
import styles from "./WhyChoose.module.css";

import expertIcon from "../../assets/choose-icon-1.png";
import supportIcon from "../../assets/choose-icon-2.png";
import transparentIcon from "../../assets/choose-icon-3.png";
import resultsIcon from "../../assets/choose-icon-4.png";
import serviceIcon from "../../assets/choose-icon-5.png";
import visitsIcon from "../../assets/choose-icon-6.png";

const WhyChoose = () => {
  const features = [
    {
      icon: expertIcon,
      title: "Expert Property Consultants",
      description:
        "Experienced consultants providing tailored advice and expert guidance through every step of your real estate journey.",
    },
    {
      icon: supportIcon,
      title: "Personalised Support",
      description:
        "Personalized support to meet your unique requirements, helping you find the perfect property with precision and care.",
    },
    {
      icon: transparentIcon,
      title: "Transparent Process",
      description:
        "A fully transparent process, keeping you informed at every stage, building trust and confidence in your investment.",
    },
    {
      icon: resultsIcon,
      title: "Proven Results",
      description:
        "Proven track record with successful deals and satisfied clients, delivering reliable results for all your real estate needs.",
    },
    {
      icon: serviceIcon,
      title: "Post-Sale Service",
      description:
        "Our commitment extends beyond purchase, offering post-sale services to ensure a seamless and stress-free transition into your new home.",
    },
    {
      icon: visitsIcon,
      title: "Free Site Visits",
      description:
        "Enjoy free site visits with our team to help you make informed decisions about your dream property.",
    },
  ];

  return (
    <section className={styles.whySection}>
      <div className={styles.whyContainer}>
        <h2 className={styles.heading}>
          Why Choose <span>Brickfolio?</span>
        </h2>

        <div className={styles.featureGrid}>
          {features.map((item, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={styles.iconWrapper}>
                <img
                  src={item.icon}
                  alt=""
                  className={`${styles.icon} ${styles[`icon${index + 1}`]}`}
                />
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <p className={styles.cardDescription}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;