import styles from "../Services/Services.module.css";
import { services } from "../../data/services";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className={styles.servicesSection}>
      <h2>Services</h2>
      <div className={styles.services}>
        {services.map((service) => {
          return (
            <div className={styles.service}>
              <h3>{service.title}</h3>
              <p>
                {service.text}
                <Link to="/how-i-work">{service.link}</Link>
              </p>
            </div>
          );
        })}
      </div>
      <Link className={styles.cta} to="/contact">
        Contact me for more details
      </Link>{" "}
    </section>
  );
}

export default Services;
