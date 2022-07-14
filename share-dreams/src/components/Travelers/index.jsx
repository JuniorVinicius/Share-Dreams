import { Image, Text, Pressable } from "react-native";
import {
  Profile,
  TravelerName,
  ProfileContainer,
  ContainerTraveler,
} from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "./../../constants/index";

export default function TravelerPic({
  name,
  profile,
  Container,
  isOwner,
  onPress,
  isAddTraveler,
  image,
  pendingInviteQtd,
  hasPendingInvite,
}) {
  return (
    <>
      <Pressable onPress={onPress}>
        <ContainerTraveler>
          <ProfileContainer hasPendingInvite={hasPendingInvite}>
            {isAddTraveler ? (
              <>
                <AntDesign
                  name="adduser"
                  size={32}
                  color={hasPendingInvite ? Colors.primaryRed : "black"}
                />
                {hasPendingInvite && (
                  <Text style={{ color: Colors.primaryRed }}>
                    {pendingInviteQtd}
                  </Text>
                )}
              </>
            ) : (
              <Profile source={{ uri: image }} />
            )}
          </ProfileContainer>
          <TravelerName>{isOwner ? name + "(author)" : name}</TravelerName>
        </ContainerTraveler>
      </Pressable>
    </>
  );
}
