import React from "react";
import styles from "../todoapp.module.css";
import ShowIf from "../../helper/ShowIf";
import DefaultList from "../TodoList/Default";
import ClickableList from "../TodoList/Clickable";

type ListData = {
  id: number;
  desc: string;
  mark: boolean;
};

type Props = {
  data: Array<ListData>;
  isSearchEnable: boolean;
  searchInput: string;
  activeId: number;
  onActiveClick: (id: number) => void;
  onNonActiveClick: (id: number) => void;
};

const TodoListView: React.FC<Props> = ({
  data,
  isSearchEnable,
  searchInput,
  activeId,
  onActiveClick,
  onNonActiveClick,
}) => {
  return (
    <div className={styles["todo-app__lists-view"]}>
      <ShowIf sif={data.length === 0} show={<DefaultList />} />
      {data.map((i, index) => {
        const isSearchActive = isSearchEnable
          ? i.desc.toLowerCase().includes(searchInput.toLowerCase()) && i.id === activeId
          : i.id === activeId;
        if (isSearchActive) {
          let classNameList = i.mark
            ? `${styles["todo-app__list"]} ${styles["todo-app__list--selected"]} ${styles["todo-app__list--marked"]}`
            : `${styles["todo-app__list"]} ${styles["todo-app__list--selected"]}`;
          return (
            <ClickableList
              key={index}
              className={classNameList}
              label={i.desc}
              onClick={() => {
                onActiveClick(i.id);
              }}
            />
          );
        }
        const isSearchNonActive = isSearchEnable
          ? i.desc.toLowerCase().includes(searchInput.toLowerCase()) && i.id !== activeId
          : i.id !== activeId;
        if (isSearchNonActive) {
          let classNameList = i.mark
            ? `${styles["todo-app__list"]} ${styles["todo-app__list--marked"]}`
            : `${styles["todo-app__list"]}`;
          return (
            <ClickableList
              key={index}
              className={classNameList}
              label={i.desc}
              onClick={() => {
                onNonActiveClick(i.id);
              }}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default TodoListView;
