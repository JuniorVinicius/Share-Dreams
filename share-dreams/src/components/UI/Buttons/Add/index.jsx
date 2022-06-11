import { AntDesign } from "@expo/vector-icons";
import { Container } from "./style";
import { Colors } from "./../../../../constants";

export default function AddButton({ onPress }) {
  return (
    <>
      <Container>
        <AntDesign name="plus" size={26} color={Colors.primaryLight} />
      </Container>
    </>
  );
}
