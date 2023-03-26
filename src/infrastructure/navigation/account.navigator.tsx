import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../../utils/types/routes";
import { AccountScreen } from "../../features/account/screens/accountScreen";
import { LoginScreen } from "../../features/account/screens/loginScreen";
import { RegisterScreen } from "../../features/account/screens/registerScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name={Routes.mainLogin} component={AccountScreen} />
      <Stack.Screen name={Routes.login} component={LoginScreen} />
      <Stack.Screen name={Routes.register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
