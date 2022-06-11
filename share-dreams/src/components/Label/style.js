import styled from "styled-components/native";
import { Colors } from "../../constants";

const types = {
  accepted: "Accepted",
  rejected: "Rejected",
  pending: "Pending",
  adm: "Adm",
};

export const Container = styled.View`
  display: flex;
  width: 80px;
  height: 20px;
  background: ${({ type }) =>
    type === types.accepted
      ? Colors.primaryGreen
      : type === types.rejected
      ? Colors.primaryRed
      : type === types.pending
      ? Colors.primaryYellow
      : type === types.adm
      ? Colors.primaryBlue
      : Colors.primaryDark};

  border-radius: 10px;
  padding: 2px;
`;

export const Text = styled.Text`
  font-size: 10px;
  color: ${({ type }) =>
    type !== types.pending ? Colors.primaryLight : Colors.primaryDark};
  text-align: center;
  font-weight: bold;
`;
