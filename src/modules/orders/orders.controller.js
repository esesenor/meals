import { catchAsync } from '../../common/errors/catchAsync.js';
import { AppError } from './../../common/errors/appError.js';
import Order from './orders.model.js';
import { OrderService } from './orders.service.js';

export const findAllOrders = catchAsync(async (req, res) => {
  const order = await OrderService.findAllActive();

  return res.status(200).json(order);
});

export const createOrder = catchAsync(async (req, res) => {});

export const findOneOrder = catchAsync(async (req, res, next) => {
  const { review } = req;

  return res.status(200).json(review);
});

export const deleteOrder = catchAsync(async (req, res) => {
  const { order } = req;

  await OrderService.delete(order);

  return res.status(204).json({
    message: 'Disable Order ⊹╰(⌣ʟ⌣)╯⊹',
  });
});

export const updateOrder = catchAsync(async (req, res) => {
  const { id } = req.params;
  const order = Order.findOne(id);
  await order.update();

  return res.status(204).json({
    message: 'Cancelled Order ⊹╰(⌣ʟ⌣)╯⊹',
  });
});
