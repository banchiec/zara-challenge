import type { PhoneTypes } from '../../types/phone-types';

const BASE_URL = 'https://prueba-tecnica-api-tienda-moviles.onrender.com';
const API_KEY = import.meta.env.VITE_API_KEY;

export const getListPhones = async (): Promise<PhoneTypes[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      headers: {
        'x-api-key': API_KEY,
      },
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
