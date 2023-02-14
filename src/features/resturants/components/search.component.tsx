import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/loction/location.context";
import { StyledSearchWrapper } from "../screens/resturantsStyled";

export const Search = (): React.ReactElement => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState<string>(keyword);

  return (
    <StyledSearchWrapper>
      <Searchbar
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
