import { z } from 'zod';

export const phoneDetailSchema = z.object({
  color: z.string().min(1, 'Color is required'),
  storage: z.object({
    capacity: z.string().min(1),
    price: z.number().min(1),
  }),
});
