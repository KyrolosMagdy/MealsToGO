import React, { useState, createContext, useEffect, useContext } from "react";
import { Resturant } from "../../utils/types/Resturant";
import { LocationContext } from "../loction/location.context";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export interface RestarantsDefaultValues {
  restaurants: Resturant[];
  isLoading: boolean;
  error: string;
}

export const RestaurantsContext = createContext<RestarantsDefaultValues>({
  restaurants: [],
  isLoading: false,
  error: "",
});

export const ResturantsContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [restaurants, setRestaurants] = useState<Resturant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { location } = useContext(LocationContext);

  const retreveRestaurants = (locationString: string) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest({ location: locationString })
        .then((res: any) => {
          const restaurantsT = restaurantsTransform({ results: res.results });
          return restaurantsT;
        })
        .then((res) => {
          setRestaurants(res);
        })
        .catch((err: string) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retreveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
