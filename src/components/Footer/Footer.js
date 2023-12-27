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
        <p className={styles.coded}>
          <em>Website coded by Elizabeth Gardiner</em>
        </p>
      </div>
      <div className={styles.footerDiv}>
        <h4>Useful links</h4>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services-and-specialisms">Services and Specialisms</Link>
          </li>
          <li>
            <Link to="/how-i-work">How I Work</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerDiv}>
        <h4>Get in touch</h4>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <br></br>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/elizabeth-v-gardiner/"
        >
          <img
            alt="LinkedIn logo"
            className={styles.socials}
            src={linkedin}
          ></img>
        </Link>
        <Link target="_blank" to="https://twitter.com/EVGTranslations">
          <img
            alt="Twitter/X logo"
            className={styles.socials}
            src={twitter}
          ></img>
        </Link>
      </div>
      <div className={styles.badgeDiv}>
        <img
          alt="An icon with the words 'I work with SDL Trados'"
          className={styles.badge}
          src={Trados2}
        ></img>

        <Link
          rel="noopener noreferrer"
          target="_blank"
          to="https://www.ciol.org.uk/member-check/profile/65213/21294"
        >
          <img
            alt="An icon with the words 'Chartered Institute of Linguists. MEMBER. Verify: ciol.org.uk/check'"
            className={styles.badge}
            src={CIOL}
          ></img>
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.iti.org.uk/find-professional-translator-interpreter/member-check/individual-member-check.html?q=Elizabeth+Gardiner"
        >
          <img
            alt="An icon with the words 'Affiliate member, Institute of Translation and Interpreting'"
            className={styles.badge}
            src={ITI}
          ></img>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
