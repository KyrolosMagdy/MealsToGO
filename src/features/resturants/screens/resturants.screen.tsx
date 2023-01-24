import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { Searchbar } from "react-native-paper";

import { ResturantInfoCard } from "../components/resturantInfoCard.component";
import {
  StyledSafeAreaView,
  StyledSearchWrapper,
  StyledListWrapper,
} from "./resturantsStyled";

export const ResturantsScreen = (): React.ReactElement => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeAreaProvider>
      <StyledSafeAreaView>
        <StyledSearchWrapper>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </StyledSearchWrapper>
        <StyledListWrapper>
          <ResturantInfoCard />
        </StyledListWrapper>
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
};
