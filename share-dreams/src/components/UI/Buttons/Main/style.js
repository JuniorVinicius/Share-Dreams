import styled from "styled-components/native";
import { Colors } from "./../../../../constants/index";

export const Container = styled.View`
  width: 150px;
  height: 55px;
  background: ${({ type }) =>
    type !== "Cancel" ? Colors.primaryBlue : Colors.primaryRed};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: ${Colors.primaryLight};
  font-size: 16px;
  font-weight: bold;
`;
