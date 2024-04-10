import Nav from "layouts/Nav/Nav";
import NavLinks from "components/NavLinks/NavLinks";
import Footer from "layouts/Footer/Footer";
import { Outlet } from "react-router-dom";
import ActiveChildPopup from "Features/ActiveChild/ActiveChildPopup/ActiveChildPopup";
import AnimationCharacters from "components/AnimationCharacters/AnimationCharacters";

function LandingPageLayout() {
  return (
    <>
      <Nav />
      <NavLinks />
      <AnimationCharacters />
      <ActiveChildPopup />

      <Outlet />

      <Footer />
    </>
  );
}

export default LandingPageLayout;
