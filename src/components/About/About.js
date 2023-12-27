import styles from "../About/About.module.css";
import { Link } from "react-router-dom";
import photo from "../../assets/about.JPG";

function About() {
  return (
    <section>
      <div className={styles.aboutSection}>
        <div className={styles.aboutText}>
          <h2>About me</h2>

          <p>
            Hi! I’m Elizabeth, the face behind EVG Translations. I’m a qualified
            linguist offering translation and proofreading services from German,
            Spanish and Italian into English. <br></br>
            <br></br>My interest in languages began at the age of 10 when I got
            through to the national finals of a language competition that saw me
            learn German, Thai and Swahili to a beginner’s level. The experience
            whet my appetite for language learning, and I soon developed a love
            for the logic of <strong>German</strong>, closely followed by{" "}
            <strong>Spanish</strong>. After studying both of those to degree
            level at the University of Southampton, I added{" "}
            <strong>Italian</strong> to my repertoire through evening classes,
            self-study and weekly language exchanges on zoom. <br></br>
            <br></br>After graduating, I began a job as a{" "}
            <strong>
              Translation Project Manager at a UK-based translation agency
            </strong>
            , where I worked for over 3 years. This gave me valuable insight
            into the translation industry as a whole, but especially the
            med/pharm industry, which is one of my specialisms today. I also
            held the additional role of Mentor in my final year of work, a
            rewarding task which involved training and supporting new members of
            staff, and helped to edit the company’s Christmas newsletter. I like
            to keep busy!<br></br>
            <br></br> I then spent 9 months living and working in Germany, where
            I began translating on a voluntary basis for various charities and
            organisations, before finally pursuing a full-time freelance career
            when I returned to England in 2021.<br></br>
            <br></br> My specialisms represent my passions, values and
            experience: like many linguists, I enjoy travelling and experiencing
            new cultures, so will happily accept any text in the{" "}
            <strong>travel & tourism</strong> sector, especially anything
            relating to <strong>eco-tourism</strong> or{" "}
            <strong>sustainability</strong>. I love to unleash my creative side
            on <strong>marketing & advertising</strong> projects, and continue
            to take on <strong>clinical trial documentation</strong> thanks to
            my background in the medical & pharmaceutical field. Among my end
            clients are government agencies, an Italian fashion brand, a German
            automotive company, a social media platform, and high-end hotel
            chains. You can{" "}
            <Link to="/services-and-specialisms">
              read more about my specialisms and services here
            </Link>
            . <br></br>
            <br></br>I like to keep learning and stay up-to-date with the latest
            in my industry, so I carry out regular CPD (continuous professional
            development) activities, from formal webinars to self-guided study.
            In the 2022/23 session I exceeded the ITI’s target of 30 hours of
            CPD per year, and am aiming to do the same next time round!{" "}
            <br></br>
            <br></br>When I’m not working you can usually find me keeping active
            with some salsa dancing, volunteering for Girlguiding, or coding (I
            built this website myself!).<br></br>
            <br></br>If you would like to know more about working with me, want
            to see a copy of my privacy policy, or just want to chat, you can{" "}
            <Link to="/contact">contact me</Link>.
          </p>
        </div>
        <div className={styles.aboutImg}>
          <img
            alt="A photo of Elizabeth standing in front of a green hedge. She is smiling at the camera."
            src={photo}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default About;
