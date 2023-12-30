import express from 'express';
import {
  createMeal,
  deleteMeal,
  findAllMeals,
  findOneMeal,
  updateMeal,
} from './medic.controller.js';
import { validExistMeal } from './medic.middleware.js';

export const router = express.Router();

router.route('/').get(findAllMeals).post(createMeal);

router
  .route('/:id')
  .get(validExistMeal, findOneMeal)
  .patch(validExistMeal, updateMeal)
  .delete(validExistMeal, deleteMeal);
