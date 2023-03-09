import React from 'react'
import styles from "../todoapp.module.css";

const DefaultList: React.FC<{}> = ()=> {
  return (
    <div className={`${styles["todo-app__list"]} ${styles["todo-app__list--default"]}`}>
      <i className="fa-solid fa-circle-exclamation"></i>
      <p>0 list created</p>
    </div>
  );
}

export default DefaultList;