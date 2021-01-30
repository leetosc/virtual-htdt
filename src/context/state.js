import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export function ProvideAppState({ children }) {
  const appState = useProvideState();
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
}

export const useAppState = () => {
  return useContext(AppContext);
};

function useProvideState() {
  const [locations, setLocations] = useState([]);
  const [navbarTitle, setNavbarTitle] = useState("Virtual Camp - HTDT");

  const appState = { locations, navbarTitle };

  return {
    appState,
    setLocations,
    setNavbarTitle,
  };
}
