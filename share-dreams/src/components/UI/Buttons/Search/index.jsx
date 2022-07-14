import React from "react";
import { Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Colors } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";

export default function SearchButton() {
  const navigate = useNavigation();
  const handlePress = () => {
    navigate.navigate("Search");
  };
  return (
    <>
      <Pressable onPress={handlePress}>
        <FontAwesome5 name="search" size={18} color={Colors.primaryLight} />
      </Pressable>
    </>
  );
}
