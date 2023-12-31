import z from 'zod';
import { extractValidationData } from './../../common/utils/extractErrorData.js';

const reviewSchema = z.object({
  userId: z.number(),
  comment: z.string({
    invalid_type_error: 'Comment must be a string',
    required_error: 'Comment is required',
  }),
  //restaurantId: z.number(),
  rating: z
    .number()
    .min(0, { message: 'Rating min is 0' })
    .max(10, { message: 'Rating max is 10' }),
  //status: z.enum(['available', 'disabled']),
});

export function validateCreateReview(data) {
  const result = reviewSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: reviewData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    reviewData,
  };
}

export function validatePartialReview(data) {
  const result = reviewSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessages,
    data: reviewData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    reviewData,
  };
}
