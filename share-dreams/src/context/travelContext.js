import { createContext, useState } from "react";

export const TravelContext = createContext({
  travelId: null,
  favorites: [],
  setFavorites: () => {},
  setTravelId: () => {},
});

export const TravelProvider = ({ children }) => {
  const [travelId, setTravelId] = useState(null);
  const [favorites, setFavorites] = useState([]);

  return (
    <TravelContext.Provider
      value={{ travelId, setTravelId, favorites, setFavorites }}
    >
      {children}
    </TravelContext.Provider>
  );
};
