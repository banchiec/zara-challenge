import { describe, expect, it } from 'vitest';
import renderWithProviders from '../../utils';
import { DetailPhotoView } from '../../../views';

describe('<DetailPhotosView/>', () => {
  it('should render correctly', () => {
    const wrapper = renderWithProviders(<DetailPhotoView />);
    const containerListPhotosView = wrapper.container.querySelector(
      '.zara-challenge-detail-photos-view'
    );
    expect(containerListPhotosView).toBeDefined();
  });
});
