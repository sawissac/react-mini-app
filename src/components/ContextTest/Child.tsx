import React from "react";
import { ThemeContext } from "./ThemeContext";

export function Child() {
  const globalState = React.useContext(ThemeContext);

  return <div>{globalState.mode}</div>;
}