import styles from "../Header/Header.module.css";
import NavBar from "../Nav/Nav";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">EVG Translations</Link>
      </h1>
      <NavBar />
    </header>
  );
}

export default Header;
