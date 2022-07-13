import styled from "styled-components/native";
import { Colors } from "../../constants";



export const Container = styled.View`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 12px;
`

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.primaryGray}
`