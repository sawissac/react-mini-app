import React from "react";
import { InitState, ThemeContext } from "./ThemeContext";
import { ChildParent } from "./ChildParent";


function Parent() {
  const [global, setGlobal] = React.useState(InitState);
  return (
    <ThemeContext.Provider value={global}>
      <div>
        <ChildParent />
        <button
          onClick={() => {
            setGlobal((i) => ({ ...i, mode: "dark" }));
          }}
        >
          Change mode
        </button>
      </div>
    </ThemeContext.Provider>
  );
}






export default Parent;
