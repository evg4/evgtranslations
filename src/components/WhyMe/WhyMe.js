import styles from "../WhyMe/WhyMe.module.css";
import photo1 from "../../assets/whyme.jpg";
import { Link } from "react-router-dom";

function WhyMe() {
  return (
    <section className={styles.whySection}>
      <div>
        <img
          alt="A photo of Elizabeth standing against a pale wall. She is smiling at the camera."
          className={styles.photo}
          src={photo1}
        ></img>
      </div>
      <div className={styles.whyText}>
        <h2>Why work with me?</h2>
        <ul className={styles.ul}>
          <li>
            <strong>✓ Qualified.</strong> I hold a first-class degree in German
            and Spanish Linguistic Studies from the University of Southampton,
            and am a member of the CIOL and ITI.
          </li>
          <li>
            <strong>✓ Experienced.</strong> With over 3 years of experience
            working at a UK-based translation agency and 2 years as a freelance
            translator, I have in-depth knowledge of the industry and know the
            pressures faced by project managers and the importance of prompt
            delivery. I’ve also lived in both Germany and Spain so have an
            awareness of important cultural aspects relating to the languages I
            translate.
          </li>
          <li>
            <strong>✓ Meticulous.</strong> All work is thoroughly researched and
            proofread; I always deliver high quality, well-formatted
            translations on or before the agreed deadline.{" "}
          </li>
        </ul>
        <Link className={styles.cta} to="/contact">
          Get in touch!
        </Link>{" "}
      </div>
    </section>
  );
}

export default WhyMe;
