/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import camelize from "camelize";
import { LocationKeys, LocationResult } from "../../utils/types/Location";

import { locations } from "./location.mock";

export const locationRequest = ({ searchTerm }: { searchTerm: string }) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Not Found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: any[]) => {
  const formattedResponse: LocationResult = camelize(result);
  const { geometry = {} as { location: LocationKeys } } =
    formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
