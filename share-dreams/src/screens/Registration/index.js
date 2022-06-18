import { ScrollView, StyleSheet } from "react-native";
import { InputField } from "../../components";

export default function Registration() {
  return (
    <>
      <ScrollView contentContainerStyle={style.container}>
        <InputField placeholder="Travel Destination" />
        <InputField placeholder="Travel Day" />
        <InputField placeholder="Travel Return Day" />
        <InputField placeholder="Travel Price" />
        <InputField placeholder="Amount of people" />
        <InputField placeholder="Description" height={100} />
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:15,
    paddingVertical:10,
  }
})