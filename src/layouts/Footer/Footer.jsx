import Container from "UI/Container/Container";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { images } from "assets/index";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <Container variation="bg">
        <div className={styles["footer__container"]}>
          <Link onClick={() => window.scrollTo(0, 0)}>
            <img src={images.logo.logo} alt="" />
          </Link>
          <div>
            <h2 className={styles["footer__heading"]}>Sitemap</h2>
            <ul className={styles["footer__list"]}>
              <Link onClick={() => window.scrollTo(0, 0)} to="/parent">
                Home
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/workshops">
                workshops
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/games">
                games
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/videos">
                videos
              </Link>
            </ul>
          </div>
          <div>
            <h2 className={styles["footer__heading"]}>Contact Us</h2>
            <p className={styles["footer__email"]}>exampleemail.gmail.com</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
