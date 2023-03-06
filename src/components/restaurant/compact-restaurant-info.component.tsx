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
}

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({
  restaurant,
}: CompactRestaurantProps): React.ReactElement => {
  const Image = isAndroid ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
