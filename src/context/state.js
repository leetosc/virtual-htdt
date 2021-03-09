import { useState, createContext, useContext } from "react";
import { useLocalStorageState } from "../utils/utils";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export function ProvideAppState({ children }) {
  const appState = useProvideState();
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export const useAppState = () => {
  return useContext(AppContext);
};

function useProvideState() {
  const [locationsVisited, setLocationsVisited] = useLocalStorageState(
    "locationsVisited",
    []
  );
  const [inventory, setInventory] = useLocalStorageState("inventory", []);
  const [userNotes, setUserNotes] = useLocalStorageState("notes", "");

  const SHOW_ANSWERS = userNotes.toLowerCase().includes("i am a huynh truong");

  const appState = {
    locationsVisited,
    inventory,
    SHOW_ANSWERS,
    userNotes,
  };

  return {
    appState,
    setLocationsVisited,
    setInventory,
    setUserNotes,
  };
}
