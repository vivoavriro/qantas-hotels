import { render, screen, fireEvent } from '@testing-library/react';

import Select from './Select';
import { SelectType } from './Select.types';

const mockOnChange = vi.fn();

const mockProps: SelectType = {
  id: 'test',
  label: 'test-label',
  options: [
    { value: 'price-asc', label: 'Price low-high' },
    { value: 'price-des', label: 'Price high-low' },
  ],
  onChange: mockOnChange,
};

describe('Select Component Tests', () => {
  test('should render the component properly', () => {
    render(<Select {...mockProps} />);

    expect(screen.getByText('test-label')).toBeInTheDocument();
    expect(screen.getByText('Price low-high')).toBeInTheDocument();
    expect(screen.getByText('Price high-low')).toBeInTheDocument();
  });
  test('should call onChange on selecting options', () => {
    render(<Select {...mockProps} />);

    const selectComponent = screen.getByTestId('select-test');

    fireEvent.change(selectComponent, { target: { value: 'price-des' } });

    expect(mockOnChange).toHaveBeenCalled();
  });
});
