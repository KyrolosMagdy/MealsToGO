import { GeometryLocation } from "./Location";

export interface Resturant {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
  placeId: string;
  geometry: GeometryLocation;
}
