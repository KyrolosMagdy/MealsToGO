import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { MD2Colors } from "react-native-paper";

import { ResturantInfoCard } from "../components/resturantInfoCard.component";
import { Loading, LoadingContainer, ResturantList } from "./resturantsStyled";
import { StyledSafeAreaView } from "../../../components/utility/safeAreaComponent";
import { Resturant } from "../../../utils/types/Resturant";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { Routes } from "../../../utils/types/routes";

export const ResturantsScreen = ({
  navigation,
}: {
  navigation: any;
}): React.ReactElement => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { navigate } = navigation;

  return (
    <SafeAreaProvider>
      <StyledSafeAreaView>
        {isLoading && (
          <LoadingContainer>
            <Loading animating size={50} color={MD2Colors.blue300} />
          </LoadingContainer>
        )}
        <Search />
        <ResturantList
          data={restaurants}
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
          keyExtractor={(item: any) => item.name}
        />
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
};
