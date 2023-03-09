import { ThemeContext } from "./ThemeContext";

export function Child2() {
  return (
    <ThemeContext.Consumer>
      {(globalState) => (
        <div>{globalState.mobileMode ? "mobile on" : "mobile off"}</div>
      )}
    </ThemeContext.Consumer>
  );
}