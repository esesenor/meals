import express from 'express';
import {
  createRestaurant,
  deleteRestaurant,
  findAllRestaurant,
  findOneRestaurant,
  updateRestaurant,
} from './restaurants.controller.js';
import { validExistRestaurant } from './restaurants.middleware.js';
import { sequenceReview } from '../reviews/reviews.controller.js';



export const router = express.Router();

router.route('/').get(findAllRestaurant).post(createRestaurant);
router.post('/reviews/:id',sequenceReview)

router
  .route('/:id')
  .get(validExistRestaurant, findOneRestaurant)
  .patch(validExistRestaurant, updateRestaurant)
  .delete(validExistRestaurant, deleteRestaurant);
