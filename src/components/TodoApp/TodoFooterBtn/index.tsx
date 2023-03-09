import React from "react";
import styles from "../todoapp.module.css";

type ClickEventFunction = (ev: React.MouseEvent<HTMLButtonElement>) => void;

type Props = {
  label: {
    title: string;    
    button: string;
  };
  onClick: ClickEventFunction;
};

const TodoFooterBtn: React.FC<Props> = ({ label, onClick }) => {
  return (
    <div className={`${styles["todo-app__footer"]}`}>
      <p>{label.title}</p>
      <button type="button" onClick={onClick}>
        {label.button}
      </button>
    </div>
  );
};

export default TodoFooterBtn;
