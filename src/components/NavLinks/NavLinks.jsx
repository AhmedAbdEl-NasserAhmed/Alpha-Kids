import styles from "./NavLinks.module.scss";
import Container from "UI/Container/Container";
import { HiHome } from "react-icons/hi";
import { HiRocketLaunch, HiPlay } from "react-icons/hi2";
import LinkEl from "UI/LinkEl/LinkEl";
import { Link } from "react-router-dom";

function ParentNavLinks() {
  return (
    <Container variation="md">
      <div className={styles["parent-nav-links"]}>
        <div>
          <Link to="/">
            <img src="./logo.png" alt="main" />
          </Link>
        </div>
        <div className="flex item-center gap-5 ">
          <LinkEl type="link" icon={<HiHome />} to="/workshops">
            workshops
          </LinkEl>
          <LinkEl type="link" icon={<HiRocketLaunch />} to="/games">
            games
          </LinkEl>
          <LinkEl type="link" icon={<HiPlay />} to="/videos">
            videos
          </LinkEl>
        </div>
      </div>
    </Container>
  );
}

export default ParentNavLinks;
