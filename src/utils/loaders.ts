import { getDocs } from 'firebase/firestore';
import {
  excursionReviewsData,
  excursionsData,
  excursionsDatesData,
  favoritesData,
  toursData
} from './firebase-config.ts';

// loaders
export const excursionsLoader = async () => {
  const querySnapshot = await getDocs(excursionsData);
  const alldata: ExcursionsCollectionResponseType = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as ExcursionCollectionResponseItemType;
    alldata.push(data);
  });
  return alldata;
};
export const itemPageReviewsLoader = async () => {
  const querySnapshot = await getDocs(excursionReviewsData);
  const alldata: ExcursionsReviewsCollectionResponseType = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as ExcursionsReviewItemResponseType;
    alldata.push(data);
  });
  return alldata;
};
export const toursLoader = async () => {
  const querySnapshot = await getDocs(toursData);
  const alldata: ToursCollectionResponseType = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as ToursCollectionResponseItemType;
    alldata.push(<ExcursionCollectionResponseItemType>data);
  });
  return alldata;
};
export const excursionsDatesLoader = async () => {
  const querySnapshot = await getDocs(excursionsDatesData);
  let alldata: Array<string> = [];
  querySnapshot.forEach(async (doc) => {
    const data = doc.data();
    const dates = data['dates'];
    alldata = [...dates];
  });
  return alldata;
};

export const favoritesLoader = async (userEmail: string) => {
  const querySnapshot = await getDocs(favoritesData);
  const favorites: Array<any> = [];
  querySnapshot.forEach(async (doc) => {
    const resData = doc.data();
    if (resData.id == userEmail) {
      favorites.push(resData.excursions);
    }
  });
  favorites.push(favorites);
  return favorites;
};

export const getDataFromDB = async (
  dispatch: any,
  actionCreatorTours: any,
  actionCreatorExcursions: any
) => {
  const excursions: ExcursionsCollectionResponseType = await excursionsLoader();
  dispatch(actionCreatorExcursions(excursions));
  const tours: ToursCollectionResponseType = await toursLoader();
  dispatch(actionCreatorTours(tours));
  return null;
};

export const ItemPageLoaders = async () => {
  const reviewsRes = await itemPageReviewsLoader();
  return { reviewsRes };
};

//types

export type ExcursionsCollectionResponseType = ExcursionCollectionResponseItemType[];
export type ExcursionCollectionResponseItemType = {
  title: string;
  duration: string;
  visitors: number;
  type: string;
  price: number;
  priceDescription: string;
  tags: string[];
  totalPoints: number;
  location: string;
  description: string[];
  startingPoint: string;
  details: string[];
  id: string;
};
export type ExcursionsReviewsCollectionResponseType = ExcursionsReviewItemResponseType[];
export type ExcursionsReviewItemResponseType = {
  customerName: string;
  reviewDate: string;
  id: string;
  reviewRating: string;
  reviewText: string;
  excursionID: string;
};

export type ToursCollectionResponseType = ExcursionCollectionResponseItemType[];
export type ToursCollectionResponseItemType = {
  title: string;
  duration: string;
  visitors: number;
  type: string;
  price: number;
  priceDescription: string;
  tags: string[];
  totalPoints: number;
  location: string;
  description: {
    [key: string]: any;
  };
  startingPoint: string;
  details: string[];
  id: string;
};
