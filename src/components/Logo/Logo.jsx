import Styles from "./Logo.module.scss";
import { images } from "assets/index";

function Logo() {
  return <img className={Styles.img} src={images.logo.logo} alt="logo" />;
}

export default Logo;
