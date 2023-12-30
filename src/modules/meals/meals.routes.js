import express from 'express';
import {
  createMeal,
  deleteMeal,
  findAllMeals,
  findOneMeal,
  updateMeal,
} from './meals.controller.js';
import { validExistMeal } from './meals.middleware.js';

export const router = express.Router();

router.route('/').get(findAllMeals).post(createMeal);

router
  .route('/:id')
  .get(validExistMeal, findOneMeal)
  .patch(validExistMeal, updateMeal)
  .delete(validExistMeal, deleteMeal);
