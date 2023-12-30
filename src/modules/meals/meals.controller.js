import { catchAsync } from '../../common/errors/catchAsync.js';
import { MealService } from './meals.service.js';

export const findAllMeals = catchAsync(async (req, res, next) => {
  const meals = await MealService.findAll();

  return res.status(200).json(meals);
});

export const createMeal = catchAsync(async (req, res, next) => {
  const { hasError, errorMessages, mealData } = validateMeal(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const meal = await MealService.create(mealData);

  return res.status(201).json(meal);
});

export const findOneMeal = catchAsync(async (req, res, next) => {
  const { meal } = req;

  return res.status(200).json(meal);
});

export const updateMeal = catchAsync(async (req, res, next) => {
  const { meal } = req;

  const { hasError, errorMessages, mealData } = req.body;

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  await MealService.update(meal, mealData);

  return res.status(200).json({
    message: 'the meal has been updated',
  });
});

export const deleteMeal = catchAsync(async (req, res, next) => {
  const { meal } = req;

  await MealService.delete(meal);

  return res.status(204).json(null);
});
