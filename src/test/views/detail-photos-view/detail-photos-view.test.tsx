import { describe, expect, it } from 'vitest';
import renderWithProviders from '../../utils';
import { DetailPhoneView } from '../../../views';

describe('<DetailPhotosView/>', () => {
  it('should render correctly', () => {
    const wrapper = renderWithProviders(<DetailPhoneView />);
    const containerListPhotosView = wrapper.container.querySelector(
      '.zara-challenge-detail-photos-view'
    );
    expect(containerListPhotosView).toBeDefined();
  });
});
