import { Link } from "react-router-dom";
import styles from "./SubNav.module.scss";
import Container from "UI/Container/Container";
import { useUser } from "hooks/useUser";

function SubNav() {
  const { user } = useUser();

  return (
    <div className={styles["sub-nav"]}>
      <Container variation="bg">
        <div className="flex gap-2 align-items-center text-[1.4rem] text-zinc-50 ">
          <span>
            <Link
              className="text-cyan-500"
              to={String(
                `/${user?.user_metadata?.userType}`
              ).toLocaleLowerCase()}
            >
              Home
            </Link>
          </span>
          <p>/ DashBoard</p>
        </div>
      </Container>
    </div>
  );
}

export default SubNav;
