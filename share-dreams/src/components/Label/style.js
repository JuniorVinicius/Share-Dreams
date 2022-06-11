import styled from "styled-components/native";

const types = {
    accepted: "Accepted",
    rejected: "Rejected",
    pending: "Pending",
    adm: "Adm"
}

export const Container = styled.View`
  display: flex;
  width: 80px;
  height: 20px;
  background: ${({ type }) =>
    type === types.accepted
      ? "#5EFAA5"
      : type === types.rejected
      ? "#FA5E5E"
      : type === types.pending
      ? "#ffc300"
      : type === types.adm
      ? "#005691"
      : "#000"};

  border-radius: 10px;
  padding: 2px;
`;

export const Text = styled.Text`
  font-size: 10px;
  color: ${({ type }) =>
    type !== types.pending
      ? "#fff"
      : '#000'};
  text-align: center;
  font-weight: bold;
`;
