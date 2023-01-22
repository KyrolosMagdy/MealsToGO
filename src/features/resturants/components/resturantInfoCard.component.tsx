import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { Title } from "./resturantInfoCardStyledComponents";

import { Resturant } from "../../../utils/types/Resturant";

export interface ResturantInfoProps {
  resturant: Resturant;
}

export const ResturantInfoCard = ({
  resturant = {} as Resturant,
}: ResturantInfoProps): React.ReactElement => {
  const {
    name = "Some Resturant",
    icon = "",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = resturant;

  return (
    <Card elevation={5}>
      <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Text variant="bodyMedium">{address}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cover: {
    padding: 10,
    backgroundColor: "white",
  },
});