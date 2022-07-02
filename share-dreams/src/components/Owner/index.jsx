import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Container, Author, Bio, Group, InfoContainer } from "./style";
import PicProfile from "../PicProfile";

export default function OwnerLabel({ size }) {
  return (
    <>
      <Container>
        <Group>
          <PicProfile  size={size} />
          <InfoContainer>
            <Author>Chris</Author>
            <Bio>Let's go!</Bio>
          </InfoContainer>
        </Group>
        <Ionicons name="chatbubbles-outline" size={32} color="black" />
      </Container>
    </>
  );
}
