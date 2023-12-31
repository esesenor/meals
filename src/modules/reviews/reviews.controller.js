import { catchAsync } from '../../common/errors/catchAsync.js';
import { AppError } from '../../common/errors/appError.js';
import { validateCreateReview } from '../reviews/reviews.schema.js';
import { RestaurantService } from '../restaurants/restaurants.service.js';
import { UserService } from '../users/users.service.js';
import { ReviewService } from '../reviews/reviews.service.js';

export const sequenceReview = catchAsync(async (req, res, next) => {
      const { hasError, errorMessages, reviewData } = validateCreateReview(
        req.body
      );
      const restaurantId = req.params;
    console.log("esto es el dato",reviewData)
      if (hasError) {
        return res.status(422).json({
          status: 'error',
          message: errorMessages,
        });
      }

      const [restaurant, user] = await Promise.all([
        await RestaurantService.findOne(reviewData.userId),
        await UserService.findOne(reviewData.userId),
      ]);
      console.log("esto es restaurante ",restaurant)
      console.log("esto es el dato2restaurantId",restaurantId.id)   
      console.log("esto es el dato2",reviewData.userId)

      if (!restaurant) {
        return next(
          new AppError(
            `Restaurant with id: ${restaurantId.id} not found`,
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
      console.log("esto es el dato",reviewCreated);
      return res.status(201).json({
        id:reviewCreated.id,
        userId:reviewCreated.userId,
        comment:reviewCreated.comment,
        restaurantId:reviewCreated.restaurantId,
        rating:reviewCreated.rating
      });
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
