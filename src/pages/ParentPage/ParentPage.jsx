import { images } from "../../assets/index";
import AdsSection from "layouts/AdsSection/AdsSection";
import ContentSection from "layouts/ContentSection/ContentSection";
import ServicesSection from "layouts/ServicesSection/ServicesSection";
import Ad from "UI/Ad/Ad";
import { useGetVideos } from "hooks/useGetVideos";
import { useGetGames } from "hooks/useGetGames";
import { shuffleArray } from "utils/shuffleArray";

function ParentPage() {
  const { videos } = useGetVideos();
  const { games } = useGetGames();

  const allData = videos?.concat(games);
  const newDataArray = shuffleArray(allData);

  return (
    <div>
      <AdsSection variation="yellow">
        <Ad
          size="big"
          src={images.gifs.g2}
          variation="button--1"
          text="Learn Now"
        />
        <div className="flex flex-col sm:flex-row items-center gap-[2.8rem] mt-[2rem]">
          <Ad
            size="small"
            to="/games"
            text="Play Now"
            variation="button--2"
            src={images.gifs.g3}
          />
          <Ad
            size="small"
            text="Watch Now"
            to="/videos"
            variation="button--3"
            src={images.gifs.g4}
          />
        </div>
      </AdsSection>
      <ServicesSection />
      <ContentSection data={newDataArray} />
    </div>
  );
}

export default ParentPage;
