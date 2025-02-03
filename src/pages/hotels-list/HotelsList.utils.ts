import type { Hotel } from '../../services/fetchHotelsList.types';

export const sortByPrice = (unSortedValue: Hotel[], type: string) => {
  if (type === 'price-asc') {
    return unSortedValue.sort(
      (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
    );
  } else if (type === 'price-des') {
    return unSortedValue.sort(
      (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
    );
  } else {
    return unSortedValue;
  }
};
