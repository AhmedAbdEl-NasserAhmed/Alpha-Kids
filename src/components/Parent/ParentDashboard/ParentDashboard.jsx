import Container from "UI/Container/Container";
import styles from "./ParentDashboard.module.scss";
import { images } from "assets";
import { HiPlusSm } from "react-icons/hi";
import { useUser } from "hooks/useUser";
import PagesSpinner from "UI/PagesSpinner/PagesSpinner";
import { useEffect } from "react";
import { useGetChildren } from "hooks/useGetChildren";
import ParentChildList from "../ParentChildList/ParentChildList";

function ParentDashboard({ children, setShowModal }) {
  const { user } = useUser();

  const { data, isPending, refetch } = useGetChildren();

  useEffect(
    function () {
      if (user) refetch();
    },
    [user, refetch]
  );

  if (isPending) return <PagesSpinner />;

  return (
    <Container>
      <div className={styles.dashboard}>
        <h2 className={styles["dashboard__heading"]}>Dashboard</h2>
      </div>
      <div className="flex items-center gap-[2rem] flex-wrap">
        <div
          className="flex flex-col items-center gap-[1rem] cursor-pointer relative"
          onClick={() => setShowModal(true)}
        >
          <img
            className={styles["dashboard__profile-img"]}
            src={images.profiles.default}
            alt=""
          />
          <p className="font-semibold text-[1.2rem] tracking-[1px]">
            Add a child
          </p>
          <span className={styles["dashboard__profile-img--icon"]}>
            <HiPlusSm />
          </span>
        </div>
        <ParentChildList childrenList={data} />
      </div>
      {children}
    </Container>
  );
}

export default ParentDashboard;
