import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CardPhone } from '../../components';
import type { CardPhoneTypes } from '../../components/card-phone/types';
import { MOCK_PHONE } from '../mocks';

const setup = (phone = MOCK_PHONE) => {
  render(<CardPhone phone={phone} />);
  const image = screen.getByRole('img', { name: /Galaxy S22/i });
  const brand = screen.getByText('SAMSUNG');
  const name = screen.getByText('GALAXY S22');
  const price = screen.getByText(/999\s? EUR/);

  return {
    image,
    brand,
    name,
    price,
  };
};

describe('<CardPhone />', () => {
  it('should render image with correct alt and src', () => {
    const { image } = setup();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', MOCK_PHONE.imageUrl);
  });

  it('should render uppercase brand and name correctly', () => {
    const { brand, name } = setup();
    expect(brand).toHaveTextContent(MOCK_PHONE.brand.toUpperCase());
    expect(name).toHaveTextContent(MOCK_PHONE.name.toUpperCase());
  });

  it('should show price with euro symbol', () => {
    const { price } = setup();
    expect(price).toHaveTextContent(`${MOCK_PHONE.basePrice} EUR`);
  });

  it('should be accessible and structured semantically', () => {
    const { image, name } = setup();
    expect(image.tagName).toBe('IMG');
    expect(name.tagName).toMatch(/H\d/);
  });

  it('should not crash with minimal valid props', () => {
    const minimalPhone: CardPhoneTypes['phone'] = {
      id: '',
      name: '',
      brand: '',
      basePrice: 0,
      imageUrl: '',
    };
    expect(() => render(<CardPhone phone={minimalPhone} />)).not.toThrow();
  });
});
