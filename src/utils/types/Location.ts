export interface LocationKeys {
  lng: number;
  lat: number;
}

export interface LocationResult {
  results: {
    geometry: {
      location: LocationKeys;
      viewport: {
        northeast: LocationKeys;
        southwest: LocationKeys;
      };
    };
  }[];
}

export interface Location {
  [key: string]: LocationResult;
}
