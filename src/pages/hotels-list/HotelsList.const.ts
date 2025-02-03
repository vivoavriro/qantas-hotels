import { SelectType } from '../../components/Select/Select.types';

export const sortOptions: SelectType['options'] = [
  { value: 'price-asc', label: 'Price low-high' },
  { value: 'price-des', label: 'Price high-low' },
];
