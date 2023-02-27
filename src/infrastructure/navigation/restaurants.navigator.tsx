import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { ResturantsScreen } from "../../features/resturants/screens/resturants.screen";
import { RestaurantDetailScreen } from "../../features/resturants/screens/restaurant-details.screen";
import { Routes } from "../../utils/types/routes";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = (): React.ReactElement => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
      }}
    >
      <RestaurantsStack.Screen
        name="Restaurants Screen"
        component={ResturantsScreen}
      />
      <RestaurantsStack.Screen
        name={Routes.restaurantDetails}
        component={RestaurantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
