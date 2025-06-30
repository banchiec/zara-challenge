import { useEffect, useState } from 'react';
import type { PhoneTypes } from '../../types/phone-types';
import { getListPhones } from '../../api';

export const useListPhones = () => {
  const [phones, setPhones] = useState<PhoneTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPhones = async () => {
    try {
      const data = await getListPhones();
      setPhones(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPhones();
  }, []);

  return { phones, loading, error };
};
