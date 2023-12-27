import styles from "../Intro/Intro.module.css";

function Intro() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div>
          <h2>
            EVG Translations: <br></br> German, Spanish and Italian into English
          </h2>
        </div>
        <div className={styles.bannerText}>
          <h3>
            Welcome to EVG Translations, a one-woman business run by Elizabeth
            Gardiner providing translation and proofreading services from
            German, Spanish and Italian into English.
          </h3>
          <p>
            Are you an individual in need of a translation? I can offer you a
            personalised service, helping you avoid the extra costs associated
            with translation agencies whilst still providing high-quality work.{" "}
            <br></br>
            <br></br> Are you an agency looking for more freelancers? I have 3
            years of experience working in a translation agency so know what
            it’s like to be on the other side of the computer screen; I always
            deliver work on time and am happy to use your specific style guides
            or CAT tools to make the translation process run smoothly.<br></br>
            <br></br> Whatever your translation needs, keep reading to find out
            more about me and the services I offer, and please do get in touch
            for more details or a no-obligation quote.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
