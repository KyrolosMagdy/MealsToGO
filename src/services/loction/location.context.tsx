import React, { useState, useEffect, createContext } from "react";
import { LocationInfo, LocationKeys } from "../../utils/types/Location";

import { locationRequest, locationTransform } from "./location.service";

export interface LocationContextProps {
  isLoading: boolean;
  error: string;
  location: LocationInfo;
  keyword: string;
}

const defaultValue: LocationContextProps = {
  isLoading: false,
  error: "",
  location: {} as LocationInfo,
  keyword: "San Francisco",
};

export const LocationContext = createContext({
  ...defaultValue,
  search: ({ searchKeyword }: { searchKeyword: string }) =>
    console.log("searching"),
});

export const LocationContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  const [values, setValues] = useState<LocationContextProps>(defaultValue);

  const handleValueChange = ({
    key,
    value,
  }: {
    key: keyof LocationContextProps;
    value: string | boolean | number | LocationKeys;
  }) => {
    setValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onSearch = ({ searchKeyword }: { searchKeyword: string }) => {
    handleValueChange({ key: "isLoading", value: true });
    handleValueChange({ key: "keyword", value: searchKeyword });
  };

  useEffect(() => {
    if (!values.keyword?.length) {
      return;
    }
    locationRequest({ searchTerm: values.keyword.toLowerCase() })
      .then((res: any) => locationTransform(res))
      .then((result) => {
        handleValueChange({ key: "location", value: result as LocationKeys });
      })
      .catch((err) => {
        handleValueChange({ key: "error", value: err });
      })
      .finally(() => {
        handleValueChange({ key: "isLoading", value: false });
      });
  }, [values.keyword]);

  return (
    <LocationContext.Provider value={{ ...values, search: onSearch }}>
      {children}
    </LocationContext.Provider>
  );
};
