import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import { sortByPrice } from './HotelsList.utils';

vi.mock('./HotelsList.utils', { spy: true });

import HotelsList from './HotelsList';

describe('HotelsList component tests:', () => {
  test('should render loading', async () => {
    render(<HotelsList />);

    expect(screen.getByText(/is Loading .../i)).toBeInTheDocument();
  });
  test('should render the component properly', async () => {
    render(<HotelsList />);

    await waitFor(() => {
      expect(screen.getByText(/sort by/i)).toBeInTheDocument();
      expect(screen.getByText(/hotels in/i)).toBeInTheDocument();
    });
    expect(screen.getAllByTestId('hotels-list-card-wrapper')).toHaveLength(5);
  });
  test('should call onChange on selecting options', async () => {
    render(<HotelsList />);

    await waitFor(() => {
      expect(screen.getByText(/sort by/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Price high-low'));

    expect(sortByPrice).toHaveBeenCalled();
  });
});
