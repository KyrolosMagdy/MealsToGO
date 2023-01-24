import React from "react";
import { Card, Text } from "react-native-paper";
import { Image, View } from "react-native";
import { SvgXml } from "react-native-svg";

import {
  Title,
  StyledCardCover,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
} from "./resturantInfoCardStyledComponents";
import { Resturant } from "../../../utils/types/Resturant";
import star from "../../../assets/start";
import open from "../../../assets/open";
import { SpacerComponent } from "../../../components/spacer/Spacer.Component";

export interface ResturantInfoProps {
  resturant: Resturant;
}

export const ResturantInfoCard = ({
  resturant = {} as Resturant,
}: ResturantInfoProps): React.ReactElement => {
  const {
    name = "Some Resturant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = resturant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <StyledCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map((_, index) => (
                <SvgXml xml={star} width={20} height={20} key={index} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="label" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <SpacerComponent variant="left.large" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <SpacerComponent variant="left.large" />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SectionEnd>
          </Section>

          <Address>{address}</Address>
        </Info>
      </Card.Content>
    </Card>
  );
};
