import Container from "UI/Container/Container";
import styles from "./ServicesSection.module.scss";
import { images } from "../../assets/index";

console.log(images);

function ServicesSection() {
  return (
    <section className={styles["services-section"]}>
      <Container variation="bg">
        <h2 className="text-4xl">What We Provide ?</h2>
        <div className={styles["services-section__services"]}>
          <div className={styles["services-section__service"]}>
            <img src={images.services.s1} alt="" />
            <h2>Workshops</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className={styles["services-section__service"]}>
            <img src={images.services.s2} alt="" />
            <h2>Videos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className={styles["services-section__service"]}>
            <img src={images.services.s3} alt="" />
            <h2>Games</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
