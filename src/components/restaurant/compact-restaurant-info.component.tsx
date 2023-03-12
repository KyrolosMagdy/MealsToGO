/* eslint-disable prettier/prettier */
import React from "react";
import { Platform } from "react-native";

import { Text } from "../typography/text.component";
import { Resturant } from "../../utils/types/Resturant";
import {
  CompactImage,
  CompactWebview,
  Item,
} from "./StyledCompactRestaurantInfo";

export interface CompactRestaurantProps {
  restaurant: Resturant;
  isMap?: boolean;
}

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({
  restaurant,
  isMap,
}: CompactRestaurantProps): React.ReactElement => {
  const Image = (isAndroid && isMap) ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
