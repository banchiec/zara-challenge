import { describe, expect, it } from 'vitest';
import SpecsList from '../../../../views/detail-phone-view/components/specification-phone';
import renderWithProviders from '../../../utils';

const mockSpecs = {
  screen: '6.8" Dynamic AMOLED 2X',
  resolution: '3120 x 1440 pixels',
  processor: 'Snapdragon 8 Gen 3',
  mainCamera: '200 MP',
};

describe('SpecsList', () => {
  it('Should renders title correctly', () => {
    const wrapper = renderWithProviders(<SpecsList specsPhone={mockSpecs} />);
    const titleElement = wrapper.getByText('SPECIFICATIONS');
    expect(titleElement).toBeInTheDocument();
  });

  it('Should renders all specifications as dt/dd pairs', () => {
    const wrapper = renderWithProviders(<SpecsList specsPhone={mockSpecs} />);

    Object.entries(mockSpecs).forEach(([key, value]) => {
      const formattedKey = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase())
        .toUpperCase();
      const titleElement = wrapper.getByText(formattedKey);
      const descriptionElement = wrapper.getByText(value);

      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});
