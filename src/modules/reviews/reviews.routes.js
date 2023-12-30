import express from 'express';
import {
  deleteReview,
  findAllReviews,
  findOneReview,
  sequenceReview,
  updateReview,
} from './reviews.controller.js';
import { validExistReview } from './reviews.middleware.js';

export const router = express.Router();

router.get('/', findAllReviews);

router.post('/sequence-review', sequenceReview);

router
  .route('/:id')
  .get(validExistReview, findOneReview)
  .patch(validExistReview, updateReview)
  .delete(validExistReview, deleteReview);
