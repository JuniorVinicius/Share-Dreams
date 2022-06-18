import { AntDesign } from "@expo/vector-icons";
import { Container } from "./style";
import { Colors } from "./../../../../constants";
import { Pressable } from "react-native";

export default function AddButton({ onPress }) {
  return (
    <>
      <Pressable onPress={onPress}>
        <Container>
          <AntDesign name="plus" size={26} color={Colors.primaryLight} />
        </Container>
      </Pressable>
    </>
  );
}
