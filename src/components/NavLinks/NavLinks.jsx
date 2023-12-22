import styles from "./NavLinks.module.scss";
import Container from "UI/Container/Container";
import { HiHome } from "react-icons/hi";
import { HiRocketLaunch, HiPlay } from "react-icons/hi2";
import LinkEl from "UI/LinkEl/LinkEl";
import { Link } from "react-router-dom";
import { useUser } from "hooks/useUser";
import { images } from "assets/index";

function ParentNavLinks() {
  const { user } = useUser();

  return (
    <Container variation="md">
      <div className={styles["parent-nav-links"]}>
        <div>
          <Link to="/">
            <img src={images.logo.logo} alt="main" />
          </Link>
        </div>
        <div className={styles["parent-nav-links__container"]}>
          <LinkEl type="link" icon={<HiHome />} to="/workshops">
            workshops
          </LinkEl>
          {user?.user_metadata?.userType === "Parent" && (
            <>
              <LinkEl type="link" icon={<HiRocketLaunch />} to="/games">
                games
              </LinkEl>
              <LinkEl type="link" icon={<HiPlay />} to="/videos">
                videos
              </LinkEl>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

export default ParentNavLinks;
