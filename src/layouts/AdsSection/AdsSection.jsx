import Container from "UI/Container/Container";
import styles from "./AdsSection.module.scss";

function AdsSection({ children, variation }) {
  const overlayStyles = {
    yellow: "bg-amber-300 opacity-70",
    red: "bg-red-500 opacity-90",
    blue: "bg-blue-500 opacity-80 ",
  };

  return (
    <section className={styles["ads-section"]}>
      <Container variation="bg">
        <span
          className={`${styles["ads-section__overlay"]} ${overlayStyles[variation]} `}
        ></span>
        {children}
      </Container>
    </section>
  );
}

export default AdsSection;
