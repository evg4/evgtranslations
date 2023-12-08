import styles from "../Nav/Nav.module.css";

function NavBar() {
  return (
    <nav>
      <ul className={styles.ul}>
        <li className={styles.li}>Home</li>
        <li className={styles.li}>About</li>
        <li className={styles.li}>Services and specialisms</li>
        <li className={styles.li}>How I work</li>
        <li className={styles.li}>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
