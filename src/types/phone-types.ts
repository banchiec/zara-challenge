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
export interface SpecsTypes {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}
export interface ColorOptionsTypes {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface StorageOptionsTypes {
  capacity: string;
  price: number;
}

export interface SimilarProductsTypes {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
}
