import styles from "./NavBar.module.scss";

const NavBar = ({}) => {
  return (
    <div className="" id="menu">
      <ul className={`${styles["navbar-list"]}`}>
        <li>
          <a className={`${styles["navbar-list-item"]}`} id="link-home"></a>
        </li>

        <li>
          <a className={`${styles["navbar-list-item"]}`} id="link-about"></a>
        </li>

        <li>
          <a className={`${styles["navbar-list-item"]}`} id="link-resume"></a>
        </li>

        <li>
          <a className={`${styles["navbar-list-item"]}`} id="link-contact"></a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
