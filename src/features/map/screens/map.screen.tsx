import React, { useState, useContext, useEffect } from "react";
import { Marker, Callout } from "react-native-maps";

import { StyledMap } from "./map.Styles";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/loction/location.context";
import { MapCalloutComponent } from "../components/map-callout.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { View } from "react-native";
import { Routes } from "../../../utils/types/routes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MapScreen = ({ navigation }: { navigation: any }) => {
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const { navigate } = navigation;

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <StyledMap
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() => {
                  navigate(Routes.restaurantDetails, { restaurant });
                }}
              >
                <View>
                  <MapCalloutComponent restaurant={restaurant} />
                </View>
              </Callout>
            </Marker>
          );
        })}
      </StyledMap>
    </>
  );
};
