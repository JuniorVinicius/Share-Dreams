import React, { useState } from "react";
import { ScrollView } from "react-native";
import { BackgroundImage, OwnerLabel } from "../../components";
import { Colors } from "../../constants";
import { Container } from "./style";
export default function Details() {
  const [isFavorited, setIsFavorited] = useState(false);

  const favoriteHandler = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <>
      <ScrollView>
        <BackgroundImage
          sizeStar={32}
          colorStarInnactive={Colors.primaryBlue}
          colorStarActive={Colors.primaryBlue}
          onPress={favoriteHandler}
          isActive={isFavorited}
        />

        <Container>
          <OwnerLabel />
        </Container>
      </ScrollView>
    </>
  );
}
