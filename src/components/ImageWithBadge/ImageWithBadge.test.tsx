import { render, screen } from '@testing-library/react';

import ImageWithBadge from './ImageWithBadge';
import { ImageWithBadgeTypes } from './ImageWithBadge.types';

const mockProps: ImageWithBadgeTypes = {
  alt: 'alt-test',
  src: 'sample-src',
  badgeLabel: 'sample-badge',
  height: 200,
  width: '400',
};

describe('ImageWithBadge Component Tests :', () => {
  test('should render the image tag with expected attribute', () => {
    render(<ImageWithBadge {...mockProps} />);

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', 'sample-src');
    expect(image).toHaveAttribute('alt', 'alt-test');
    expect(image).toHaveAttribute('height', '200');
    expect(image).toHaveAttribute('width', '400');
  });
  test('should render the badge when is provided', () => {
    render(<ImageWithBadge {...mockProps} />);

    const badge = screen.getByText('sample-badge');

    expect(badge).toBeInTheDocument();
  });
  test('should render the badge when is provided', () => {
    render(
      <ImageWithBadge
        {...mockProps}
        badgeLabel={undefined}
      />
    );

    const badge = screen.queryByTestId('image-badge');

    expect(badge).not.toBeInTheDocument();
  });
});
