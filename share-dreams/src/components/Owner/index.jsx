import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Container, Author, Bio, Group, InfoContainer } from "./style";
import PicProfile from "../PicProfile";

export default function OwnerLabel({ size, image, name, description }) {
  return (
    <>
      <Container>
        <Group>
          <PicProfile  size={size} image={image} />
          <InfoContainer>
            <Author>{name}</Author>
            <Bio>{description}</Bio>
          </InfoContainer>
        </Group>
        <Ionicons name="chatbubbles-outline" size={32} color="black" />
      </Container>
    </>
  );
}
