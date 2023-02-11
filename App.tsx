/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  NavigationContainer,
  RouteProp,
  ParamListBase,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { Text } from "./src/components/typography/text.component";
import { ResturantsScreen } from "./src/features/resturants/screens/resturants.screen";
import { theme } from "./src/infrastructure/theme";
import { Routes } from "./src/utils/types/routes";

const TAB_ICON: { [k in Routes]: string } = {
  resturants: "restaurant",
  map: "map",
  settings: "settings",
};

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

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
  };
  // tabBarActiveTintColor: "tomato",
  // tabBarInactiveTintColor: "gray",
};

const Tab = createBottomTabNavigator();

const Tabs = (): React.ReactElement => {
  return (
    <Tab.Navigator screenOptions={({ route }) => screenOptions({ route })}>
      <Tab.Screen name={Routes.resturants} component={ResturantsScreen} />
      <Tab.Screen name={Routes.map} component={MapScreen} />
      <Tab.Screen name={Routes.settings} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [owsaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!owsaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
