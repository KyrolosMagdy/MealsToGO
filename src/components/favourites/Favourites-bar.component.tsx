import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import { FavouritesWrapper } from "./StyledFavouriteBar";
import { Resturant } from "../../utils/types/Resturant";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/Spacer.Component";
import { Routes } from "../../utils/types/routes";
import { Text } from "../typography/text.component";

export interface FavouritesBarProps {
  favourites: Resturant[];
  onNavigate: (
    route: string,
    { restaurant }: { restaurant: Resturant }
  ) => void;
}

export const FavouritesBar = ({
  favourites,
  onNavigate,
}: FavouritesBarProps) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => {
                  onNavigate(Routes.restaurantDetails, {
                    restaurant,
                  });
                }}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
