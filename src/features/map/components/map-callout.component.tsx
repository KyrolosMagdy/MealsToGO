import React from "react";
import { View } from "react-native";

import { Resturant } from "../../../utils/types/Resturant";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export interface MapCalloutProps {
  restaurant: Resturant;
}

export const MapCalloutComponent = ({
  restaurant,
}: MapCalloutProps): React.ReactElement => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};
