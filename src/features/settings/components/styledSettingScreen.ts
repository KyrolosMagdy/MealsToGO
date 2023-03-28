import { List } from "react-native-paper";
import styled from "styled-components/native";

export const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled.View`
  align-items: center;
`;
