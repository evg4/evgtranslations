import styles from "../Menu/Menu.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Menu() {
  const [menuDisplay, setMenuDisplay] = useState("none");

  function toggleMenu() {
    if (menuDisplay === "none") {
      setMenuDisplay("block");
    } else {
      setMenuDisplay("none");
    }
    console.log("testing");
  }

  function hideMenu() {
    setMenuDisplay("none");
  }

  const navigate = useNavigate();
  function handleClick(e) {
    navigate(e.target.id);
    hideMenu();
  }

  return (
    <div className={styles.menu}>
      <p onClick={toggleMenu}>Menu ≡</p>
      <div style={{ display: menuDisplay }}>
        <ul>
          <li id="/" onClick={handleClick}>
            Home
          </li>
          <li id="/about" onClick={handleClick}>
            About
          </li>
          <li id="/services-and-specialisms" onClick={handleClick}>
            Services and specialisms
          </li>
          <li id="/how-i-work" onClick={handleClick}>
            How I work
          </li>
          <li id="/contact" onClick={handleClick}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
