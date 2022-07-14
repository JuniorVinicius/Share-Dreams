import { ScrollView, StyleSheet } from "react-native";
import { InputField, SimpleButton } from "../../components";
import { ButtonContainer } from "./style";
import { useState, useEffect, useContext } from "react";
import { MOCK_USER } from "./../../data/mockUser";
import { TravelContext } from "../../context/travelContext";

export default function Registration({ navigation }) {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [price, setPrice] = useState("");
  const [amountPeople, setAmountPeople] = useState("");
  const [description, setDescription] = useState("");
  const { setAllTravels } = useContext(TravelContext);
  useEffect(() => {
    if (date.length === 2) {
      setDate(`${date}/`);
    }

    if (date.length === 5) {
      setDate(`${date[0]}${date[1]}/${date[3]}${date[4]}/`);
    }

    if (date.length === 7) {
      setDate(`${date[0]}${date[1]}/${date[3]}${date[4]}/${date[6]}`);
    }

    if (date.length === 8) {
      setDate(`${date[0]}${date[1]}/${date[3]}${date[4]}/${date[6]}${date[7]}`);
    }
    if (date.length === 9) {
      setDate(
        `${date[0]}${date[1]}/${date[3]}${date[4]}/${date[6]}${date[7]}${date[8]}`
      );
    }
    if (date.length >= 10) {
      setDate(
        `${date[0]}${date[1]}/${date[3]}${date[4]}/${date[6]}${date[7]}${date[8]}${date[9]}`
      );
    }

    if (returnDate.length === 2) {
      setReturnDate(`${returnDate}/`);
    }

    if (returnDate.length === 5) {
      setReturnDate(
        `${returnDate[0]}${returnDate[1]}/${returnDate[3]}${returnDate[4]}/`
      );
    }

    if (returnDate.length === 7) {
      setReturnDate(
        `${returnDate[0]}${returnDate[1]}/${returnDate[3]}${returnDate[4]}/${returnDate[6]}`
      );
    }

    if (returnDate.length === 8) {
      setReturnDate(
        `${returnDate[0]}${returnDate[1]}/${returnDate[3]}${returnDate[4]}/${returnDate[6]}${returnDate[7]}`
      );
    }
    if (returnDate.length === 9) {
      setReturnDate(
        `${returnDate[0]}${returnDate[1]}/${returnDate[3]}${returnDate[4]}/${returnDate[6]}${returnDate[7]}${returnDate[8]}`
      );
    }
    if (returnDate.length >= 10) {
      setReturnDate(
        `${returnDate[0]}${returnDate[1]}/${returnDate[3]}${returnDate[4]}/${returnDate[6]}${returnDate[7]}${returnDate[8]}${returnDate[9]}`
      );
    }
  }, [date, returnDate]);

  const handleSubmit = () => {
    const travel = {
      id: Math.random().toString() + destination,
      author_id: MOCK_USER.id,
      title: destination,
      description: description,
      travel_price: price,
      travel_date: date,
      travel_return_date: returnDate,
      travelers_max_quantity: amountPeople,
      travelers_acepted: [MOCK_USER.id],
      travelers_pending: [],
      travelers_declined: [],
      is_favorite: false,
      image:
        "https://images.unsplash.com/photo-1526134026104-232655599392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
    };

    setAllTravels((prev) => [...prev, travel]);
    navigation.navigate("Home");
  };

  return (
    <>
      <ScrollView contentContainerStyle={style.container}>
        <InputField
          placeholder="Travel Destination"
          value={destination}
          onChangeText={(destination) => setDestination(destination)}
        />
        <InputField
          placeholder="Travel Date"
          value={date}
          onChangeText={(date) => setDate(date)}
          keyboardType="number-pad"
        />
        <InputField
          placeholder="Travel Return Date"
          value={returnDate}
          onChangeText={(returnDate) => setReturnDate(returnDate)}
          keyboardType="number-pad"
        />
        <InputField
          placeholder="Travel Price"
          value={price}
          onChangeText={(price) => setPrice(price)}
          keyboardType="number-pad"
        />
        <InputField
          placeholder="Amount of people"
          value={amountPeople}
          onChangeText={(amountPeople) => setAmountPeople(amountPeople)}
          keyboardType="number-pad"
        />
        <InputField
          placeholder="Description"
          height={100}
          multiline={true}
          numberOfLines={3}
          value={description}
          onChangeText={(description) => setDescription(description)}
        />
      </ScrollView>
      <ButtonContainer>
        <SimpleButton title="Save" onPress={handleSubmit} />
      </ButtonContainer>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
