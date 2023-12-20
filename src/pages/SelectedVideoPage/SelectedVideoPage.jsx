import Container from "UI/Container/Container";
import { useGetVideos } from "hooks/useGetVideos";
import ContentList from "components/ContentList/ContentList";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import styles from "./SelectedVideoPage.module.scss";
import useInsertActiveChildVideos from "hooks/useInsertActiveChildVideos";
import { useGetActiveChild } from "hooks/useGetActiveChild";

function SelectedVideoPage() {
  const { src } = useParams();

  const { data: currentActiveChild } = useGetActiveChild();

  const { videos, isPending } = useGetVideos();

  const { insertActiveChildVideos } = useInsertActiveChildVideos();

  const relatedVideos = videos?.filter((item) => item?.src !== src).slice(0, 2);

  const watchedVideo = videos?.find((video) => video.src === src);

  function handleOnEndVideo() {
    insertActiveChildVideos({
      childId: currentActiveChild[0]?.id,
      watchedVideo: watchedVideo,
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

  return (
    <>
      <div className={styles["selected-video-page"]}>
        <Container variation="bg">
          <div className="mb-[14rem] flex justify-between ">
            <YouTube videoId={src} opts={opts} onEnd={handleOnEndVideo} />
            <ContentList imgSize="small" data={relatedVideos} />
          </div>
          <ContentList imgSize="big" data={videos} />
        </Container>
      </div>
    </>
  );
}

export default SelectedVideoPage;
