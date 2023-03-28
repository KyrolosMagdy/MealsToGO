import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Routes } from "../../utils/types/routes";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouriteScreen } from "../../features/settings/screens/favourite.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = (): React.ReactElement => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: "screen",
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name={Routes.settings}
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        name={Routes.favourites}
        component={FavouriteScreen}
      />
    </SettingsStack.Navigator>
  );
};
