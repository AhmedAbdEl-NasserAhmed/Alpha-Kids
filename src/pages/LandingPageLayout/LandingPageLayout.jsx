import Nav from "layouts/Nav/Nav";
import NavLinks from "components/NavLinks/NavLinks";
import Footer from "layouts/Footer/Footer";
import { Outlet } from "react-router-dom";
import ActiveChildPopup from "Features/ActiveChild/ActiveChildPopup/ActiveChildPopup";

function LandingPageLayout() {
  return (
    <div>
      <Nav />
      <NavLinks />
      <ActiveChildPopup />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
