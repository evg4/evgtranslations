import styles from "../Nav/Nav.module.css";
import { NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";
import { useState } from "react";

function NavBar() {
  return (
    <nav>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => isActive && styles.activeNavLink}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => isActive && styles.activeNavLink}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => isActive && styles.activeNavLink}
            to="/services-and-specialisms"
          >
            Services and specialisms
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => isActive && styles.activeNavLink}
            to="/how-I-work"
          >
            How I work
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => isActive && styles.activeNavLink}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className={styles.menu}>
        <div>
          <Menu />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
