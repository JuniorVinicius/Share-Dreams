import styled from "styled-components/native";
import { Colors } from "../../constants";

export const ContainerTraveler = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const ProfileContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: ${Colors.primaryGray};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({hasPendingInvite}) => hasPendingInvite ? '2px solid ' + Colors.primaryRed : 'none'};
`;

export const Profile = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;

export const TravelerName = styled.Text`
  font-size: 12px;
  color: ${Colors.primaryDark};
`;
