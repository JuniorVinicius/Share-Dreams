import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  height: 130px;
  background: #fff;
  border-radius: 10px;
  padding: 5px;
  border: 2px solid #e6e6e6;
  flex-direction: row;
`;
export const ImageConteiner = styled.View`
  width: 40%;
  height: 100%;
`;
export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const DetailsConteiner = styled.View`
  width: 60%;
  padding: 5px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #494949;
`;
export const TitleContainer = styled.View`
  width: 100%;
`;

export const LabelOutConteiner = styled.View`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  padding-top: 5px;
  padding-right: 30px;
`;

export const TextOutConteiner = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
`;

export const InnerConteiner = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const TextConteiner = styled.View`
  display: flex;
  width: 45%;
  padding: 1.5px;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #494949;
`;

export const SimpleText = styled.Text`
  font-size: 12px;
  color: #494949;
`;
