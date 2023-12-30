import express from 'express';
import {
  createOrder,
  deleteOrder,
  findAllOrders,
  findOneOrder,
  updateOrder,
} from './order.controller.js';
import { validExistOrder } from './order.middleware.js';

export const router = express.Router();

router.route('/').get(findAllOrders).post(createOrder);

router
  .route('/:id')
  .get(validExistOrder, findOneOrder)
  .patch(validExistOrder, updateOrder)
  .delete(validExistOrder, deleteOrder);
