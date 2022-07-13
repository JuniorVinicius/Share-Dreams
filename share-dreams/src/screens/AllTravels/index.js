import { useContext, useState, useEffect } from "react";
import { FlatList } from "react-native";
import { Travel, MainContainer, AddButton } from "../../components";
import { MOCK_TRAVELS } from "./../../data";
import { MOCK_USER } from "./../../data";
import { TravelContext } from "./../../context/travelContext";

const AllTravels = ({ navigation }) => {
  const { setTravelId } = useContext(TravelContext);
  const handleClickTravel = (itemId) => {
    setTravelId(itemId);
    navigation.navigate("Details");
  };

  const renderItem = ({ item }) => {
    let status = "";
    if (item.author_id === MOCK_USER.id) {
      status = "Admin";
    } else if (item.travelers_acepted.includes(MOCK_USER.id)) {
      status = "Accepted";
    } else if (item.travelers_pending.includes(MOCK_USER.id)) {
      status = "Pending";
    } else {
      status = "Rejected";
    }
    return (
      <Travel
        id={item.id}
        {...item}
        status={status}
        onPress={() => handleClickTravel(item.id)}
      />
    );
  };

  const addTravel = () => {
    navigation.navigate("Registration");
  };


  return (
    <MainContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={MOCK_TRAVELS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <AddButton onPress={addTravel} />
    </MainContainer>
  );
};

export default AllTravels;
