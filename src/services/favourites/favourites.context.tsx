/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect } from "react";
import { Resturant } from "../../utils/types/Resturant";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const saveFavourites = async (value: Resturant[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = ({ restaurant }: { restaurant: Resturant }) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = ({ restaurant }: { restaurant: Resturant }) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

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
