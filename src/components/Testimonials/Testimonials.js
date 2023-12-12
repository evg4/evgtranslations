import styles from "../Testimonials/Testimonials.module.css";
import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      {testimonials.map((testimonial) => {
        return (
          <div className={styles.testimonial}>
            <p className={styles.quote}>"{testimonial.quote}"</p>
            <p className={styles.client}>{testimonial.client}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Testimonials;
