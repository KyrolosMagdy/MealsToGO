import { mocks, mockImages } from "./mock";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import camelize from "camelize";
import { Resturant } from "../../utils/types/Resturant";

export interface RestaurantsRequestInterface {
  location: string;
}

export const restaurantsRequest = ({
  location,
}: RestaurantsRequestInterface) => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mock = mocks[location];
    if (!mock) {
      reject("no resturants available in your area");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }: { results: any[] }) => {
  const mappedResults = results.map((result) => {
    result.photos = result.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...result,
      isClosedTemporarily: result.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: result.opening_hours?.open_now,
      address: result.vicinity,
    };
  });
  const newResult: Resturant[] = camelize(mappedResults);
  return newResult;
};
