import { Pressable } from "react-native";
import { Colors } from "../../../constants";
import Label from "../../Label";
import { ActionIconButton } from "../../UI";

import {
  Container,
  Description,
  DetailsConteiner,
  ImageConteiner,
  Image,
  LabelOutConteiner,
  SimpleText,
  TextConteiner,
  InnerConteiner,
  TextOutConteiner,
  Title,
  TitleContainer,
  TitleInnerContainer,
} from "./style";

const Travel = ({
  id,
  image,
  title,
  description,
  travel_price,
  travelers_max_quantity,
  travelers_acepted,
  travel_date,
  status,
  onPress,
  typeActionButton,
  onPressActionButton,
  isFavorite,
  notHasLabel
}) => {
  return (
    <>
      <Pressable onPress={onPress}>
        <Container>
          <ImageConteiner>
            <Image source={{ uri: image }} />
          </ImageConteiner>
          <DetailsConteiner>
            <TitleContainer>
              <TitleInnerContainer>
                <Title ellipsizeMode="tail" numberOfLines={1}>
                  {title}
                </Title>
              </TitleInnerContainer>

              <ActionIconButton
                size={25}
                borderColor={Colors.primaryGray}
                type={typeActionButton}
                onPress={onPressActionButton}
                isFavorite={isFavorite}
                innerStarColor={Colors.primaryBlue}
              />
            </TitleContainer>
            <LabelOutConteiner>
              {notHasLabel || !status ? null : <Label type={status} />}
              
            </LabelOutConteiner>
            <TextOutConteiner>
              <InnerConteiner>
                <TextConteiner>
                  <Description ellipsizeMode="tail" numberOfLines={1}>
                    {description}
                  </Description>
                </TextConteiner>
                <TextConteiner>
                  <SimpleText>
                    QTD/P:{" "}
                    {travelers_acepted.length + "/" + travelers_max_quantity}
                  </SimpleText>
                </TextConteiner>
              </InnerConteiner>
              <InnerConteiner>
                <TextConteiner>
                  <SimpleText>Travel Day: {travel_date}</SimpleText>
                </TextConteiner>
                <TextConteiner>
                  <SimpleText>
                    Value/P: $
                    {(travel_price / travelers_max_quantity).toFixed(2)}
                  </SimpleText>
                </TextConteiner>
              </InnerConteiner>
            </TextOutConteiner>
          </DetailsConteiner>
        </Container>
      </Pressable>
    </>
  );
};

export default Travel;
