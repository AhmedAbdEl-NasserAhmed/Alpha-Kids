import { useState } from "react";
import Styles from "./AuthPagesFormsWrapper.module.scss";
import LoginForm from "components/Forms/LoginForm/LoginForm";
import RegisterForm from "components/Forms/RegisterForm/RegisterForm";

function FormsWrapper() {
  const [flip, setFlip] = useState(false);

  return (
    <div className={Styles["froms-wrapper"]}>
      <LoginForm flip={flip} setFlip={setFlip} />
      <RegisterForm flip={flip} setFlip={setFlip} />
    </div>
  );
}

export default FormsWrapper;
