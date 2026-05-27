import React from "react";
import styles from "./ProgramFor.module.css";

import firstBuyerImg from "../../assets/first-time-buyers.png";
import loanImg from "../../assets/home-loan.png";
import taxImg from "../../assets/taxes-fees.png";
import confusedImg from "../../assets/new-home-buyers.png";

const ProgramFor = () => {
  const users = [
    {
      image: firstBuyerImg,
      text: "First-time home buyers who feel overwhelmed by the process.",
    },
    {
      image: loanImg,
      text: "Those confused about financing options and loan terms.",
    },
    {
      image: taxImg,
      text: "Buyers unsure about taxes, fees, and hidden costs.",
    },
    {
      image: confusedImg,
      text: "Anyone looking to buy a new home but not sure where to start.",
    },
  ];

  return (
    <section className={styles.programSection}>
      <div className={styles.programContainer}>
        <h2 className={styles.heading}>
          Who is this <br />
          <span>Consultation Program For?</span>
        </h2>

        <div className={styles.cardGrid}>
          {users.map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.image} alt="" className={styles.cardImage} />

              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFor;