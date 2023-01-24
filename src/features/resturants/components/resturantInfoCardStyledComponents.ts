import styled from "styled-components/native";
import { Card, Text } from "react-native-paper";

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  padding-top: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const StyledCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
