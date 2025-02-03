import { render, screen } from '@testing-library/react';

import Rating from './Rating';
import { RatingTypes } from './Rating.types';

const mockProps: RatingTypes = {
  maxRating: 5,
  type: 'self',
  rate: 2.5,
};

describe('Rating Component tests :', () => {
  test('should render the component properly', () => {
    render(<Rating {...mockProps} />);

    const emptyContainer = screen.getByTestId('rating-empty-container-self');
    const filledContainer = screen.getByTestId('rating-fill-container-self');

    expect(emptyContainer).toBeInTheDocument();
    expect(filledContainer).toBeInTheDocument();

    const style = window.getComputedStyle(filledContainer);

    expect(style.clipPath).toBe('rect(0px 50% 100% 0)');
  });
  test('should render the component with star icons', () => {
    render(
      <Rating
        {...mockProps}
        type="star"
      />
    );

    const emptyContainer = screen.getByTestId('rating-empty-container-star');
    const filledContainer = screen.getByTestId('rating-fill-container-star');

    expect(emptyContainer).toBeInTheDocument();
    expect(filledContainer).toBeInTheDocument();

    const style = window.getComputedStyle(filledContainer);

    expect(style.clipPath).toBe('rect(0px 50% 100% 0)');
  });
});
