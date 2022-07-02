import styled from "styled-components/native";
import { Colors } from "../../constants";

export const Container = styled.View`
  width: 100%;
  height: 70px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${Colors.primaryGray};
  padding: 10px;
`;



export const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding-left: 10px;

`;

export const Author = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Bio = styled.Text``;

export const Group = styled.View`
  display: flex;
  flex-direction: row;
`;