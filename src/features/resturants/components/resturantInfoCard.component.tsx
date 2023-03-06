import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import {
  Icon,
  StyledCardCover,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
  ResturantCard,
} from "./resturantInfoCardStyledComponents";
import { Resturant } from "../../../utils/types/Resturant";
import star from "../../../assets/start";
import open from "../../../assets/open";
// import { Spacer } from "../../../components/spacer/Spacer.Component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";

export interface ResturantInfoProps {
  resturant: Resturant;
}

export const ResturantInfoCard = ({
  resturant = {} as Resturant,
}: ResturantInfoProps): React.ReactElement => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
    placeId,
  } = resturant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <ResturantCard elevation={5}>
      <Favourite restaurant={resturant} />
      <StyledCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, index) => (
                <SvgXml
                  xml={star}
                  width={20}
                  height={20}
                  key={`star-${placeId}-${index}`}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              {/* <Spacer position="left" size="medium"> */}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              {/* </Spacer> */}
              <Icon source={{ uri: icon }} />
              {/* <Spacer position="left" size="medium" /> */}
              {/* <Spacer position="left" size="medium" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}{" "}
              <Spacer position="left" size="medium" />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} /> */}
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </Card.Content>
    </ResturantCard>
  );
};
