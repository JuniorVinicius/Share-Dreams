import { Text } from "react-native";

import {
  Container,
  Description,
  DetailsConteiner,
  ImageConteiner,
  Image,
  LabelOutConteiner,
  SimpleText,
  TextConteiner,
  TextOutConteiner,
  Title,
  TitleContainer,
} from "./style";

const Travel = () => {
  return (
    <>
      <Container>
        <ImageConteiner>
            <Image source={require('../../../../assets/images/image-test.png')} />
        </ImageConteiner>
      </Container>
    </>
  );
};

export default Travel;
