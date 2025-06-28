import { describe, expect, it } from 'vitest';
import { MOCK_PHONES } from '../mocks';
import { GalleryPhones } from '../../views/list-photos-view/components';
import renderWithProviders from '../utils';
describe('<GalleryPhones />', () => {
  it('should render GalleryPhone component correctly ', () => {
    const wrapper = renderWithProviders(
      <GalleryPhones phones={MOCK_PHONES.phones} />
    );
    const container = wrapper.container.querySelector(
      '.zara-challenge-gallery-phones'
    );
    expect(container).toBeDefined();
  });
});
