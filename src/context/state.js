import { useState, createContext, useContext } from "react";

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
  const [locations, setLocations] = useState([]);
  const [locationsVisited, setLocationsVisited] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [navbarTitle, setNavbarTitle] = useState("Virtual Camp - HTDT");
  const [userNotes, setUserNotes] = useState("");

  const SHOW_ANSWERS = true;

  const appState = {
    locations,
    navbarTitle,
    locationsVisited,
    inventory,
    SHOW_ANSWERS,
    userNotes,
  };

  return {
    appState,
    setLocations,
    setNavbarTitle,
    setLocationsVisited,
    setInventory,
    setUserNotes,
  };
}
