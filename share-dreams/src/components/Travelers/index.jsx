import { Image, Text } from "react-native";
import { Profile, TravelerName, ProfileContainer, ContainerTraveler } from "./style";
import { AntDesign } from "@expo/vector-icons";

export default function TravelerPic({
  name,
  profile,
  Container,
  isOwner,
  onPress,
  isAddTraveler,
}) {
  return (
    <>
      <ContainerTraveler>
        <ProfileContainer>
          {isAddTraveler ? (
            <AntDesign name="adduser" size={32} color="black" />
          ) : (
            <Profile source={require("../../../assets/images/author-test.png")} />
          )}
        </ProfileContainer>
        <TravelerName>{isOwner ? name + "(author)" : name}</TravelerName>
      </ContainerTraveler>
    </>
  );
}
