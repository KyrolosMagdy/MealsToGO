import styled from "styled-components";
import { View, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";

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

export const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
