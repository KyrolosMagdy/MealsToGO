import styled from "styled-components";
import SafeAreaView from "react-native-safe-area-view";
import { StatusBar } from "react-native";

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
