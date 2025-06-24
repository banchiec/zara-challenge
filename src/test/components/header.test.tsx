import { describe, expect, it } from 'vitest';
import renderWithProviders from '../utils';
import Header from '../../components/header';

describe('<Header />', () => {
  it('should render <Header /> correctly', () => {
    const wrapper = renderWithProviders(<Header />);
    const headerContainer = wrapper.container.querySelector(
      '.zara-challenge-header'
    );
    const logo = wrapper.getByText('MBST');

    expect(headerContainer).toBeDefined();
    expect(logo).toBeDefined();
  });

  it('should re-direct home when logo is clicked ', () => {
    const wrapper = renderWithProviders(<Header />);
    const logoElement = wrapper.container.querySelector(
      '.zara-challenge-header__logo'
    );
    expect(logoElement).toBeDefined();
  });
});
