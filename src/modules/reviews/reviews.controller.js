import { catchAsync } from '../../common/errors/catchAsync.js';
import { AppError } from '../../common/errors/appError.js';
import { validateCreateReview } from './review.schema.js';
import { RestaurantService } from './../restaurant/restaurant.service.js';
import { UserService } from '../user/user.service.js';
import { ReviewService } from './review.service.js';

export const sequenceReview = catchAsync(async (req, res, next) => {
  const { hasError, errorMessages, reviewData } = validateCreateReview(
    req.body
  );

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const [restaurant, user] = await Promise.all([
    await RestaurantService.findOne(reviewData.restaurantId),
    await UserService.findOne(reviewData.userId),
  ]);

  if (!restaurant) {
    return next(
      new AppError(
        `Restaurant with id: ${reviewData.restaurantId} not found`,
        404
      )
    );
  }

  if (!user) {
    return next(
      new AppError(`User with id: ${reviewData.userId} not found`, 404)
    );
  }

  const reviewCreated = await ReviewService.create(reviewData);

  return res.status(201).json(reviewCreated);
});

export const findAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await ReviewService.findAllReview();

  return res.status(200).json(reviews);
});

export const findOneReview = catchAsync(async (req, res, next) => {
  const { review } = req;

  return res.status(200).json(review);
});

export const updateReview = catchAsync(async (req, res, next) => {
  const { review } = req;

  await ReviewService.update(review);

  return res.status(200).json({
    message: 'Review actualized',
  });
});

export const deleteReview = catchAsync(async (req, res, next) => {
  const { review } = req;

  await ReviewService.delete(review);

  return res.status(204).json(null);
});
