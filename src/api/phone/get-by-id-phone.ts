import { API_KEY } from '../../constants';
import type { PhoneDetailTypes } from '../../views/detail-phone-view/components/card-form-detail-phone/types';

const BASE_URL = 'https://prueba-tecnica-api-tienda-moviles.onrender.com';

export const getByIdPhone = async (
  phoneId: string
): Promise<PhoneDetailTypes> => {
  try {
    const response = await fetch(`${BASE_URL}/products/${phoneId}`, {
      headers: { 'x-api-key': API_KEY },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch phones');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching phones: ' + (error as Error).message);
  }
};
