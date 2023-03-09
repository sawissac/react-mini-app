import React from "react";
import styles from "../todoapp.module.css";

type InputEventFunction = (event: React.ChangeEvent<HTMLInputElement>) => void;  

type Props = {
  value: string;
  onChange: InputEventFunction;
};

const TodoSearch: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className={styles["todo-app__search"]}>
      <input
        type="text"
        placeholder="Search, Rewrite, Create List"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TodoSearch;
