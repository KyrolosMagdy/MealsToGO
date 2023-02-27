import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { ResturantInfoCard } from "../components/resturantInfoCard.component";

import { StyledSafeAreaView } from "../../../components/utility/safeAreaComponent";
import { Resturant } from "../../../utils/types/Resturant";

export const RestaurantDetailScreen = ({ route }: { route: any }) => {
  const { restaurant } = route.params;
  return (
    <SafeAreaProvider>
      <StyledSafeAreaView>
        <ResturantInfoCard resturant={restaurant} />
        <ScrollView>
          <List.AccordionGroup>
            <List.Accordion
              title="Breakfast"
              id="1"
              // eslint-disable-next-line react/no-unstable-nested-components
              left={(props) => <List.Icon {...props} icon="bread-slice" />}
            >
              <List.Item title="Eggs Benedict" />
              <List.Item title="Classic Breakfast" />
            </List.Accordion>
            <List.Accordion
              title="Launch"
              id="2"
              // eslint-disable-next-line react/no-unstable-nested-components
              left={(props) => <List.Icon {...props} icon="hamburger" />}
            >
              <List.Item title="Burger w/ Fries" />
              <List.Item title="Steak Sandwich" />
              <List.Item title="Mushroom Soup" />
            </List.Accordion>
            <List.Accordion
              title="Dinner"
              id="3"
              // eslint-disable-next-line react/no-unstable-nested-components
              left={(props) => <List.Icon {...props} icon="food-variant" />}
            >
              <List.Item title="Spaghetti Bolognese" />
              <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
              <List.Item title="Steak Frites" />
            </List.Accordion>
            <List.Accordion
              title="Drinks"
              id="4"
              // eslint-disable-next-line react/no-unstable-nested-components
              left={(props) => <List.Icon {...props} icon="cup" />}
            >
              <List.Item title="Coffee" />
              <List.Item title="Tea" />
              <List.Item title="Modelo" />
              <List.Item title="Coke" />
              <List.Item title="Fanta" />
            </List.Accordion>
          </List.AccordionGroup>
        </ScrollView>
      </StyledSafeAreaView>
    </SafeAreaProvider>
  );
};
