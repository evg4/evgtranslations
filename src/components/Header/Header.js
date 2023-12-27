import styles from "../Header/Header.module.css";
import NavBar from "../Nav/Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">EVG Translations</Link>
      </h1>
      <NavBar />
    </header>
  );
}

export default Header;
