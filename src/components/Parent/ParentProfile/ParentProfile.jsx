import ParentNav from "components/Parent/ParentNav/ParentNav";
import ParentSubNav from "components/Parent/ParentSubNav/ParentSubNav";
import ParentDashboard from "../ParentDashboard/ParentDashboard";
import AddChildForm from "components/Forms/AddChildForm/AddChildForm";
import { useState } from "react";

import styles from "./ParentProfile.module.scss";

function ParentProfile() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles["parent-profile"]}>
      <ParentNav />
      <ParentSubNav />
      <ParentDashboard setShowModal={setShowModal} />
      <AddChildForm showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default ParentProfile;
