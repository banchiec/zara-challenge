import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders from '../../../utils';
import CardFormDetailPhone from '../../../../views/detail-phone-view/components/card-form-detail-phone';
import { MOCK_PHONE_DETAIL } from '../../../mocks';

describe('CardFormDetailPhone', () => {
  it('Should renders phone details correctly', () => {
    const wrapper = renderWithProviders(
      <CardFormDetailPhone phone={MOCK_PHONE_DETAIL} />
    );
    const headingElement = wrapper.getByRole('heading', {
      name: /GALAXY S24 ULTRA/i,
    });
    expect(headingElement).toBeDefined();
    expect(screen.getByText(/from/i)).toBeInTheDocument();
  });

  it('should updates selected color and image when button is clicked', () => {
    const wrapper = renderWithProviders(
      <CardFormDetailPhone phone={MOCK_PHONE_DETAIL} />
    );

    const grayButton = wrapper
      .getAllByRole('button')
      .find((btn) => btn.style.backgroundColor === 'rgb(0, 0, 0)');
    const img = screen.getByRole('img') as HTMLImageElement;

    fireEvent.click(grayButton!);

    expect(img.src).toContain('black.webp');
  });

  it('Should enables submit button only after both storage and color selected', () => {
    const wrapper = renderWithProviders(
      <CardFormDetailPhone phone={MOCK_PHONE_DETAIL} />
    );
    const submitButton = wrapper.getByRole('button', { name: /Añadir/i });

    expect(submitButton).toBeDisabled();

    const colorButtons = wrapper
      .getAllByRole('button')
      .filter((btn) => btn.style.backgroundColor);
    fireEvent.click(colorButtons[1]);

    expect(submitButton).toBeDisabled();

    const storageButtons = wrapper
      .getAllByRole('button')
      .filter((btn) => !btn.style.backgroundColor);

    fireEvent.click(storageButtons[1]);

    expect(submitButton).toBeEnabled();
  });

  it('Should calls onSubmit when form is valid and submitted', () => {
    const wrapper = renderWithProviders(
      <CardFormDetailPhone phone={MOCK_PHONE_DETAIL} />
    );
    const submitButton = wrapper.getByRole('button', { name: /AÑADIR/i });

    const colorButtons = wrapper
      .getAllByRole('button')
      .filter((btn) => btn.style.backgroundColor);

    const storageButtons = wrapper
      .getAllByRole('button')
      .filter((btn) => !btn.style.backgroundColor);

    fireEvent.click(colorButtons[1]);
    fireEvent.click(storageButtons[1]);

    fireEvent.click(submitButton);
  });
});
