import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import * as PhonesContext from '../../../../context/AppContext/app-context';
import SearchPhones from '../../../../views/list-photos-view/components/search-phones/search-phones';
import renderWithProviders from '../../../utils';
import { DEBOUNCE_MS } from '../../../../views/list-photos-view/components/search-phones/contants';
import { INPUT_SEARCH } from '../../../../constants';

describe('<SearchPhones />', () => {
  const setQuery = vi.fn();

  beforeEach(() => {
    vi.spyOn(PhonesContext, 'usePhones').mockReturnValue({
      query: '',
      setQuery,
      phones: [],
      filteredPhones: [],
      loading: false,
      error: null,
    });

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  it('Should calls setQuery when input value changes', () => {
    renderWithProviders(
      <SearchPhones
        name={INPUT_SEARCH.name}
        placeHolder={INPUT_SEARCH.placeHolder}
        className="zara-challenge-search-phone"
      />
    );

    const input = screen.getByPlaceholderText(/Search to a smartphone.../i);
    fireEvent.change(input, { target: { value: 'Samsung' } });

    vi.advanceTimersByTime(DEBOUNCE_MS);

    expect(setQuery).toHaveBeenCalledTimes(1);
    expect(setQuery).toHaveBeenCalledWith('Samsung');
  });

  it('should calls setQuery again when input changes again', () => {
    renderWithProviders(
      <SearchPhones
        name={INPUT_SEARCH.name}
        placeHolder={INPUT_SEARCH.placeHolder}
        className="zara-challenge-search-phone"
      />
    );

    const input = screen.getByPlaceholderText(/Search to a smartphone.../i);
    fireEvent.change(input, { target: { value: 'Samsung' } });
    vi.advanceTimersByTime(DEBOUNCE_MS);

    fireEvent.change(input, { target: { value: 'Samsung Galaxy' } });
    vi.advanceTimersByTime(DEBOUNCE_MS);

    expect(setQuery).toHaveBeenCalledTimes(2);
    expect(setQuery).toHaveBeenLastCalledWith('Samsung Galaxy');
  });
});
