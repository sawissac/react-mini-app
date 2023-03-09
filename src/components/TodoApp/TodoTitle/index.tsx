import React from "react";
import styles from "../todoapp.module.css";
type ClickEventFunction = (ev: React.MouseEvent<HTMLButtonElement>) => void;

type Props = {
  onDarkModeClick: ClickEventFunction;
};
const TodoTitle: React.FC<Props> = ({ onDarkModeClick }) => {
  return (
    <div className={styles["todo-app__title"]}>
      <div>
        <i className="fa-solid fa-bolt fn-2x"></i>
      </div>
      <h1>ToD_</h1>
      <div style={{ flex: 1 }}></div>
      <button type="button" onClick={onDarkModeClick}>
        <i className="fa-solid fa-moon"></i>
      </button>
    </div>
  );
};

export default TodoTitle;
