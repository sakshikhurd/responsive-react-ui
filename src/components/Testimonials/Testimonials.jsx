import styles from "./Testimonials.module.css";

import googleLogo from "../../assets/google.png";
import fiveStars from "../../assets/fivestar.png";

import rituImg from "../../assets/ritu.png";
import preranaImg from "../../assets/prerna.png";
import umeshImg from "../../assets/umesh.png";

const reviews = [
  {
    text: "I had a fantastic experience with Brickfolio, largely due to Himanshu kumar. He was clear in explaining the next steps of the bank procedure and kept me updated about the referral bonus until I received it. His professionalism and support made the process much smoother. Highly recommend!",
    name: "Ritu sharma",
    image: rituImg,
    time: "3 weeks ago",
  },
  {
    text: "I have a good experience with Brickfolio abd specially would like to thank Chirag for helping us at each step to buy our home. He was polite and very sincere towards resolving the issues whatever we had during search of the property. He was always one call away to deal with any of our concerns. Highly recommend",
    name: "PRERANA CHAVAN",
    image: preranaImg,
    time: "2 weeks ago",
  },
  {
    text: "We had a good experience with Brickfolio. All team members like Onkar, Nipun, Saswata hold very good information about the market. They are very polite and ready for resolving the issues whatever we had during search of the property. Highly recommended!",
    name: "umesh agrawal",
    image: umeshImg,
    time: "",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.inner}>
        <div className={styles.ratingBlock}>
          <h2>Testimonials</h2>

          <div className={styles.ratingCard}>
            <div className={styles.scoreBox}>
              <div className={styles.score}>4.7</div>
              <img className={styles.bigStars} src={fiveStars} alt="5 star rating" />
            </div>

            <div className={styles.googleBox}>
              <div className={styles.googleTitle}>Google</div>
              <div className={styles.googleSub}>average rating</div>
              <img className={styles.googleLogo} src={googleLogo} alt="Google" />
            </div>
          </div>
        </div>

        <div className={styles.reviewCards}>
          {reviews.map((review) => (
            <article className={styles.reviewCard} key={review.name}>
              <p>{review.text}</p>

              <div className={styles.reviewer}>
                <img className={styles.avatar} src={review.image} alt={review.name} />

                <div className={styles.reviewerInfo}>
                  <h3>{review.name}</h3>

                  <div className={styles.reviewStarsRow}>
                    <img src={fiveStars} alt="5 star rating" />
                    {review.time && <span>{review.time}</span>}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}