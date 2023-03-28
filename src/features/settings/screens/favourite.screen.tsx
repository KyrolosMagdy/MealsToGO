import React, { useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TouchableOpacity, Text } from "react-native";

import { StyledSafeAreaView } from "../../../components/utility/safeAreaComponent";
import { FavouriteContext } from "../../../services/favourites/favourites.context";
import { NoFavouritesArea } from "../components/styledFavouriteScreen";
import { ResturantList } from "../../resturants/screens/resturantsStyled";
import { NavigationScreenProp } from "react-navigation";
import { Routes } from "../../../utils/types/routes";
import { ResturantInfoCard } from "../../resturants/components/resturantInfoCard.component";

export interface FavouriteScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export const FavouriteScreen = ({
  navigation,
}: FavouriteScreenProps): React.ReactElement => {
  const { favourites } = useContext(FavouriteContext);
  const { navigate } = navigation;

  return favourites.length ? (
    <SafeAreaProvider>
      <StyledSafeAreaView>
        <ResturantList
          data={favourites}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          renderItem={({ item }: { item: Resturant }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigate(Routes.restaurantDetails, {
                    restaurant: item,
                  })
                }
              >
                <ResturantInfoCard resturant={item} />
              </TouchableOpacity>
            );
          }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          keyExtractor={(item: any) => item.name}
        />
      </StyledSafeAreaView>
    </SafeAreaProvider>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
