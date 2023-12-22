import Nav from "layouts/Nav/Nav";
import NavLinks from "components/NavLinks/NavLinks";
import Footer from "layouts/Footer/Footer";
import { Outlet } from "react-router-dom";

function LandingPageLayout() {
  return (
    <div>
      <Nav />
      <NavLinks />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
