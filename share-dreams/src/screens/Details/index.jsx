import React, { useState } from "react";
import { ScrollView } from "react-native";
import {
  BackgroundImage,
  OwnerLabel,
  SimpleButton,
  TravelerPic,
} from "../../components";
import { Colors } from "../../constants";
import {
  Container,
  DescriptionContainer,
  Description,
  DescriptionOutContainer,
  GeneralText,
  Title,
  ButtonContainer,
} from "./style";

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
          colorStarInnactive={Colors.primaryLight}
          colorStarActive={Colors.primaryBlue}
          onPress={favoriteHandler}
          isActive={isFavorited}
        />

        <Container>
          <OwnerLabel size={50} />

          <DescriptionOutContainer>
            <Title>Travel Destianation</Title>
            <DescriptionContainer>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                unde cumque laboriosam architecto, quaerat numquam perferendis
                inventore? Quasi animi quia fugit officiis eveniet nemo tempora
                minima dolorem. Ea, alias eius.
              </Description>
            </DescriptionContainer>

            <GeneralText>TRAVEL DAY: 00/00/00</GeneralText>
            <GeneralText>TRAVEL RETURN DAY: 00/00/00</GeneralText>
            <GeneralText>QTD/P: 2/3</GeneralText>
            <GeneralText>TRAVEL PRICE: $0.00</GeneralText>
            <GeneralText>VALUE/P: $0.00</GeneralText>
          </DescriptionOutContainer>
          <Title>Travelers</Title>
          <ScrollView horizontal={true}>
            <TravelerPic name="Chris" isOwner={true} />
            <TravelerPic isAddTraveler={true} name="Add Traveler" />
          </ScrollView>
          <ButtonContainer>
            <SimpleButton title="Sign Up" />
          </ButtonContainer>
        </Container>
      </ScrollView>
    </>
  );
}
