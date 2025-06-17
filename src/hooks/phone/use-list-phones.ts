import { useEffect, useState } from 'react';
import type { PhoneTypes } from '../../types/phone';
import getListPhones from '../../api/phone';

export const useListPhones = () => {
  const [phones, setPhones] = useState<PhoneTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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

    loadPhones();
  }, []);

  return { phones, loading, error };
};
