import { sortByPrice } from './HotelsList.utils';

import sampleResult from '../../data/hotels-list-response.json';

describe('HotelsList utils :', () => {
  test('should call sortByPrice with price-asc type and get the sorted result', () => {
    const sortedResult = sortByPrice(sampleResult.results, 'price-asc');
    const pricesArray = sortedResult.map(
      (hotel) => hotel.offer.displayPrice.amount
    );
    expect(pricesArray).toEqual([227, 295, 329, 375, 535]);
  });
  test('should call sortByPrice with price-des type and get the sorted result', () => {
    const sortedResult = sortByPrice(sampleResult.results, 'price-des');
    const pricesArray = sortedResult.map(
      (hotel) => hotel.offer.displayPrice.amount
    );
    expect(pricesArray).toEqual([535, 375, 329, 295, 227]);
  });
  test('should call sortByPrice with unSupported type and return the main result', () => {
    const sortedResult = sortByPrice(sampleResult.results, 'name-des');

    expect(sortedResult).toEqual(sampleResult.results);
  });
});
