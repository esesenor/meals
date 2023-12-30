import express from 'express';
import { router as usersRoute } from '../modules/users/users.route.js';
import { router as reviewsRoute } from '../modules/reviews/reviews.routes.js';
import { router as restaurantsRoute } from '../modules/restaurants/restaurants.routes.js';
import { router as ordersRoute } from '../modules/orders/orders.routes.js';
import { router as mealsRoute } from '../modules/meals/meals.routes.js';

export const router = express.Router();

router.use('/users', usersRoute);
router.use('/reviews', reviewsRoute);
router.use('/restaurants', restaurantsRoute);
router.use('/orders', ordersRoute);
router.use('/meals', mealsRoute);
