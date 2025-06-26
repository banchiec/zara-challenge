import { useEffect, useState, type ChangeEvent } from 'react';
import { usePhones } from '../../../../context/AppContext/app-context';
import type { SearchInputTypes } from './types';
import { DEBOUNCE_MS } from './contants';
import { DEFAULT_VALUES, INPUT_TYPES } from '../../../../constants';

const SearchPhones = (props: SearchInputTypes) => {
  const { name, placeHolder, className } = props;
  const [inputValue, setInputValue] = useState(DEFAULT_VALUES.string);
  const { setQuery, filteredPhones } = usePhones();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(inputValue);
    }, DEBOUNCE_MS);
    return () => clearTimeout(timeout);
  }, [inputValue, setQuery]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={className}>
      <input
        type={INPUT_TYPES.text}
        placeholder={placeHolder}
        name={name}
        value={inputValue}
        onChange={handleChange}
      />
      <span>{`${filteredPhones.length} RESULT`}</span>
    </div>
  );
};

export default SearchPhones;
