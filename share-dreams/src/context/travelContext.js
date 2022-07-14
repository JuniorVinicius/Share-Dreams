import { createContext, useState } from "react";
import { MOCK_ALL_TRAVELS, MOCK_TRAVELS } from "../data";
export const TravelContext = createContext({
  travelId: null,
  favorites: [],
  searchedTravel: "",
  allTravels: [],
  myAllTravels: [],
  setAllTravels: () => {},
  setMyAllTravels: () => {},
  setSearchedTravel: () => {},
  setFavorites: () => {},
  setTravelId: () => {},
});

export const TravelProvider = ({ children }) => {
  const [travelId, setTravelId] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchedTravel, setSearchedTravel] = useState(null);
  const [allTravels, setAllTravels] = useState(MOCK_ALL_TRAVELS);
  const [myAllTravels, setMyAllTravels] = useState(MOCK_TRAVELS);

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
        myAllTravels,
        setMyAllTravels,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};
