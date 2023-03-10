import styles from "./todoapp.module.css";
import React from "react";
import TodoTitle from "./TodoTitle";
import TodoControl from "./TodoControl";
import TodoSearch from "./TodoSearch";
import TodoListView from "./TodoListView";
import ShowIf from "../helper/ShowIf";
import TodoFooterBtn from "./TodoFooterBtn";

type ListData = {
  id: number;
  desc: string;
  mark: boolean;
};

const TodoApp: React.FC<{}> = () => {
  const initState = [
    { id: 0, desc: "Meet with Mom", mark: true },
    { id: 1, desc: "Eat dinner", mark: false },
    { id: 2, desc: "Go Home", mark: false },
  ];
  const [id, setId] = React.useState<number>(3);
  const [searchInput, setSearchInput] = React.useState<string>("");
  const [searchEnable, setSearchEnable] = React.useState<boolean>(false);
  const [todoList, setTodoList] = React.useState<Array<ListData>>(initState);
  const [activeId, setActiveId] = React.useState<number>(-1);
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const marks = todoList.filter((i) => i.mark === true);

  const createList = (desc?: string) => {
    setTodoList((i) => {
      return [...i, { id, desc: desc ? desc : searchInput, mark: false }];
    });
    setId(id + 1);
  };
  const markList = (id: number) => {
    let updatedList = todoList.map((i) => {
      if (i.id === id) {
        return { ...i, mark: !i.mark };
      } else {
        return i;
      }
    });
    setTodoList(updatedList);
  };
  const handleSearchEnable = () => {
    if (todoList.length > 0) {
      setSearchEnable(true);
    }
  };
  const handleSearchDisable = () => {
    setSearchEnable(false);
  };
  const handleCreateClick = () => {
    if (searchInput) {
      createList();
      setSearchInput("");
    }
  };
  const handleRewriteClick = () => {
    if (activeId >= 0 && searchInput) {
      let updatedList = todoList.map((i) => {
        if (i.id === activeId) {
          return { ...i, desc: searchInput };
        } else {
          return i;
        }
      });
      setTodoList(updatedList);
      setSearchInput("");
    }
  };
  const handleDeleteClick = () => {
    if (activeId >= 0) {
      let updatedList = todoList.filter((i) => i.id !== activeId);
      setTodoList(updatedList);
      setActiveId(-1);
    }
  };
  const handleDemoCreate = () => {
    createList("This is a demo list!");
  };
  const handleCheckAll = () => {
    let updatedList = todoList.map((i) => {
      return { ...i, mark: true };
    });
    setTodoList(updatedList);
  };
  const handleDeleteAll = () => {
    setTodoList([]);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`${styles["todo-app-container"]} ${
        darkMode && styles["todo-app-container--dark"]
      }`}
    >
      <div className={styles["todo-app"]}>
        <TodoTitle onDarkModeClick={toggleDarkMode} />
        <TodoSearch
          value={searchInput}
          onChange={(ev) => {
            setSearchInput(ev.target.value);
          }}
        />
        <TodoControl
          onSearchClick={handleSearchEnable}
          onCreateClick={handleCreateClick}
          onRewriteClick={handleRewriteClick}
          onDeleteClick={handleDeleteClick}
        />
        <TodoListView
          data={todoList}
          isSearchEnable={searchEnable}
          activeId={activeId}
          searchInput={searchInput}
          onActiveClick={markList}
          onNonActiveClick={setActiveId}
        />
        <ShowIf
          sif={todoList.length === 0}
          show={
            <TodoFooterBtn
              label={{ title: "No List created!", button: "Create" }}
              onClick={handleDemoCreate}
            />
          }
        />
        <ShowIf
          sif={
            marks.length === todoList.length &&
            todoList.length !== 0 &&
            !searchEnable
          }
          show={
            <TodoFooterBtn
              label={{
                title: "You have completed all the tasks",
                button: "Delete all",
              }}
              onClick={handleDeleteAll}
            />
          }
        />
        <ShowIf
          sif={marks.length !== todoList.length && !searchEnable}
          show={
            <TodoFooterBtn
              label={{
                title: `You have ${
                  todoList.length - marks.length
                } pending tasks`,
                button: "Check all",
              }}
              onClick={handleCheckAll}
            />
          }
        />
        <ShowIf
          sif={searchEnable}
          show={
            <TodoFooterBtn
              label={{ title: "Undo search - ", button: "undo" }}
              onClick={handleSearchDisable}
            />
          }
        />
      </div>
    </div>
  );
};

export default TodoApp;
