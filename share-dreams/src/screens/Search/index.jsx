import { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Travel, MainContainer, EmptyScreen } from "../../components";
import { MOCK_ALL_TRAVELS } from "./../../data";

import { TravelContext } from "../../context/travelContext";

const SearchScreen = ({ navigation }) => {
  const { travelId, favorites, setFavorites, setTravelId, searchedTravel } =
    useContext(TravelContext);
  const [travels, setTravels] = useState([]);

  const handleClickTravel = (itemId) => {
    navigation.navigate("Details");
    setTravelId(itemId);
  };

  const handleClickFavorite = (itemId) => {
    setFavorites((prev) => prev.filter((id) => id !== itemId));
  };

  const renderItem = ({ item }) => {
    return (
      <Travel
        id={item.id}
        {...item}
        onPress={() => handleClickTravel(item.id)}
        onPressActionButton={() => handleClickFavorite(item.id)}
        isFavorite={favorites.includes(item.id)}
        notHasLabel={true}
      />
    );
  };

  useEffect(() => {
    if (searchedTravel) {
      const filteredTravels = MOCK_ALL_TRAVELS.filter((travel) => {
        return travel.title
          .toLowerCase()
          .includes(searchedTravel.toLowerCase());
      });
      setTravels(filteredTravels)
    } else {
      setTravels(MOCK_ALL_TRAVELS);
    }
  }, [searchedTravel]);

  return (
    <>
      {MOCK_ALL_TRAVELS.length > 0 ? (
        <MainContainer>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={travels}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </MainContainer>
      ) : (
        <EmptyScreen title="Empty" />
      )}
    </>
  );
};

export default SearchScreen;
