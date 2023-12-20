import Container from "UI/Container/Container";
import ContentList from "components/ContentList/ContentList";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import styles from "./SelectedGamePage.module.scss";
import { useGetGames } from "hooks/useGetGames";
import { useGetActiveChild } from "hooks/useGetActiveChild";
import useInsertActiveChildGames from "hooks/useInsertActiveChildGames";

function SelectedGamePage() {
  const { src } = useParams();
  const { games, isPending } = useGetGames();

  const relatedVideos = games?.filter((item) => item?.src !== src).slice(0, 2);
  const watchedGame = games?.find((game) => game.src === src);

  const { data: currentActiveChild } = useGetActiveChild();

  const { insertActiveChildGames } = useInsertActiveChildGames();

  function handleOnEndVideo() {
    insertActiveChildGames({
      childId: currentActiveChild[0]?.id,
      watchedGame: watchedGame,
    });
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
