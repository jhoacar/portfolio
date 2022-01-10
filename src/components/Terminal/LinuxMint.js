import styles from "./LinuxMint.module.scss";

const LinuxMint = ({ children }) => {
  return (
    <div className={`${styles["terminal"]}`}>
      <div className={`${styles["header"]}`}>
        <div className={`${styles["header-name"]}`}>
          <h4>dparnold@github</h4>
        </div>
        <div className={`${styles["header-buttons"]}`}>
          <ul>
            <li> &times; </li>
            <li> + </li>
            <li> &#8722; </li>
          </ul>
        </div>
      </div>

      <div className={`${styles["terminal-window"]}`}>
        <p>
          <span className={`${styles["user"]}`}>user@server </span> <span className={`${styles["path"]}`}>$</span>
          <span className={`${styles["command"]}`}>cd ~/page/menu</span> <br />
          <span className={`${styles["user"]}`}>user@server </span>{" "}
          <span className={`${styles["path"]}`}>~/page/menu $</span>
          <span className={`${styles["command"]}`}>ls</span> <br />
          <span className={`${styles["menu"]}`}>
            <a href="index.html">index.html</a> pictures.png style.css
            destroyearth.sh
          </span>{" "}
          <br />
          <span className={`${styles["user"]}`}>user@server </span>
          <span className={`${styles["path"]}`}>~/page/menu $</span>
          <span className={`${styles["cursor"]}`}>&nbsp;</span>
          <br />
        </p>
      </div>
    </div>
  );
};

export default LinuxMint;
