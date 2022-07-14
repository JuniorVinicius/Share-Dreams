import React, { useState, useContext, useEffect } from "react";
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
import { TravelContext } from "../../context/travelContext";
import { MOCK_ALL_TRAVELS, MOCK_TRAVELERS, MOCK_TRAVELS, MOCK_USER } from "../../data";

export default function Details() {
  const [isFavorited, setIsFavorited] = useState(false);
  const [travelData, setTravelData] = useState();
  const [owner, setOwner] = useState();
  const [isCancelButton, setIsCancelButton] = useState(false);
  const { travelId, setFavorites, favorites, allTravels } = useContext(TravelContext);

  const favoriteHandler = () => {
    if (!isFavorited) {
      setFavorites((prev) => [travelId, ...prev]);
      setIsFavorited(!isFavorited);
    } else {
      setIsFavorited(!isFavorited);
      setFavorites((prev) => prev.filter((id) => id !== travelId));
    }
  };

  useEffect(() => {
    const data = allTravels.find((item) => item.id === travelId);
    const ownerData = MOCK_TRAVELERS.find((item) => item.id === data.author_id);
    setTravelData(data);
    setOwner(ownerData);

    if (favorites.includes(travelId)) {
      setIsFavorited(true);
    }

    let isApproved = false;

    if (
      data.travelers_acepted.includes(MOCK_USER.id) ||
      data.travelers_pending.includes(MOCK_USER.id) ||
      data.travelers_declined.includes(MOCK_USER.id)
    ) {
      isApproved = true;
    }

    if (ownerData.id === MOCK_USER.id || isApproved) {
      setIsCancelButton(true);
    }
  }, [travelId]);

  const TRAVELERS = travelData?.travelers_acepted.map((item) => {
    const traveler = MOCK_TRAVELERS.find((traveler) => traveler.id === item);
    if (traveler.id !== owner.id) {
      return (
        <TravelerPic
          key={traveler.id}
          image={traveler?.profile_picture}
          name={traveler?.name}
          isOwner={false}
        />
      );
    }
  });

  return (
    <>
      <ScrollView>
        <BackgroundImage
          sizeStar={32}
          colorStarInnactive={Colors.primaryLight}
          colorStarActive={Colors.primaryBlue}
          onPress={favoriteHandler}
          isActive={isFavorited}
          image={travelData?.image}
        />

        <Container>
          <OwnerLabel
            size={50}
            image={owner?.profile_picture}
            name={owner?.name}
            description={owner?.bio}
          />

          <DescriptionOutContainer>
            <Title>{travelData?.title}</Title>
            <DescriptionContainer>
              <Description>{travelData?.description}</Description>
            </DescriptionContainer>

            <GeneralText>TRAVEL DAY: {travelData?.travel_date}</GeneralText>
            <GeneralText>
              TRAVEL RETURN DAY: {travelData?.travel_return_date}
            </GeneralText>
            <GeneralText>
              QTD/P:{" "}
              {travelData?.travelers_acepted.length +
                "/" +
                travelData?.travelers_max_quantity}
            </GeneralText>
            <GeneralText>TRAVEL PRICE: ${travelData?.travel_price}</GeneralText>
            <GeneralText>
              VALUE/P: $
              {(
                travelData?.travel_price / travelData?.travelers_max_quantity
              ).toFixed(2)}
            </GeneralText>
          </DescriptionOutContainer>
          <Title>Travelers</Title>
          <ScrollView horizontal={true}>
            <TravelerPic
              image={owner?.profile_picture}
              name={owner?.name}
              isOwner={true}
            />
            {TRAVELERS}
            <TravelerPic isAddTraveler={true} name="Add Traveler" />
          </ScrollView>
          <ButtonContainer>
            {isCancelButton ? (
              <SimpleButton title="Cancel" />
            ) : (
              <SimpleButton title="Sign Up" />
            )}
          </ButtonContainer>
        </Container>
      </ScrollView>
    </>
  );
}
