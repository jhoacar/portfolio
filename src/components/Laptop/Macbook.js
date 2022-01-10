import styles from "./Macbook-original.module.scss";
const Macbook = ({children}) => {
  return (
      <div className={`${styles["macbook"]}`}>
        <div className={`${styles["inner"]}`}>
          <div className={`${styles["screen"]}`}>
            <div className={`${styles["face-one"]}`}>
              <div className={`${styles["camera"]}`}></div>
              <div className={`${styles["display"]}`}>
                {children}
                <div className={`${styles["shade"]}`}></div>
              </div>
              <span className={`${styles["brand"]}`}>MacBook Air</span>
            </div>
            <img
              src="/apple-logo.svg"
              className={`${styles["logo"]}`}
            />
          </div>
          <div className={`${styles["body"]}`}>
            <div className={`${styles["face-one"]}`}>
              <div className={`${styles["touchpad"]}`}></div>
              <div className={`${styles["keyboard"]}`}>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]} ${styles["space"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
                <div className={`${styles["key"]} ${styles["f"]}`}></div>
              </div>
            </div>
            <div className={`${styles["pad"]} ${styles["one"]}`}></div>
            <div className={`${styles["pad"]} ${styles["two"]}`}></div>
            <div className={`${styles["pad"]} ${styles["three"]}`}></div>
            <div className={`${styles["pad"]} ${styles["four"]}`}></div>
          </div>
        </div>
        <div className={`${styles["shadow"]}`}></div>
      </div>
  );
};

export default Macbook;
