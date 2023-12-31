import { catchAsync } from '../../common/errors/catchAsync.js';
import { AppError } from './../../common/errors/appError.js';
import { validateCreateRestaurant, validatePartialRestaurant } from './restaurants.schema.js';
import { RestaurantService } from './restaurants.service.js';

export const findAllRestaurant = catchAsync(async (req, res) => {
  const restaurant = await RestaurantService.findAll();

  return res.status(200).json(restaurant);
});

export const createRestaurant = catchAsync(async (req, res) => {
  const { hasError, errorMessages, restaurantData } = validateCreateRestaurant(
    req.body
  );

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const restaurant = await RestaurantService.create(restaurantData);

  return res.status(201).json(restaurant);
});

export const findOneRestaurant = catchAsync(async (req, res) => {
  const { restaurant } = req;
  return res.status(200).json(restaurant);
});

export const updateRestaurant = catchAsync(async (req, res, next) => {
  const { restaurant } = req;
  const { hasError, errorMessages, restaurantData } = validatePartialRestaurant(
    req.body
  );

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const restaurantUpdated = await RestaurantService.update(restaurant, restaurantData);
/* `= await` is used to wait for the promise to resolve and return the
result. In the given code, it is used to wait for the asynchronous
functions `RestaurantService.findAll()`, `RestaurantService.create()`,
`RestaurantService.update()`, and `RestaurantService.delete()` to complete
and return the result before proceeding to the next line of code. */

  return res.status(200).json(restaurantUpdated)
});

export const deleteRestaurant = catchAsync(async (req, res, next) => {
  const { restaurant } = req;

  await RestaurantService.delete(restaurant);

  return res.status(204).json(null);
});
