import z from 'zod';
import { extractValidationData } from './../../common/utils/extractErrorData.js';

const mealSchema = z.object({
  name: z.string({
    invalid_type_error: 'name must be a string',
    required_error: 'name is required',
  }),
  price: z.number().min(0, { message: 'price must be greater than zero' }),
  restaurantId: z.number(),
  //status: z.enum(['available', 'disabled']),
});

export function validateCreateMeal(data) {
  const result = mealSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: mealData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    mealData,
  };
}


export function validatePartialMeal(data) {
  const result = mealSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessages,
    data: mealData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    mealData,
  };
}