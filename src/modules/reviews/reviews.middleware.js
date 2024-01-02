import { AppError } from '../../common/errors/appError.js';
import { catchAsync } from '../../common/errors/catchAsync.js';
import { ReviewService } from './reviews.service.js';

export const validExistReview = catchAsync(async (req, res, next) => {
  const { reviewId } = req.params;

  const review = await ReviewService.findOne(reviewId);

  if (!review) {
    return next(new AppError('review not found', 404));
  }

  req.review = review;
  next();
});
