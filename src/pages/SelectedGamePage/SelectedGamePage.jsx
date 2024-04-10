import Container from "UI/Container/Container";
import ContentList from "components/ContentList/ContentList";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import styles from "./SelectedGamePage.module.scss";
import { useGetGames } from "hooks/useGetGames";
import { useGetActiveChild } from "hooks/useGetActiveChild";
import useInsertActiveChildGames from "hooks/useInsertActiveChildGames";
import { useUser } from "hooks/useUser";
import { useEffect, useState } from "react";

function SelectedGamePage() {
  const [width, setWidth] = useState(window.innerWidth);

  const [height, setHeight] = useState(window.innerHeight);

  const { src } = useParams();

  const { user } = useUser();

  const { data: currentActiveChild } = useGetActiveChild();

  const { insertActiveChildGames } = useInsertActiveChildGames();

  // ----------

  const { games, isPending } = useGetGames();

  const relatedVideos = games?.filter((item) => item?.src !== src).slice(0, 2);

  const watchedGame = games?.find((game) => game.src === src);

  // ---------

  function handleOnEndVideo() {
    if (user?.user_metadata?.userType === "Teacher") return;
    insertActiveChildGames({
      childId: currentActiveChild[0]?.id,
      watchedGame: watchedGame,
    });
  }

  // ---------

  useEffect(() => {
    function upadteWindowDimensions() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWidth(width);

      setHeight(height);
    }

    window.addEventListener("resize", upadteWindowDimensions);

    return () => window.removeEventListener("resize", upadteWindowDimensions);
  }, [width]);

  // ---------

  const opts = {
    width: `${width > 870 ? "630" : "300"}`,
    height: `${height < 500 ? "300" : "350"}`,
    playerVars: {
      origin: "'https://localhost:3000'",
      autoplay: 1,
      playsinline: 1,
    },
  };

  if (isPending) return <PagesSpinner />;

  // ---------

  if (!src) return;

  return (
    <>
      <div className={styles["selected-game-page"]}>
        <Container variation="bg">
          <div className="mb-[14rem] gap-[2.5rem] flex flex-col sm:flex-row sm:justify-between justify-center items-center ">
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
