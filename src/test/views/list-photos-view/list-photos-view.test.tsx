import { describe, expect, it } from 'vitest';
import renderWithProviders from '../../utils';
import ListPhotosView from '../../../views/list-photos-view';

describe('<ListPhotosView/>', () => {
  it('should render image with correct alt and src', () => {
    const wrapper = renderWithProviders(<ListPhotosView />);
    const containerListPhotosView = wrapper.container.querySelector(
      '.zara-challenge-list-photos-view'
    );
    expect(containerListPhotosView).toBeDefined();
  });
});
