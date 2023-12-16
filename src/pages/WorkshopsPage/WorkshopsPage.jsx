import Ad from "UI/Ad/Ad";
import { images } from "assets";
import AdsSection from "layouts/AdsSection/AdsSection";

function Workshops() {
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
    </div>
  );
}

export default Workshops;
