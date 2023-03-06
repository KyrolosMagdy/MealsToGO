/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react";
import { Resturant } from "../../utils/types/Resturant";

export interface FavouriteContextState {
  favourites: Resturant[];
  addToFavourites: ({ restaurant }: { restaurant: Resturant }) => void;
  removeFavourite: ({ restaurant }: { restaurant: Resturant }) => void;
}

const defaultValue: FavouriteContextState = {
  favourites: [],
  addToFavourites: () => {},
  removeFavourite: () => {},
};

export const FavouriteContext = createContext(defaultValue);

export const FavouriteContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  const [favourites, setFavourites] = useState<Resturant[]>([]);

  const add = ({ restaurant }: { restaurant: Resturant }) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = ({ restaurant }: { restaurant: Resturant }) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFavourite: remove,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
