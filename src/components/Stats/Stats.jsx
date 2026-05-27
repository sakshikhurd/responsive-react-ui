import React from "react";
import styles from "./Stats.module.css";

import buyersIcon from "../../assets/stats-icon-1.png";
import ratingIcon from "../../assets/stats-icon-2.png";
import expertIcon from "../../assets/stats-icon-3.png";

const Stats = () => {
  const stats = [
    {
      icon: buyersIcon,
      value: "718,000+",
      label: "Happy Home Buyers",
    },
    {
      icon: ratingIcon,
      value: "4.7/5",
      label: "Avg Ratings",
    },
    {
      icon: expertIcon,
      value: "100+",
      label: "Property Expert",
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>
            Numbers that speak <br />
            for themselves
          </h2>
        </div>

        <div className={styles.statsCards}>
          {stats.map((item, index) => (
            <div className={styles.statsCard} key={index}>
              <img src={item.icon} alt="" className={styles.icon} />

              <h3 className={styles.value}>{item.value}</h3>

              <p className={styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;