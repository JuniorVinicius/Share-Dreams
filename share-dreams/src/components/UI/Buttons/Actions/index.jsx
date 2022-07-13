import { Pressable } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

export default function ActionIconButton({
  size,
  onPress,
  borderColor,
  innerStarColor,
  type,
  isFavorite,
}) {
  const getIcon = () => {
    if (type === "favorite") {
      if (isFavorite) {
        return (
          <Pressable onPress={onPress}>
            <Entypo name="star" size={size} color={innerStarColor} />
          </Pressable>
        );
      }
      return (
        <Pressable onPress={onPress}>
          <Entypo name="star-outlined" size={size} color={borderColor} />
        </Pressable>
      );
    }
    return (
      <Pressable onPress={onPress}>
        <MaterialCommunityIcons
          name="alpha-x-circle-outline"
          size={size}
          color={borderColor}
        />
      </Pressable>
    );
  };

  const icons = getIcon();

  return <>{icons}</>;
}
