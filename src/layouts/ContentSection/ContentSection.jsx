import Container from "UI/Container/Container";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import styles from "./ContentSection.module.scss";
import ContentList from "../../components/ContentList/ContentList";

function ContentSection({ data, isPending }) {
  const _data = [
    {
      id: "1",
      type: "games",
      thumbnail:
        "https://www.mobtada.com/resize?src=uploads/images/2023/02/16762963820.jpg&w=750&h=450&zc=0&q=70",
      src: "https://www.mobtada.com/resize?src=uploads/images/2023/02/16762963820.jpg&w=750&h=450&zc=0&q=70",
    },
    {
      id: "2",
      type: "videos",
      thumbnail:
        "https://www.mobtada.com/resize?src=uploads/images/2023/02/16762963820.jpg&w=750&h=450&zc=0&q=70",
      src: "https://www.mobtada.com/resize?src=uploads/images/2023/02/16762963820.jpg&w=750&h=450&zc=0&q=70",
    },
  ];
  return (
    <section className={styles["content-section"]}>
      <Container variation="bg">
        <span className={styles["overlay"]}>&nbsp;</span>

        {isPending ? (
          <PagesSpinner />
        ) : (
          <ContentList imgSize="big" data={_data} />
        )}
      </Container>
    </section>
  );
}

export default ContentSection;
