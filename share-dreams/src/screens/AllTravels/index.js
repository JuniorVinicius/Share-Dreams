import { FlatList } from "react-native";
import { Travel, MainContainer, AddButton } from "../../components";

const DATA = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
];

const AllTravels = () => {
  const renderItem = ({ item }) => {
    return <Travel id={item.id} />;
  };

  return (
    <MainContainer>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <AddButton />
    </MainContainer>
  );
};

export default AllTravels;
