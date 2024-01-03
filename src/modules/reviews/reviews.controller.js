import { catchAsync } from '../../common/errors/catchAsync.js';
import { AppError } from '../../common/errors/appError.js';
import {
  validateCreateReview,
  validatePartialReview,
} from '../reviews/reviews.schema.js';
import { RestaurantService } from '../restaurants/restaurants.service.js';
import { UserService } from '../users/users.service.js';
import { ReviewService } from '../reviews/reviews.service.js';
import { envs } from '../../config/enviroments/enviroments.js';
import jwt from 'jsonwebtoken';

export const sequenceReview = catchAsync(async (req, res, next) => {
  const { hasError, errorMessages, reviewData } = validateCreateReview(
    req.body
  );

  const authorizationHeader = req.headers.authorization; //ver si esta el token autorizado
  if (!authorizationHeader) {
    //si el usuario no exuiste o no esta logueado
    return next(
      new AppError(`User with id: ${reviewData.userId} not found (≧︿≦)`, 404)
    );
  }

  const token = authorizationHeader.split(' ')[1]; //extraemos solo el token
  const decodedToken = jwt.verify(token, envs.SECRET_JWT_SEED);
  const userId = decodedToken.id; //sacamos el id del usuario del token decodeficado

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }
  const { id } = req.params; //id de restaurant
  const restaurant = await RestaurantService.findOne(id);
  //const user = await UserService.findOne(reviewData.userId)
  if (!restaurant) {
    return next(
      new AppError(
        `Restaurant with id: ${reviewData.restaurantId} not found (︶︹︶)`,
        404
      )
    );
  }
  const newDataReview = {
    userId: userId,
    comment: reviewData.comment,
    restaurantId: id,
    rating: reviewData.rating,
  };
  const reviewCreated = await ReviewService.create(newDataReview);

  return res.status(201).json(reviewCreated);
});

export const findAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await ReviewService.findAll();

  return res.status(200).json(reviews);
});

export const findOneReview = catchAsync(async (req, res, next) => {
  const { review } = req;

  return res.status(200).json(review);
});

export const updateReview = catchAsync(async (req, res, next) => {
  const { restaurantId, reviewId } = req.params;
  const reviewUpdated = await ReviewService.findOne(reviewId);
  const restaurantUpdated = await RestaurantService.findOne(restaurantId);
  const { hasError, errorMessages, reviewData } = validatePartialReview(
    req.body
  );

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  if (!restaurantUpdated) {
    return next(
      new AppError(
        `Restaurant with id: ${reviewData.restaurantId} not found`,
        404
      )
    );
  }
  if (!reviewUpdated) {
    return next(
      new AppError(`Review with id: ${reviewData.userId} not found`, 404)
    );
  }
  const authorizationHeader = req.headers.authorization; //ver si esta el token autorizado
  const token = authorizationHeader.split(' ')[1]; //extraemos solo el token
  const decodedToken = jwt.verify(token, envs.SECRET_JWT_SEED);
  const userId = decodedToken.id; //sacamos el id del usuario del token decodeficado

  await ReviewService.update(
    userId,
    restaurantId,
    reviewId,
    reviewUpdated,
    reviewData
  );
  return res.status(200).json({
    message: 'Review actualized',
  });
});

export const deleteReview = catchAsync(async (req, res, next) => {
  const { restaurantId, reviewId } = req.params;
  const reviewDeleted = await ReviewService.findOne(reviewId);
  const restaurantDeleted = await RestaurantService.findOne(restaurantId);
  if (!restaurantDeleted) {
    return next(
      new AppError(`Restaurant with id: ${restaurantId} not found`, 404)
    );
  }
  if (!reviewDeleted) {
    return next(new AppError(`Review with id: ${reviewId} not found`, 404));
  }
  const authorizationHeader = req.headers.authorization; //ver si esta el token autorizado
  const token = authorizationHeader.split(' ')[1]; //extraemos solo el token
  const decodedToken = jwt.verify(token, envs.SECRET_JWT_SEED);
  const userId = decodedToken.id; //sacamos el id del usuario del token decodeficado

  await ReviewService.delete(userId, restaurantId, reviewId, reviewDeleted);
  return res.status(200).json({
    message: 'Review deleted',
  });
});
