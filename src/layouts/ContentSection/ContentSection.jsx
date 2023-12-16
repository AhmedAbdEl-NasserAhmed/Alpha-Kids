import Container from "UI/Container/Container";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import styles from "./ContentSection.module.scss";
import ContentList from "./ContentList/ContentList";

function ContentSection({ data, isPending }) {
  return (
    <section className={styles["content-section"]}>
      <Container variation="bg">
        <span className={styles["overlay"]}>&nbsp;</span>

        {isPending ? (
          <PagesSpinner />
        ) : (
          <ContentList imgSize="big" data={data} />
        )}
      </Container>
    </section>
  );
}

export default ContentSection;
