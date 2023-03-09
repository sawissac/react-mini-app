import { createContext } from "react";

export type ListData = {
  id: number;
  desc: string;
  mark: boolean;
};

export type InitState = {
  app: {
    mode: boolean;
  };
  data: Array<ListData>;
};

export const InitState = {
  app: {
    mode: false,
  },
  data: [],
};

export const AppContext = createContext<InitState>(InitState);
