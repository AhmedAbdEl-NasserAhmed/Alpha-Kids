import Container from "UI/Container/Container";
import styles from "./ParentDashboard.module.scss";
import { images } from "assets";
import { HiPlusSm } from "react-icons/hi";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import { useGetChildren } from "hooks/useGetChildren";
import ParentChildList from "../ParentChildList/ParentChildList";
import { useGetActiveChildVideos } from "hooks/useGetActiveChildVideos";
import { useGetActiveChildGames } from "hooks/useGetActiveChildGames";
import ActiveChildContentList from "components/ActiveChildContentList/ActiveChildContentList";

function ParentDashboard({ children, setShowModal }) {
  const { data, isPending } = useGetChildren();
  const { data: activeVideos, isPending: isGettingActiveVideos } =
    useGetActiveChildVideos();

  const { data: activeGames, isPending: isGettingActiveGames } =
    useGetActiveChildGames();

  if (isPending || isGettingActiveVideos || isGettingActiveGames)
    return <PagesSpinner />;

  return (
    <Container variation="bg">
      <div className={styles.dashboard}>
        <h2 className={styles["dashboard__heading"]}>Dashboard</h2>

        <div className="flex items-center gap-[2rem] flex-wrap">
          <div
            className="flex flex-col items-center gap-[1rem] cursor-pointer relative"
            onClick={setShowModal.bind(null, true)}
          >
            <img
              className={styles["dashboard__profile-img"]}
              src={images.profiles.default}
              alt=""
            />
            <p className="font-semibold text-[1.2rem] tracking-[1px]">
              Add a child
            </p>
            <span className={styles["dashboard__profile-img--icon"]}>
              <HiPlusSm />
            </span>
          </div>
          <ParentChildList childrenList={data} />
        </div>
        <div>
          <ActiveChildContentList
            link="videos"
            heading="Watched Videos"
            data={activeVideos}
          />
          <ActiveChildContentList
            link="games"
            heading="Played Games"
            data={activeGames}
          />
        </div>
        {children}
      </div>
    </Container>
  );
}

export default ParentDashboard;
