import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { Searchbar } from "react-native-paper";

import { ResturantInfoCard } from "../components/resturantInfoCard.component";
import { ResturantList, StyledSearchWrapper } from "./resturantsStyled";
import { StyledSafeAreaView } from "../../../components/utility/safeAreaComponent";
import { Resturant } from "../../../utils/types/Resturant";

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
        <ResturantList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
          ]}
          renderItem={() => <ResturantInfoCard resturant={{} as Resturant} />}
          keyExtractor={(item: any) => item.name}
        />
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
};
