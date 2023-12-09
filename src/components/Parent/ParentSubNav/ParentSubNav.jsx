import { Link } from "react-router-dom";
import styles from "./ParentSubNav.module.scss";
import Container from "UI/Container/Container";

function ParentSubNav() {
  return (
    <div className={styles["sub-nav"]}>
      <Container>
        <div className="flex gap-2 align-items-center text-[1.4rem] text-zinc-50 ">
          <span>
            <Link className="text-cyan-500" to="/parent">
              Home
            </Link>
          </span>
          <p>/ DashBoard</p>
        </div>
      </Container>
    </div>
  );
}

export default ParentSubNav;
