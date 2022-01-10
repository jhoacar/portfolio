import styles from "./Iphone.module.scss";

const Iphone = ({children}) => {
  return (
    <div id={styles["scene3D"]}>
      <div id={styles["iphone"]}>
        <div className={`${styles["slab"]} ${styles["black"]}`}>
          <div className={`${styles["top"]}`}></div>
          <div className={`${styles["right"]}`}></div>
          <div className={`${styles["bottom"]}`}></div>
          <div className={`${styles["left"]}`}></div>
          <div id={styles["webcam"]}>
            <div id={styles["flash"]}></div>
          </div>
          <div id={styles["speaker-front"]}>
          </div>
          <div id={styles["screen"]}>
            <div id={styles["videito"]}>
            {children}
            </div>
          </div>
          <div id={styles["home-button"]}>
            <div id={styles["square"]}></div>
          </div>
          <div className={`${styles["front"]} ${styles["thickness-end"]}`}></div>
          <div className={`${styles["front"]} ${styles["thickness"]}`}></div>
          <div className={`${styles["front"]}`}></div>
          <div className={`${styles["back"]}`}></div>
        </div>
        <div className={`${styles["slab"]}`}>
          <div className={`${styles["top"]}`}>
            <div className={`${styles["join"]}`}></div>
            <div className={`${styles["on-off"]}`}>
              <div className={`${styles["on-off"]} ${styles["on-off-1"]}`}></div>
              <div className={`${styles["on-off"]} ${styles["on-off-1"]}`}></div>
              <div className={`${styles["on-off"]} ${styles["on-off-1"]}`}></div>
              <div className={`${styles["on-off"]} ${styles["on-off-1"]}`}></div>
            </div>
            <div id={styles["earphone"]}></div>
            <div id={styles["click"]}></div>
          </div>
          <div className={`${styles["right"]}`}>
            <div className={`${styles["join"]}`}></div>
            <div id={styles["sim"]}>
              <div id={styles["hole"]}></div>
            </div>
          </div>
          <div className={`${styles["bottom"]}`}>
            <div className={`${styles["speaker"]}`}>
            </div>
            <div className={`${styles["screws"]}`}>X</div>
            <div id={styles["dock"]}>
              <div id={styles["connector"]}></div>
            </div>
            <div className={`${styles["screws"]} ${styles["screws-right"]}`}>X</div>
            <div className={`${styles["speaker"]} ${styles["speaker-right"]}`}>
            </div>
          </div>
          <div className={`${styles["left"]}`}>
            <div id={styles["ringtone"]}>
              <div className={`${styles["lock"]}`}>
                <div className={`${styles["lock"]} ${styles["lock-1"]}`}></div>
                <div className={`${styles["lock"]} ${styles["lock-2"]}`}></div>
                <div className={`${styles["lock"]} ${styles["lock-3"]}`}></div>
                <div className={`${styles["lock"]} ${styles["lock-4"]}`}></div>
                <div className={`${styles["lock"]} ${styles["lock-5"]}`}></div>
              </div>
            </div>
            <div className={`${styles["volume"]}`}>
              <div className={`${styles["volume"]} ${styles["volume-1"]}`}></div>
              <div className={`${styles["volume"]} ${styles["volume-2"]}`}></div>
              <div className={`${styles["volume"]} ${styles["volume-3"]}`}></div>
              <div className={`${styles["volume"]} ${styles["volume-4"]}`}></div>
              <div className={`${styles["volume"]} ${styles["volume-5"]}`}>+</div>
            </div>
            <div className={`${styles["volume"]} ${styles["volume-less"]}`}>
              <div className={`${styles["volume"]} ${styles["volume-1"]}`}></div>
              <div className={`${styles["volume"]} ${styles["volume-2"]}`}></div>
              <div className={`${styles["volume"]} ${styles["volume-3"]}`}></div>
              <div className={`${styles["volume"]} ${styles["volume-4"]}`}></div>
              <div className={`${styles["volume"]} ${styles["volume-5"]}`}>|</div>
            </div>
            <div className={`${styles["join"]}`}></div>
          </div>
          <div className={`${styles["front"]}`}></div>
          <div className={`${styles["back"]}`}></div>
        </div>
        <div className={`${styles["slab"]} ${styles["black"]} ${styles["black-back"]}`}>
          <div className={`${styles["top"]}`}></div>
          <div className={`${styles["right"]}`}></div>
          <div className={`${styles["bottom"]}`}></div>
          <div className={`${styles["left"]}`}></div>
          <div className={`${styles["front"]}`}></div>
          <div className={`${styles["back"]}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Iphone;
