import Ad from "UI/Ad/Ad";
import { images } from "assets";
import { useGetGames } from "hooks/useGetGames";
import AdsSection from "layouts/AdsSection/AdsSection";
import ContentSection from "layouts/ContentSection/ContentSection";

function GamesPage() {
  const { games, isPending } = useGetGames();

  return (
    <div>
      <AdsSection variation="yellow">
        <Ad
          size="medium"
          src={images.gifs.g5}
          variation="button--2"
          text="Play Now"
        />
      </AdsSection>
      <ContentSection isPending={isPending} data={games} />
    </div>
  );
}

export default GamesPage;
