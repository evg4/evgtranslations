import styles from "../WhyMe/WhyMe.module.css";
import photo1 from "../../assets/whyme.jpg";

function WhyMe() {
  return (
    <section className={styles.whySection}>
      <div>
        <img className={styles.photo} src={photo1}></img>
      </div>
      <div className={styles.whyText}>
        <h3>Why work with me?</h3>
        <ul className={styles.ul}>
          <li>
            <strong>✓ Qualified.</strong> I hold a first-class degree in German
            and Spanish Linguistic Studies from the University of Southampton,
            and am a member of the CIOL and ITI.
          </li>
          <li>
            <strong>✓ Experienced.</strong> With over 3 years of experience
            working at a UK-based translation agency, I have in-depth knowledge
            of the industry and know the pressures faced by project managers and
            the importance of prompt delivery. I’ve also lived in both Germany
            and Spain so have an awareness of important cultural aspects
            relating to the languages I translate.
          </li>
          <li>
            <strong>✓ Meticulous.</strong> All work is thoroughly researched and
            proofread; I always deliver high quality, well-formatted
            translations on or before the agreed deadline.{" "}
          </li>
        </ul>
        <p>Get in touch!</p>{" "}
        {/*replace with Link or NavLink when routing done */}
      </div>
    </section>
  );
}

export default WhyMe;
