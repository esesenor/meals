import { AppError } from '../../common/errors/appError.js';
import { catchAsync } from '../../common/errors/catchAsync.js';
import { RestaurantService } from './restaurants.service.js';

export const validExistRestaurant = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const restaurant = await RestaurantService.findOne(id);

  if (!restaurant) {
    return next(new AppError('Restaurant not found', 404));
  }

  req.restaurant = restaurant;
  next();
});
