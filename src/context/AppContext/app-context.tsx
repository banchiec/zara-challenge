import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from 'react';
//import { useListPhones } from '../../hooks';
import type { PhoneTypes } from '../../types/phone-types';
import { useListPhones } from '../../hooks';

interface PhonesContextType {
  phones: PhoneTypes[];
  filteredPhones: PhoneTypes[];
  query: string;
  // eslint-disable-next-line no-unused-vars
  setQuery: (value: string) => void;
  loading: boolean;
  error: unknown;
}

const PhonesContext = createContext<PhonesContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const usePhones = () => {
  const context = useContext(PhonesContext);
  if (!context) {
    throw new Error('usePhones must be used within a PhonesProvider');
  }
  return context;
};

export const PhonesProvider = ({ children }: { children: ReactNode }) => {
  const { phones, loading, error } = useListPhones();
  const [query, setQuery] = useState('');

  const filteredPhones = useMemo(() => {
    const lower = query.trim().toLowerCase();
    if (!lower) return phones;

    return phones.filter((phone) =>
      ['name', 'brand'].some((key) =>
        String(phone[key as keyof PhoneTypes])
          .toLowerCase()
          .includes(lower)
      )
    );
  }, [phones, query]);

  return (
    <PhonesContext.Provider
      value={{ phones, filteredPhones, query, setQuery, loading, error }}
    >
      {children}
    </PhonesContext.Provider>
  );
};
