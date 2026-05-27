import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What will I learn during the consultation?",
    answer:
      "You’ll get a detailed understanding of taxes, fees, loan options, property values, and the home-buying process tailored to your needs.",
  },
  {
    question: "How long is the consultation?",
    answer:
      "The consultation is designed to be clear, focused, and helpful so you can get answers without wasting time.",
  },
  {
    question: "How do I schedule the consultation?",
    answer:
      "After booking, our team will connect with you and help schedule a convenient consultation slot.",
  },
  {
    question: "What happens if I don’t find the consultation helpful?",
    answer:
      "If you schedule and attend the meeting, your ₹99 amount will be refunded as promised.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.leftCard}>
          <h2>Still Not Convinced?</h2>

          <p>
            You’ve read the whole page. Why not take the next step and meet with
            us directly in the consultation? For just ₹99, you’ve got nothing to
            lose and everything to gain!
          </p>

          <button type="button">Book Now 99rs</button>
        </div>

        <div className={styles.rightCard}>
          <h3>FAQs</h3>

          <div className={styles.accordion}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div className={styles.item} key={faq.question}>
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span>{isOpen ? "⌃" : "⌄"}</span>
                  </button>

                  {isOpen && <p className={styles.answer}>{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}