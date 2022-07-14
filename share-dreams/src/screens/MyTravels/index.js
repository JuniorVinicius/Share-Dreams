import { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Travel, MainContainer, EmptyScreen } from "../../components";
import { MOCK_TRAVELS } from "./../../data";
import { MOCK_USER } from "./../../data";
import { TravelContext } from "./../../context/travelContext";

const MyTravels = ({ navigation }) => {
  const { setTravelId, myAllTravels} = useContext(TravelContext);
  const [travels, setTravels] = useState([]);

  const handleClickTravel = (itemId) => {
    navigation.navigate("Details");
    setTravelId(itemId);
  };

  const renderItem = ({ item }) => {
    return (
      <Travel
        id={item.id}
        {...item}
        status="Admin"
        onPress={() => handleClickTravel(item.id)}
      />
    );
  };

  useEffect(() => {
    const MyTravels = myAllTravels.filter(
      (travel) => travel.author_id === MOCK_USER.id
    );
    setTravels(MyTravels);
  }, [myAllTravels]);



  return (
    <>
      {travels.length > 0 ? (<MainContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={travels}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

    </MainContainer>): <EmptyScreen title="No Travels" />}
    </>
  );
};

export default MyTravels;
