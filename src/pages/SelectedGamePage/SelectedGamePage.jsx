import Container from "UI/Container/Container";
import ContentList from "layouts/ContentSection/ContentList/ContentList";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import styles from "./SelectedGamePage.module.scss";
import { useGetGames } from "hooks/useGetGames";

function SelectedGamePage() {
  const { src } = useParams();
  const { games, isPending } = useGetGames();

  const relatedVideos = games?.filter((item) => item?.src !== src).slice(0, 2);

  console.log("relatedVideos", relatedVideos);

  function handleOnEndVideo() {
    console.log("ended");
  }

  const opts = {
    width: "650",
    height: "400",
    playerVars: {
      origin: "'https://localhost:3000'",
      autoplay: 1,
      playsinline: 1,
    },
  };

  if (isPending) return <PagesSpinner />;

  if (!src) return;

  return (
    <>
      <div className={styles["selected-game-page"]}>
        <Container variation="bg">
          <div className="mb-[14rem] flex justify-between ">
            <YouTube videoId={src} opts={opts} onEnd={handleOnEndVideo} />
            <ContentList imgSize="small" data={relatedVideos} />
          </div>
          <ContentList imgSize="big" data={games} />
        </Container>
      </div>
    </>
  );
}

export default SelectedGamePage;
