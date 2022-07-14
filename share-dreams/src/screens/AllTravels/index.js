import { useContext, useState, useEffect } from "react";
import { FlatList } from "react-native";
import {
  Travel,
  MainContainer,
  AddButton,
  EmptyScreen,
} from "../../components";
import { MOCK_TRAVELS } from "./../../data";
import { MOCK_USER } from "./../../data";
import { TravelContext } from "./../../context/travelContext";

const AllTravels = ({ navigation }) => {
  const { setTravelId, myAllTravels, setMyAllTravels } =
    useContext(TravelContext);
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
    <>
      {myAllTravels.length > 0 ? (
        <MainContainer>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={myAllTravels}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <AddButton onPress={addTravel} />
        </MainContainer>
      ) : (
        <EmptyScreen title="No Travels" />
      )}
    </>
  );
};

export default AllTravels;
