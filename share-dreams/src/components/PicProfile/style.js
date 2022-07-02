import styled from "styled-components/native";

export const ImageConteiner = styled.View`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-radius: ${({size}) => size/2}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
