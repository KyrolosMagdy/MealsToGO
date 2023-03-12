import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/loction/location.context";
import { StyledSearchWrapper } from "../screens/resturantsStyled";

export interface SearchProps {
  isFavouritesToggle: boolean;
  onFavouritesToggle: () => void;
}

export const Search = ({
  isFavouritesToggle,
  onFavouritesToggle,
}: SearchProps): React.ReactElement => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState<string>(keyword);

  return (
    <StyledSearchWrapper>
      <Searchbar
        icon={isFavouritesToggle ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onChangeText={(e) => {
          setSearchKeyword(e);
        }}
        onSubmitEditing={() => {
          search({ searchKeyword });
        }}
      />
    </StyledSearchWrapper>
  );
};
