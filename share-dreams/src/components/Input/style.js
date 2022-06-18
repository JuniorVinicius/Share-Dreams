import styled from "styled-components/native";
import { Colors } from "../../constants";

export const Container = styled.View`
  width: ${({ width }) => (!!width ? width + "%" : "100%")};
  height: ${({ height }) => (!!height ? height : 60)}px;
  background: ${Colors.primaryLight};
  border-radius: 10px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${Colors.secondLight200};
  margin: 5px 0px;
`;

export const Input = styled.TextInput`
  width: ${({ width }) => (!!width ? width - 10 + "%" : "90%")};
  height: ${({ height }) => (!!height ? height - 10 : 50)}px;
`;
