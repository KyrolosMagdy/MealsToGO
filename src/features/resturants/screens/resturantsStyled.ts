import styled from "styled-components";
import { View, FlatList } from "react-native";

export const StyledSearchWrapper = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

export const StyledListWrapper = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
