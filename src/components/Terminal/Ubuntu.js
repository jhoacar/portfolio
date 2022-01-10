import styles from "./Ubuntu.module.scss";

const Ubuntu = () => {
  return (
    <main className={`${styles["container"]}`}>
      <div className={`${styles["terminal"]}`}>
        <section className={`${styles["terminal__bar"]}`}>
          <div className={`${styles["bar__buttons"]}`}>
            <button className={`${styles["bar__button"]} ${styles["bar__button--exit"]}`} >
              &#10005;
            </button>
            <button className={`${styles["bar__button"]}`}>&#9472;</button>
            <button className={`${styles["bar__button"]}`}>&#9723;</button>
          </div>
          <p className={`${styles["bar__user"]}`}>fobabs@ubuntu: ~</p>
        </section>
        <section className={`${styles["terminal__body"]}`}>
          <div className={`${styles["terminal__prompt"]}`}>
            <span className={`${styles["terminal__prompt--user"]}`}>fobabs@ubuntu:</span>
            <span className={`${styles["terminal__prompt--location"]}`}>~</span>
            <span className={`${styles["terminal__prompt--bling"]}`}>$</span>
            <span className={`${styles["terminal__prompt--cursor"]}`}></span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Ubuntu;
