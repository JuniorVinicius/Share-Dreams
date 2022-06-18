import React from "react";
import { Pressable } from "react-native";
import { Container, TextButton } from "./style";

export default function SimpleButton({ onPress, title }) {
  return (
    <Pressable onPress={onPress}>
      <Container>
        <TextButton>{title}</TextButton>
      </Container>
    </Pressable>
  );
}
