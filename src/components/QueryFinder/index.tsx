import React, { useState } from "react";
import "./queryfinder.scss";

const QueryFinder = () => {
  const [query, setQuery] = useState("");
  const globalClassList = [...document.querySelectorAll("body *")].reduce<
    Set<string>
  >((p: Set<string>, c) => {
    const isExist = c.getAttribute("class");
    if (isExist) p.add(isExist);
    return p;
  }, new Set([]));

  return (
    <div className="query-finder">
      <div className="query-finder__class-list">
        <ul>
          {[...globalClassList].map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
      <div className="query-finder__target">
        <label htmlFor="target-query">$</label>
        <input
          value={query}
          onChange={(ev) => {
            setQuery(ev.target.value);
          }}
          onKeyDown={(ev) => {
            if (ev.code === "Enter") {
              const elementList = document.querySelectorAll(query);
              [...elementList].map((i) => {
                i.setAttribute("style", "border: 2px solid red");
              });
            }
            if (ev.ctrlKey && ev.code === "Space") {
              console.log(globalClassList);
            }
          }}
          type="text"
          name="targets"
          id="target-query"
        />
      </div>
    </div>
  );
};

export default QueryFinder;
