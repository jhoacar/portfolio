import styles from "./Dell.module.scss";

const Dell = ({ children }) => {
  return (
    <div className={`${styles["laptop"]}`}>
      <div className={`${styles["monitor"]}`}>
        <div className={`${styles["monitor-body"]}`}>
          <div className={`${styles["monitor-text"]}`}>
              {children}
          </div>
        </div>
      </div>

      <div className={`${styles["bottom_part"]}`}>
        <div className={`${styles["keyboard"]}`}>
          <img src="/keyboard-black.png"/>
        </div>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div className={`${styles["touchpad"]}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Dell;