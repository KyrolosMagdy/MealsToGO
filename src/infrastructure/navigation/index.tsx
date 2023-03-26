import React, { useContext } from "react";
import { authenticationContext } from "../../services/authentication/authentication.context";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = (): React.ReactElement => {
  const { user } = useContext(authenticationContext);
  return (
    <NavigationContainer>
      {user?.accessToken ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
