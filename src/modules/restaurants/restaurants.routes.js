import express from 'express';
import {
  createRestaurant,
  deleteRestaurant,
  findAllRestaurant,
  findOneRestaurant,
  updateRestaurant,
} from './restaurants.controller.js';
import { validExistRestaurant } from './restaurants.middleware.js';
<<<<<<< HEAD
import { sequenceReview, updateReview } from '../reviews/reviews.controller.js';
import { validExistReview } from '../reviews/reviews.middleware.js';
=======
import { deleteReview, sequenceReview } from '../reviews/reviews.controller.js';
>>>>>>> 43c22dead9e153eadbc244c13c903c8cdce79a10

export const router = express.Router();

router.route('/').get(findAllRestaurant).post(createRestaurant);
router.route('/reviews/:id').post(sequenceReview)
<<<<<<< HEAD
router.route('/reviews/:restaurantId/:reviewId').patch(updateReview)
=======
router.route('/reviews/:id').patch(validExistRestaurant,)
router.route('/reviews/:restaurantId/:reviewId').delete(deleteReview)
>>>>>>> 43c22dead9e153eadbc244c13c903c8cdce79a10
router
  .route('/:id')
  .get(validExistRestaurant, findOneRestaurant)
  .patch(validExistRestaurant, updateRestaurant)
  .delete(validExistRestaurant, deleteRestaurant);
