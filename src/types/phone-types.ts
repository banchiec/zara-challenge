import type React from 'react';

export interface PhoneTypes {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
}
export interface SearchPhoneTypes {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
