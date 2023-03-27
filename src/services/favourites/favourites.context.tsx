/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect, useContext } from "react";

import { Resturant } from "../../utils/types/Resturant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authenticationContext } from "../authentication/authentication.context";

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
  const { user } = useContext(authenticationContext);
  console.log("userUid: ", user?.uid);
  const [favourites, setFavourites] = useState<Resturant[]>([]);

  const saveFavourites = async (value: Resturant[], uid: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async (uid: string) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      console.log("value: ", AsyncStorage.getAllKeys());
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
    if (user?.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user?.uid) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

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
