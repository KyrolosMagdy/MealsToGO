import React, { useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { MD2Colors } from "react-native-paper";

import { ResturantInfoCard } from "../components/resturantInfoCard.component";
import { Loading, LoadingContainer, ResturantList } from "./resturantsStyled";
import { StyledSafeAreaView } from "../../../components/utility/safeAreaComponent";
import { Resturant } from "../../../utils/types/Resturant";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

export const ResturantsScreen = (): React.ReactElement => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

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
          renderItem={({ item }: { item: Resturant }) => {
            return <ResturantInfoCard resturant={item} />;
          }}
          keyExtractor={(item: any) => item.name}
        />
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
};
