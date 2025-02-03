import hotelsList from '../data/hotels-list-response.json';
import { FetchHotelsListResponse } from './fetchHotelsList.types';

export const fetchHotelsList = (): Promise<FetchHotelsListResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(hotelsList);
    }, 400);
  });
};
