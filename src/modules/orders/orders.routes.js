import express from 'express';
import {
  createOrder,
  deleteOrder,
  findAllOrders,
  findOneOrder,
  updateOrder,
} from './orders.controller.js';
import { validExistOrder } from './orders.middleware.js';

export const router = express.Router();

router.route('/').get(findAllOrders).post(createOrder);

router
  .route('/:id')
  .get(validExistOrder, findOneOrder)
  .patch(validExistOrder, updateOrder)
  .delete(validExistOrder, deleteOrder);
