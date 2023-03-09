import React from "react";
import styles from "../todoapp.module.css";

type ClickEventFunction = (ev: React.MouseEvent<HTMLButtonElement>) => void;

type Props = {
  onSearchClick: ClickEventFunction;
  onCreateClick: ClickEventFunction;
  onRewriteClick: ClickEventFunction;
  onDeleteClick: ClickEventFunction;
};

const TodoControl: React.FC<Props> = ({
  onSearchClick,
  onCreateClick,
  onDeleteClick,
  onRewriteClick,
}) => {
  return (
    <div className={styles["todo-app__control"]}>
      <button type="button" onClick={onSearchClick}>
        <i className="fa-solid fa-magnifying-glass"></i>
        Search
      </button>
      <button type="button" onClick={onCreateClick}>
        <i className="fa-solid fa-plus"></i>
        Create
      </button>
      <button type="button" onClick={onRewriteClick}>
        <i className="fa-solid fa-pen"></i>
        Rewrite
      </button>
      <button type="button" onClick={onDeleteClick}>
        <i className="fa-solid fa-trash"></i>
        Delete
      </button>
    </div>
  );
};

export default TodoControl;
