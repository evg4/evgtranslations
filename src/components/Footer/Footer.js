import styles from "../Footer/Footer.module.css";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import CIOL from "../../assets/member-logo-mcil.png";
import ITI from "../../assets/ITI Affiliate-logo.png";
import Trados2 from "../../assets/trados-badges-web-sdl-250x170-body.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className={styles.footerDiv}>
        <h3>
          <Link to="/">EVG Translations</Link>
        </h3>
        <p>Translations by Elizabeth Gardiner</p>
        <br></br>
        <p className={styles.coded}>Website coded by Elizabeth Gardiner</p>
      </div>
      <div className={styles.footerDiv}>
        <h3>Useful links</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.li}>
            <Link to="/services-and-specialisms">Services and Specialisms</Link>
          </li>
          <li className={styles.li}>
            <Link to="/how-i-work">How I Work</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerDiv}>
        <h3>Get in touch</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <br></br>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/elizabeth-v-gardiner/"
        >
          <img className={styles.socials} src={linkedin}></img>
        </a>
        <a target="_blank" href="https://twitter.com/EVGTranslations">
          <img className={styles.socials} src={twitter}></img>
        </a>
      </div>
      <div className={styles.badgeDiv}>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          to="https://www.ciol.org.uk/member-check/profile/65213/21294"
        >
          <img className={styles.badge} src={CIOL}></img>
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.iti.org.uk/find-professional-translator-interpreter/member-check/individual-member-check.html?q=Elizabeth+Gardiner"
        >
          <img className={styles.badge} src={ITI}></img>
        </Link>
        <img className={styles.badge} src={Trados2}></img>
      </div>
    </footer>
  );
}

export default Footer;
