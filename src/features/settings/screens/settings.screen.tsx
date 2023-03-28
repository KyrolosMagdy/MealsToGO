import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationScreenProp } from "react-navigation";
import { Spacer } from "../../../components/spacer/Spacer.Component";
import { Text } from "../../../components/typography/text.component";

import { StyledSafeAreaView } from "../../../components/utility/safeAreaComponent";
import { authenticationContext } from "../../../services/authentication/authentication.context";
import { Routes } from "../../../utils/types/routes";
import {
  AvatarContainer,
  SettingItem,
} from "../components/styledSettingScreen";

export interface SettingsScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const { onLogout, user } = useContext(authenticationContext);
  return (
    <SafeAreaProvider>
      <StyledSafeAreaView>
        <AvatarContainer>
          <Avatar.Icon
            size={80}
            icon="human"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: "#2182BD",
            }}
          />
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <List.Section>
          <SettingItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate(Routes.favourites)}
          />
          <SettingItem
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
          />
        </List.Section>
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
};
