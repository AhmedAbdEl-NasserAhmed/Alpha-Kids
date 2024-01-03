import Nav from "layouts/Nav/Nav";
import SubNav from "layouts/SubNav/SubNav";
import ParentDashboard from "../ParentDashboard/ParentDashboard";
import AddChildForm from "components/Forms/AddChildForm/AddChildForm";
import { useState } from "react";

import styles from "./ParentProfile.module.scss";

function ParentProfile() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles["parent-profile"]}>
      <Nav />
      <SubNav />
      <ParentDashboard setShowModal={setShowModal} />
      <AddChildForm showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default ParentProfile;
