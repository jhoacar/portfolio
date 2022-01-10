import styles from "./LightNavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { faHome, faComment, faTh, faFilePdf, faCog } from "@fortawesome/free-solid-svg-icons";

const LightNavBar = ({ items }) => {
  return (
    <div className={`${styles["mm-menu"]}`}>
      <a className={`${styles["mm-item"]}`}>
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </a>
      <a className={`${styles["mm-item"]}`}>
        <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
      </a>
      <a className={`${styles["mm-item"]}`}>
        <FontAwesomeIcon icon={faTh}></FontAwesomeIcon>
      </a>
      <a className={`${styles["mm-item"]}`}>
        <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
      </a>
      <a className={`${styles["mm-item"]}`}>
        <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
      </a>
      <a className={`${styles["mm-item"]}`}>
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      </a>
      <a className={`${styles["mm-item"]}`}>
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </a>
      <a className={`${styles["mm-item"]}`}>
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default LightNavBar;
