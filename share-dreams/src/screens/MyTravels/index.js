import { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Travel, MainContainer } from "../../components";
import { MOCK_TRAVELS } from "./../../data";
import { MOCK_USER } from "./../../data";
import { TravelContext } from "./../../context/travelContext";

const MyTravels = ({ navigation }) => {
  const { setTravelId } = useContext(TravelContext);
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
    const MyTravels = MOCK_TRAVELS.filter(
      (travel) => travel.author_id === MOCK_USER.id
    );
    setTravels(MyTravels);
  }, [MOCK_TRAVELS]);



  return (
    <MainContainer>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={travels}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

    </MainContainer>
  );
};

export default MyTravels;
