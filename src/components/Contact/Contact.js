import styles from "../Contact/Contact.module.css";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import photo from "../../assets/contact.JPG";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactText}>
        <h2>Get in touch</h2>
        <p>
          Don’t hesitate to get in touch for more information on my services or
          to get a no-obligation quote. Send me an email to:
          <br></br>
          <br></br>
          <strong>xxx@outlook.co.uk</strong>
          <br></br>
          <br></br>
          My usual working hours are 9.00am - 5.00pm UK time.
          <br></br>
          <br></br>
          You can also follow me on LinkedIn and Twitter/X using the links
          below.
          <br></br>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            to="https://www.linkedin.com/in/elizabeth-v-gardiner/"
          >
            <img
              alt="LinkedIn logo"
              className={styles.socials}
              src={linkedin}
            ></img>
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            to="https://twitter.com/EVGTranslations"
          >
            <img
              alt="Twitter/X logo"
              className={styles.socials}
              src={twitter}
            ></img>
          </Link>
        </p>
      </div>
      <div className={styles.contactImg}>
        <img
          alt="Elizabeth is standing in the garden and smiling at the camera."
          src={photo}
        ></img>
      </div>
    </section>
  );
}

export default Contact;
