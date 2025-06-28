import type { z } from 'zod';
import type { phoneDetailSchema } from './schema';
import type {
  ColorOptionsTypes,
  SimilarProductsTypes,
  SpecsTypes,
  StorageOptionsTypes,
} from '../../../../types/phone-types';

export interface PhoneDetailTypes {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: SpecsTypes;
  colorOptions: ColorOptionsTypes[];
  storageOptions: StorageOptionsTypes[];
  similarProducts: SimilarProductsTypes[];
}

export interface CardFormDetailPhoneTypes {
  phone: PhoneDetailTypes;
}

export type PhoneDetailFormValuesTypes = z.infer<typeof phoneDetailSchema>;
