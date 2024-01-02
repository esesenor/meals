import express from 'express';
import {
  createOrder,
  deleteOrder,
  findAllOrders,
  findOneOrder,
  updateOrder,
} from './orders.controller.js';
import { validExistOrder } from './orders.middleware.js';
import { findAllOrdersUser } from '../users/users.controller.js';

export const router = express.Router();

router.route('/').get(findAllOrders).post(createOrder);

//Trae todas las ordenes del usuario en sesión
router.get('/me', findAllOrdersUser);

router
  .route('/:id')
  .get(validExistOrder, findOneOrder)
  .patch(validExistOrder, updateOrder)
  .delete(validExistOrder, deleteOrder);
