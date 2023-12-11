import styles from "../HowIWork/HowIWork.module.css";
import { steps } from "../../data/howIWork";

function HowIWork() {
  return (
    <section className={styles.stepsSection}>
      <h2>How I work</h2>
      <p>
        No matter how big or small your job, I always work through the same
        process to make sure the final translation is the best quality it can
        be. I will only accept your project if I’m 100% confident I can do a
        good job translating it, and I always proofread my work before delivery.
        Read below for more details on my translation process.
      </p>
      {steps.map((step) => {
        return (
          <details key={step.title} className={styles.step}>
            <summary>{step.title}</summary>
            <p>{step.text}</p>
          </details>
        );
      })}
    </section>
  );
}

export default HowIWork;
