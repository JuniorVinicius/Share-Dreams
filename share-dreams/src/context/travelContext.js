import { createContext, useState } from "react";

export const TravelContext = createContext({
  travelId: null,
  favorites: [],
  searchedTravel: '',
  setSearchedTravel: () => {},
  setFavorites: () => {},
  setTravelId: () => {},
});

export const TravelProvider = ({ children }) => {
  const [travelId, setTravelId] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchedTravel, setSearchedTravel] = useState(null);

  return (
    <TravelContext.Provider
      value={{
        travelId,
        setTravelId,
        favorites,
        setFavorites,
        searchedTravel,
        setSearchedTravel,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};
