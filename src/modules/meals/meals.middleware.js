import { AppError } from '../../common/errors/appError.js';
import { catchAsync } from '../../common/errors/catchAsync.js';
import { MealService } from './meals.service.js';

export const validExistMeal = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const meal = await MealService.findOne(id);

  if (!meal) {
    return next(new AppError('order not found', 404));
  }

  req.meal = meal;
  next();
});
