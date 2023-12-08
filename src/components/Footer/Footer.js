import styles from "../Footer/Footer.module.css";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import CIOL from "../../assets/member-logo-mcil.png";
import ITI from "../../assets/ITI Affiliate-logo.png";
import Trados from "../../assets/trados-badges-web-sdl-150x100-body.jpg";
import Trados2 from "../../assets/trados-badges-web-sdl-250x170-body.jpg";

function Footer() {
  return (
    <footer>
      <div className={styles.footerDiv}>
        <h3>EVG Translations</h3>
        <p>Translations by Elizabeth Gardiner</p>
        <img className={styles.socials} src={linkedin}></img>
        <img className={styles.socials} src={twitter}></img>
      </div>
      <div className={styles.footerDiv}>
        <h3>Useful links</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>About</li>
          <li className={styles.li}>Services and Specialisms</li>
          <li className={styles.li}>How I Work</li>
        </ul>
      </div>
      <div className={styles.footerDiv}>
        <h3>Get in touch</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>Contact</li>
        </ul>
      </div>
      <div className={styles.badgeDiv}>
        <img className={styles.badge} src={CIOL}></img>
        <img className={styles.badge} src={ITI}></img>
        <img className={styles.badge} src={Trados2}></img>
      </div>
    </footer>
  );
}

export default Footer;
