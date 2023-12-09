import { NavLink } from "react-router-dom";
import styles from "./ParentNav.module.scss";

import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

import { useLogout } from "hooks/useLogout";
import { HiOutlineUser, HiChevronDown } from "react-icons/hi";
import Button from "UI/Button";
import { useState } from "react";
import { useUser } from "hooks/useUser";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
// import { useSelector } from "react-redux";

function ParentNav() {
  const { logout, isPending } = useLogout();
  const { user } = useUser();

  const [showProfileList, setShowProfileList] = useState(false);

  // const { name, gender, avatar } = useSelector((store) => store.child);

  if (isPending) return <PagesSpinner />;

  return (
    <nav className={styles.nav}>
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

      {showProfileList && (
        <ul className={styles["nav__list"]}>
          {window.location.pathname !== "/parent/profile" && (
            <li>
              <NavLink className={styles["nav__nav-link"]} to="/parent/profile">
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

export default ParentNav;
