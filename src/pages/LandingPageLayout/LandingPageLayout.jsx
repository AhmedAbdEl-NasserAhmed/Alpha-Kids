import ParentNav from "layouts/Nav/Nav";
import ParentNavLinks from "components/NavLinks/NavLinks";
import Footer from "layouts/Footer/Footer";
import { Outlet } from "react-router-dom";

function LandingPageLayout() {
  return (
    <div>
      <ParentNav />
      <ParentNavLinks />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
