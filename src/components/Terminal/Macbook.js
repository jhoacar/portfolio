import styles from "./Macbook.module.scss";
import { useState } from "react";

const MacbookTerminal = () => {
  const [textInput, setTextInput] = useState("");
  const [commands, setCommands] = useState([]);

  const handleKeyPressed = (event) => {
    if (event.key == "Enter"){
      setCommands((commands) => [...commands, event.target.value]);
      setTextInput("");
      if(event.target.value==="clear")
        setCommands([]);
    }
  };

  return (
    <div className={`${styles["cli"]}`}>
      <div className={`${styles["cli-header"]}`}>
        <a className={`${styles["dot"]}`} href="#"></a>
        <a className={`${styles["dot"]}`} href="#"></a>
        <a className={`${styles["dot"]}`} href="#"></a>
        <a className={`${styles["b"]}`}>
          <b>root@jhoan</b>
        </a>
      </div>

      <div className={`${styles["cli-body"]}`}>
        {commands?.map((command, index) => (
          <p key={index} className={`${styles["success"]}`}>
            <span className={`${styles["dollar"]}`}>$_root@jhoan:~#</span>
            {command}
          </p>
        ))}
        <div className={`${styles["cli-control"]}`}>
          <span className={`${styles["dollar"]}`}>$_</span>
          <input
            type="text"
            className={`${styles["cli-input"]} ${styles["right"]}`}
            name="cli-input"
            onChange={(event) => setTextInput(event.target.value)}
            onKeyDown={handleKeyPressed}
            value={textInput}
          />
        </div>
      </div>
    </div>
  );
};

export default MacbookTerminal;
