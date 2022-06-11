import Label from "../../Label";

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
} from "./style";

const Travel = () => {
  return (
    <>
      <Container>
        <ImageConteiner>
          <Image source={require("../../../../assets/images/image-test.png")} />
        </ImageConteiner>
        <DetailsConteiner>
          <TitleContainer>
            <Title>Titulo do Travel</Title>
          </TitleContainer>
          <LabelOutConteiner>
            <Label type="Rejected" />
          </LabelOutConteiner>
          <TextOutConteiner>
            <InnerConteiner>
              <TextConteiner>
                <Description ellipsizeMode='tail' numberOfLines={1}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus deleniti pariatur ullam! Quis vel officia totam sed voluptatibus odit, culpa, consectetur dignissimos iste tempore quia doloremque blanditiis, alias ullam enim?</Description>
              </TextConteiner>
              <TextConteiner>
                <SimpleText>QTD/P: 0/0</SimpleText>
              </TextConteiner>
            </InnerConteiner>
            <InnerConteiner>
              <TextConteiner>
                <SimpleText>Travel Day: 00/00/00</SimpleText>
              </TextConteiner>
              <TextConteiner>
                <SimpleText>Value/P: $0.00</SimpleText>
              </TextConteiner>
            </InnerConteiner>
          </TextOutConteiner>
        </DetailsConteiner>
      </Container>
    </>
  );
};

export default Travel;
