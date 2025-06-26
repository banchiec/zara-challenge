import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MOCK_PHONES } from '../mocks';
import { GalleryPhones } from '../../views/list-photos-view/components';
describe('<GalleryPhones />', () => {
  it('should render GalleryPhone component correctly ', () => {
    const wrapper = render(<GalleryPhones phones={MOCK_PHONES.phones} />);
    const container = wrapper.container.querySelector(
      '.zara-challenge-gallery-phones'
    );
    expect(container).toBeDefined();
  });
});
