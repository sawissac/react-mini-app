import styles from "./reactquery.module.scss";
import React from "react";
import ReactQuery from "./ReactQuery";
import { NavLink, Routes, Route } from "react-router-dom";
import Display from "./Display";
import Usage from "./Usage";

const linksUrl = [
  "films", "people", "planets", "species", "starships", "vehicles"
]

const Stwapi = () => {
  return (
    <>
      <div className={styles["ui-navbar"]}>
        <div className={styles["ui-navbar__title"]}>
          <h1>SWAPI🚀 </h1>
        </div>
        <nav className={styles["ui-navbar__link-list"]}>

          {
            linksUrl.map((i, index) => (
              <NavLink
                key={index}
                to={`/${i}`}
                relative="path"
                className={({ isActive }) => {
                  return isActive ? styles["link--active"] : ""
                }}
              >
                {i}
              </NavLink>
            ))
          }

        </nav>
      </div>
      <div className={styles["ui-display"]}>
        <Routes>
          <Route path="/" element={<Usage />} />
          <Route path="/:root" element={<Display />} />
        </Routes>
      </div>
    </>
  );
};

export default Stwapi;
