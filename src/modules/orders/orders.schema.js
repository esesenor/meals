import z from 'zod';
import { extractValidationData } from './../../common/utils/extractErrorData.js';

const orderSchema = z.object({
  mealId: z.number(),
  userId: z.number(),
  totalPrice: z.number(),
  quantity: z.number().min(1, { message: 'Quantity min is 1' }),
 //status: z.enum(['active', 'cancelled', 'completed']),
});

export function validateCreateOrder(data) {
  const result = orderSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: orderData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    orderData,
  };
}
