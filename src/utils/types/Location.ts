export interface LocationKeys {
  lng: number;
  lat: number;
}

export interface LocationInfo extends LocationKeys {
  viewport: {
    northeast: LocationKeys;
    southwest: LocationKeys;
  };
}

export interface GeometryLocation {
  location: LocationKeys;
  viewport: {
    northeast: LocationKeys;
    southwest: LocationKeys;
  };
}

export interface LocationResult {
  results: {
    geometry: GeometryLocation;
  }[];
}

export interface Location {
  [key: string]: LocationResult;
}
