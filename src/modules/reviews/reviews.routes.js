import express from 'express';
import {
  deleteReview,
  findAllReviews,
  findOneReview,
  scheduleReview,
  updateReview,
} from './review.controller.js';
import { validExistReview } from './review.middleware.js';

export const router = express.Router();

router.get('/', findAllReviews);

router.post('/schedule-review', scheduleReview);

router
  .route('/:id')
  .get(validExistReview, findOneReview)
  .patch(validExistReview, updateReview)
  .delete(validExistReview, deleteReview);
