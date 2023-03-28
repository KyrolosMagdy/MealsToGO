import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp, ParamListBase } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Routes } from "../../utils/types/routes";
//  "./src/components/typography/text.component"
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavouriteContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/loction/location.context";
import { ResturantsContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { SettingsNavigator } from "./settings.navigator";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const TAB_ICON: { [k in Routes]: string } = {
  resturants: "restaurant",
  map: "map",
  settings: "settings",
};

const tabBarIcon = ({
  iconName,
  size,
  color,
}: {
  iconName: string;
  size: number;
  color: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Ionicons name={iconName} size={size} color={color} />;
};

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }: { size: number; color: string }) =>
      tabBarIcon({ iconName, size, color }),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
  // tabBarActiveTintColor: "tomato",
  // tabBarInactiveTintColor: "gray",
};

const Tab = createBottomTabNavigator();

export const AppNavigator = (): React.ReactElement => {
  return (
    <FavouriteContextProvider>
      <LocationContextProvider>
        <ResturantsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => screenOptions({ route })}
          >
            <Tab.Screen
              name={Routes.resturants}
              component={RestaurantsNavigator}
            />
            <Tab.Screen name={Routes.map} component={MapScreen} />
            <Tab.Screen name={Routes.settings} component={SettingsNavigator} />
          </Tab.Navigator>
        </ResturantsContextProvider>
      </LocationContextProvider>
    </FavouriteContextProvider>
  );
};
