import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Container, Author, Bio, Group, InfoContainer } from "./style";
import PicProfile from "../PicProfile";
import { Pressable } from "react-native";

export default function OwnerLabel({
  size,
  image,
  name,
  description,
  onPress,
}) {
  return (
    <>
      <Pressable onPress={onPress}>
        <Container>
          <Group>
            <PicProfile size={size} image={image} />
            <InfoContainer>
              <Author>{name}</Author>
              <Bio>{description}</Bio>
            </InfoContainer>
          </Group>
          <Pressable onPress={onPress}>
            <Ionicons name="chatbubbles-outline" size={32} color="black" />
          </Pressable>
        </Container>
      </Pressable>
    </>
  );
}
