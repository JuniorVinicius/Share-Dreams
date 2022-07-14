import { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Travel, MainContainer, EmptyScreen } from "../../components";
import { MOCK_ALL_TRAVELS, MOCK_TRAVELS } from "./../../data";
import { MOCK_USER } from "./../../data";
import { TravelContext } from "../../context/travelContext";

const Favorites = ({ navigation }) => {
  const { travelId, favorites, setFavorites, setTravelId, allTravels } =
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
    let status = "";
    if (item.author_id === MOCK_USER.id) {
      status = "Admin";
    } else if (item.travelers_acepted.includes(MOCK_USER.id)) {
      status = "Accepted";
    } else if (item.travelers_pending.includes(MOCK_USER.id)) {
      status = "Pending";
    } else if(item.travelers_declined.includes(MOCK_USER.id)) {
      status = "Rejected";
    }
    return (
      <Travel
        id={item.id}
        {...item}
        status={status}
        onPress={() => handleClickTravel(item.id)}
        typeActionButton="favorite"
        onPressActionButton={() => handleClickFavorite(item.id)}
        isFavorite={favorites.includes(item.id)}
      />
    );
  };

  useEffect(() => {
    const favoriteTravels = [];
    allTravels.forEach((travel) => {
      if (favorites.includes(travel.id)) {
        favoriteTravels.push(travel);
      }
    });
    setTravels(favoriteTravels);
  }, [favorites]);

  return (
    <>
    {travels.length > 0 ? (
      <MainContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={travels}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </MainContainer>
    ): <EmptyScreen title="No Favorites" />}
      
    </>
  );
};

export default Favorites;
