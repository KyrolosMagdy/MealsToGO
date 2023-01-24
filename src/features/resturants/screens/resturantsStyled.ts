import styled from "styled-components";
import SafeAreaView from "react-native-safe-area-view";
import { View, StatusBar } from "react-native";

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margintop: ${StatusBar.currentHeight}px`};
`;

export const StyledSearchWrapper = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

export const StyledListWrapper = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[3]};
`;
