import styles from "../HomePage/HomePage.module.css";
import Intro from "../Intro/Intro";
import WhyMe from "../WhyMe/WhyMe";
import Testimonials from "../Testimonials/Testimonials";

function HomePage() {
  return (
    <div>
      <Intro />
      <WhyMe />
      <Testimonials />
    </div>
  );
}

export default HomePage;
