import React from "react";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Pressable } from "react-native";
import { Container, Image } from "./style";

export default function BackgroundImage({
  sizeStar,
  colorStarActive,
  colorStarInnactive,
  onPress,
  isActive,
}) {
  return (
    <>
      <Container>
        <Image source={require("../../../assets/images/image-test.png")} />
      </Container>

      {isActive ? (
        <Pressable style={styles.icon} onPress={onPress}>
          <Entypo name="star" size={sizeStar} color={colorStarActive} />
        </Pressable>
      ) : (
        <Pressable style={styles.icon} onPress={onPress}>
          <Entypo
            name="star"
            size={sizeStar}
            color={colorStarInnactive}
          />
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});
