import { useState, useEffect } from 'react';

const useSearchPhone = <PhoneTypes>(
  data: PhoneTypes[],
  query: string,
  keys: (keyof PhoneTypes)[],
  debounceMs = 300
): PhoneTypes[] => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [results, setResults] = useState<PhoneTypes[]>(data);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQuery(query), debounceMs);
    return () => clearTimeout(timeout);
  }, [query, debounceMs]);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults(data);
      return;
    }

    const lower = debouncedQuery.toLowerCase();
    const filtered = data.filter((item) =>
      keys.some((key) => String(item[key]).toLowerCase().includes(lower))
    );

    setResults(filtered);
  }, [debouncedQuery, data, keys]);

  return results;
};

export default useSearchPhone;
