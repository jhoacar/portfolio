import styles from "./Checkbox.module.scss";
import { useEffect, useRef } from "react";

const Checkbox = ({ width = "50px" }) => {
  
  const loadCSSVariables = () => {
    document.documentElement.style.setProperty("--checkbox-label-width", width);
    document.documentElement.style.setProperty("--transition-delay1", ".1s");
    document.documentElement.style.setProperty("--transition-delay2", ".2s");
    document.documentElement.style.setProperty("--animation-time", "100ms");
  };

  useEffect(loadCSSVariables, []);

  const checkbox = useRef(null);
  const form = useRef(null);
  const arm = useRef(null);

  //runs when checkbox changes
  function handleCheckbox(e) {
    //add class to triggre the character
    form.current.classList.toggle(`${styles["visible"]}`);

    // set random animation duration
    let animationTime = getRandomAnimationTime();

    document.documentElement.style.setProperty(
      "--animation-time",
      animationTime + "ms"
    );

    //create random delays for arm and head
    let delayOne = getRandomDelay();
    let delayTwo = getRandomDelay();

    //swap delays when arm goes before head
    if (delayOne > delayTwo) {
      [delayOne, delayTwo] = [delayTwo, delayOne];
    }

    //set the css variables to the random delays
    document.documentElement.style.setProperty(
      "--transition-delay1",
      delayOne + "ms"
    );
    document.documentElement.style.setProperty(
      "--transition-delay2",
      delayTwo + "ms"
    );

    //create a delay for the checkbox to inline with the arm
    let standardDelay = animationTime - 350;
    let checkboxDelay = standardDelay + delayTwo;

    //uncheck checkbox after the above calculated time
    setTimeout(() => {
      checkbox.current.checked = false;
    }, checkboxDelay);
  }

  //remove the visible class when the arm is done pushing
  const armOnTransitionEnd = () => {
    form.current.classList.remove(`${styles["visible"]}`);
  };

  //returns random delay value
  function getRandomDelay() {
    const delay = 2000;
    return Math.floor(Math.random() * delay);
  }

  //returns random animation duration
  function getRandomAnimationTime() {
    const duration = 1000;
    const min = 800;
    return Math.floor(Math.random() * duration) + min;
  }

  return (
    <div
      ref={form}
      id="checkbox-troll"
      className={`${styles["checkbox-form"]}`}
    >
      <input
        ref={checkbox}
        id="checkbox"
        type="checkbox"
        onChange={handleCheckbox}
      />
      <label htmlFor="checkbox"></label>

      <div className={`${styles["arm-container"]}`}>
        <div
          ref={arm}
          className={`${styles["arm"]}`}
          onTransitionEnd={armOnTransitionEnd}
        ></div>
      </div>

      <div className={`${styles["head"]}`}>
        <div className={`${styles["eyes"]}`}>
          <div className={`${styles["eye1"]}`}></div>
          <div className={`${styles["eye2"]}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
