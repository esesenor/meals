import express from 'express';
import {
  createRestaurant,
  deleteRestaurant,
  findAllRestaurant,
  findOneRestaurant,
  updateRestaurant,
} from './restaurants.controller.js';
import { validExistRestaurant } from './restaurants.middleware.js';
import { sequenceReview, updateReview } from '../reviews/reviews.controller.js';
import { validExistReview } from '../reviews/reviews.middleware.js';
import { deleteReview } from '../reviews/reviews.controller.js';

export const router = express.Router();

router.route('/').get(findAllRestaurant).post(createRestaurant);
router.route('/reviews/:id').post(sequenceReview)
router.route('/reviews/:restaurantId/:reviewId').patch(updateReview)
//router.route('/reviews/:id').patch(validExistRestaurant,)
router.route('/reviews/:restaurantId/:reviewId').delete(deleteReview)
router
  .route('/:id')
  .get(validExistRestaurant, findOneRestaurant)
  .patch(validExistRestaurant, updateRestaurant)
  .delete(validExistRestaurant, deleteRestaurant);
