import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";

import { FavouriteContext } from "../../services/favourites/favourites.context";
import { FavouriteButton } from "./StyledFavouriteButton";
import { Resturant } from "../../utils/types/Resturant";

export interface FavouriteProps {
  restaurant: Resturant;
}

export const Favourite = ({
  restaurant,
}: FavouriteProps): React.ReactElement => {
  const { favourites, addToFavourites, removeFavourite } =
    useContext(FavouriteContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  const handleClick = () => {
    if (isFavourite) {
      removeFavourite({ restaurant });
    } else {
      addToFavourites({ restaurant });
    }
  };

  return (
    <FavouriteButton onPress={handleClick}>
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
