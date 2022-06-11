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
        return <Entypo name="star" size={size} color={innerStarColor} />;
      }
      return <Entypo name="star-outlined" size={size} color={borderColor} />;
    }
    return (
      <MaterialCommunityIcons
        name="alpha-x-circle-outline"
        size={size}
        color={borderColor}
      />
    );
  };

  const icons = getIcon();

  return <>{icons}</>;
}
