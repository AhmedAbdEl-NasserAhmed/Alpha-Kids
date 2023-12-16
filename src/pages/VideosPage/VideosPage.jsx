import Ad from "UI/Ad/Ad";
import { images } from "assets";
import { useGetVideos } from "hooks/useGetVideos";
import AdsSection from "layouts/AdsSection/AdsSection";
import ContentSection from "layouts/ContentSection/ContentSection";

function VideosPage() {
  const { videos, isPending } = useGetVideos();

  return (
    <div>
      <AdsSection variation="red">
        <Ad
          size="medium"
          src={images.gifs.g6}
          variation="button--3"
          text="Watch Now"
        />
      </AdsSection>
      <ContentSection isPending={isPending} data={videos} />
    </div>
  );
}

export default VideosPage;
