import z from 'zod';
import { extractValidationData } from './../../common/utils/extractErrorData.js';

const restaurantSchema = z.object({
  name: z.string({
    invalid_type_error: 'name must be a string',
    required_error: 'name is required',
  }),
  address: z.string({
    invalid_type_error: 'name must be a string',
    required_error: 'Adress is required',
  }),
  rating: z
    .number()
    .min(0, { message: 'Rating min is 0' })
    .max(10, { message: 'Rating max is 10' }),
});

export function validateCreateRestaurant(data) {
  const result = restaurantSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: restaurantData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    restaurantData,
  };
}

export function validatePartialRestaurant(data) {
  const result = restaurantSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessages,
    data: restaurantData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    restaurantData,
  };
}
