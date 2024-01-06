import Ad from "UI/Ad/Ad";
import Container from "UI/Container/Container";
import { images } from "assets";
import { useGetWorkshops } from "hooks/useGetWorkshops";
import AdsSection from "layouts/AdsSection/AdsSection";
import styles from "./WorkshopsPage.module.scss";
import Button from "UI/Button";
import { useNavigate } from "react-router-dom";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import { useUser } from "hooks/useUser";

function Workshops() {
  const { user } = useUser();

  const { workshops, isLoading } = useGetWorkshops();

  const naviagte = useNavigate();

  const completedWorkshops = workshops?.filter(
    (workshop) => workshop.isTestDone
  );

  if (isLoading) return <PagesSpinner />;

  return (
    <div>
      <AdsSection variation="blue">
        <Ad
          size="big"
          src={images.gifs.g2}
          variation="button--1"
          text="Learn Now"
        />
      </AdsSection>

      <div className={styles["workshops"]}>
        <Container variation="bg">
          <ul className={styles["workshops__list"]}>
            {completedWorkshops?.map((workshop) => (
              <li key={workshop.id}>
                <img src={workshop.workshopImageUrl} alt="url" />
                <h2>{workshop.workshopName}</h2>
                {user?.user_metadata.userType === "Teacher" ? (
                  ""
                ) : (
                  <Button
                    onClick={() => {
                      naviagte(`/workshops/${workshop.id}`);
                    }}
                    variation="primary--2"
                  >
                    Start Learning
                  </Button>
                )}
              </li>
            ))}
          </ul>
          <span className={styles["overlay"]}></span>
        </Container>
      </div>
    </div>
  );
}

export default Workshops;
