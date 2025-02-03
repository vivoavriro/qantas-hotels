import { render, screen } from '@testing-library/react';

import HotelCard from './HotelCard';

const mockProps = {
  id: 'cxd650nuyo',
  property: {
    propertyId: 'P107801',
    title: 'Courtyard by Marriott Sydney-North Ryde',
    address: ['7-11 Talavera Rd', 'North Ryde'],
    previewImage: {
      url: 'https://unsplash.it/145/125/?random',
      caption: 'Image of Courtyard by Marriott Sydney-North Ryde',
      imageType: 'PRIMARY',
    },
    rating: {
      ratingValue: 4.5,
      ratingType: 'self',
    },
  },
  offer: {
    promotion: {
      title: 'Exclusive Deal',
      type: 'MEMBER',
    },
    name: 'Deluxe Balcony Room',
    displayPrice: {
      amount: 329.0,
      currency: 'AUD',
    },
    savings: {
      amount: 30.0,
      currency: 'AUD',
    },
    cancellationOption: {
      cancellationType: 'NOT_REFUNDABLE',
    },
  },
};

describe('HotelCard component tests :', () => {
  test('should render the component properly', () => {
    render(<HotelCard {...mockProps} />);

    expect(screen.getByTestId('image-badge')).toBeInTheDocument();
    expect(
      screen.getByTestId('rating-empty-container-self')
    ).toBeInTheDocument();
    expect(screen.getByText(mockProps.property.title)).toBeInTheDocument();
    expect(
      screen.getByText(mockProps.property.address.join(', '))
    ).toBeInTheDocument();
    expect(screen.getByText(mockProps.offer.name)).toBeInTheDocument();
    expect(screen.queryByText('Free cancellation')).not.toBeInTheDocument();
    expect(screen.getAllByText(/(AUD)/i)).toHaveLength(1);
    expect(screen.getByText(/329/i)).toBeInTheDocument();
    expect(screen.getByText(/32/i)).toBeInTheDocument();
  });
  test('should render free cancellation when cancellation type is FREE_CANCELLATION', () => {
    const newMockProps = {
      ...mockProps,
      offer: {
        ...mockProps.offer,
        cancellationOption: {
          cancellationType: 'FREE_CANCELLATION',
        },
      },
    };
    render(<HotelCard {...newMockProps} />);

    expect(screen.queryByText('Free cancellation')).toBeInTheDocument();
  });
  test('should not render saving when it is not provided', () => {
    const newMockProps = {
      ...mockProps,
      offer: {
        ...mockProps.offer,
        savings: null,
      },
    };
    render(<HotelCard {...newMockProps} />);

    expect(screen.queryByText(/save/i)).not.toBeInTheDocument();
  });
});
