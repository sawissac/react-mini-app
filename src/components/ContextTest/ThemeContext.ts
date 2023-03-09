import React from "react";

export const InitState = {
  mode: "light",
  mobileMode: false,
};

export const ThemeContext = React.createContext<typeof InitState>(InitState);