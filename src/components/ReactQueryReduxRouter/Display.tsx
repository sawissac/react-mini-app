import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import styles from "./reactquery.module.scss";
import ReactQuery from "./ReactQuery";

const Display = () => {
  const { root } = useParams();
  const [value, setValue] = useState("1");
  const [url, setUrl] = useState(`https://swapi.dev/api/${root}/1/`);

  useEffect(() => {
    setValue("1");
    setUrl(`https://swapi.dev/api/${root}/1/`);
  }, [root]);

  return (
    <div className={styles["ui-usage"]}>
      <nav>
        <NavLink to="/">Back</NavLink>
        <h1>{root}</h1>
      </nav>
      <p>Write the {root} name and press search</p>
      <input
        type="number"
        title="search"
        placeholder={`Search ${root}[0-30]...`}
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setUrl(`https://swapi.dev/api/${root}/${value}/`);
        }}
      >
        Search
      </button>

      <ReactQuery url={url} />   
    </div>
  );
};

export default Display;
