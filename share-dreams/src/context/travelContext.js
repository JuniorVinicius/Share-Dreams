import { createContext, useState } from "react";
import { MOCK_USER, MOCK_ALL_TRAVELS } from "../data";
export const TravelContext = createContext({
  travelId: null,
  favorites: [],
  searchedTravel: '',
  allTravels: [],
  setAllTravels: () => {},
  setSearchedTravel: () => {},
  setFavorites: () => {},
  setTravelId: () => {},
});

export const TravelProvider = ({ children }) => {
  const [travelId, setTravelId] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchedTravel, setSearchedTravel] = useState(null);
  const [allTravels, setAllTravels] = useState(MOCK_ALL_TRAVELS);

  return (
    <TravelContext.Provider
      value={{
        travelId,
        setTravelId,
        favorites,
        setFavorites,
        searchedTravel,
        setSearchedTravel,
        allTravels,
        setAllTravels,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};
