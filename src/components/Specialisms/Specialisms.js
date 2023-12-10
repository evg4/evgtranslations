import styles from "../Specialisms/Specialisms.module.css";
import { specialisms } from "../../data/specialisms";
import { Link } from "react-router-dom";

function Specialisms() {
  return (
    <section className={styles.specialismsSection}>
      <h2>Specialisms</h2>
      <div className={styles.specialisms}>
        {specialisms.map((specialism) => {
          return (
            <div className={styles.specialism}>
              <h3>{specialism.title}</h3>
              <p>{specialism.text}</p>
            </div>
          );
        })}
      </div>
      <Link className={styles.cta} to="/contact">
        Contact me for more details
      </Link>{" "}
    </section>
  );
}

export default Specialisms;
