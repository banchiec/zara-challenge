import { describe, expect, it } from 'vitest';
import renderWithProviders from '../../../utils';
import { GalleryPhones } from '../../../../views/list-photos-view/components';

describe('<GalleryPhones />', () => {
  it('should render galleryPhones component correctly', () => {
    const wrapper = renderWithProviders(<GalleryPhones phones={[]} />);
    const containerGalleryPhones = wrapper.container.querySelector(
      '.zara-challenge-gallery-phones'
    );
    expect(containerGalleryPhones).toBeDefined();
  });
});
