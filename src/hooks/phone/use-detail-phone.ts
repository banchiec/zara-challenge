import { useEffect, useState } from 'react';
import { getByIdPhone } from '../../api';
import type { PhoneDetailTypes } from '../../views/detail-photo-view/components/card-form-detail-phone/types';

const useDetailPhone = (phoneId: string) => {
  const [phone, setPhone] = useState<PhoneDetailTypes>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

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
