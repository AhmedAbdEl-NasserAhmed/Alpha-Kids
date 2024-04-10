import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "hooks/useLogout";
import { HiOutlineUser, HiChevronDown } from "react-icons/hi";
import { useState } from "react";
import { useUser } from "hooks/useUser";
import Button from "UI/Button";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import Loader from "UI/Loader/Loader";

function Nav() {
  const [showProfileList, setShowProfileList] = useState(false);
  const { logout, isPending } = useLogout();
  const { user } = useUser();

  if (isPending) return <PagesSpinner />;

  const isParent =
    user?.user_metadata?.userType === "Parent" &&
    window.location.pathname !== "/parent/profile";

  return (
    <nav className={styles.nav}>
      {!user ? (
        <Loader />
      ) : (
        <div
          onClick={() => setShowProfileList((show) => !show)}
          className={styles["nav__profile"]}
        >
          <span>
            <HiOutlineUser />
          </span>
          <span className={styles["nav__profile__name"]}>
            {user?.user_metadata.userName}
          </span>
          <span>
            <HiChevronDown />
          </span>
        </div>
      )}

      {showProfileList && (
        <ul className={styles["nav__list"]}>
          {user.isParent && (
            <li>
              <NavLink className={styles["nav__nav-link"]} to="/parent/profile">
                <span>
                  <HiOutlineUser />
                </span>
                <span>Profile</span>
              </NavLink>
            </li>
          )}
          {user?.user_metadata?.userType === "Teacher" &&
            window.location.pathname !== "/teacher/profile" && (
              <li>
                <NavLink
                  className={styles["nav__nav-link"]}
                  to="/teacher/profile"
                >
                  <span>
                    <HiOutlineUser />
                  </span>
                  <span>Profile</span>
                </NavLink>
              </li>
            )}
          <li onClick={logout}>
            <span>
              <HiOutlineArrowRightOnRectangle />
            </span>
            <Button disabled={isPending}>Logout</Button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
