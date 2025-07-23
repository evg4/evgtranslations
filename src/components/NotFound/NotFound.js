import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className={styles.notFoundSection}>
      <p>
        The page you are looking for does not exist. <br></br>
        <br></br>
        <Link to="/">Go back to home page.</Link>
      </p>
    </section>
  );
}

export default NotFound;
