import { createContext } from "react";

export const UserContext = createContext({
  isDevMode: false,
  setDevMode: () => {},
  unsetDevMode: () => {},
});
