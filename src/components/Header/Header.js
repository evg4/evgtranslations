import styles from "../Header/Header.module.css";
import NavBar from "../Nav/Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles.notice}>
        <h2>NOTICE</h2>
        <h3>
          From Februray 2024 I am no longer working as a translator, however I
          am keeping this website live for my coding portfolio. I have redacted
          my email address as it is no longer being monitored, but otherwise the
          website is unchanged.
        </h3>
      </div>
      <header className={styles.header}>
        <h1>
          <Link to="/">EVG Translations</Link>
        </h1>
        <NavBar />
      </header>
    </>
  );
}

export default Header;
