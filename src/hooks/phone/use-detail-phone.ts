import { useEffect, useState } from 'react';
import type { PhoneTypes } from '../../types/phone-types';
import { getByIdPhone } from '../../api';

const useDetailPhone = (phoneId: string) => {
  const [phone, setPhone] = useState<PhoneTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getPhoneDetails = async (phoneId: string) => {
    try {
      const data = await getByIdPhone(phoneId);
      setPhone(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhoneDetails(phoneId);
  }, [phoneId]);

  return { phone, loading, error };
};

export default useDetailPhone;
