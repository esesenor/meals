import { catchAsync } from '../../common/errors/catchAsync.js';
import { AppError } from './../../common/errors/appError.js';
import { validateCreateOrder } from './orders.schema.js';
import { OrderService } from './orders.service.js';

export const findAllOrder = catchAsync(async (req, res) => {
  const order = await OrderService.findAll();

  return res.status(200).json(order);
});

export const createOrder = catchAsync(async (req, res) => {
  const { hasError, errorMessages, Data } = validateCreateOrder(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const order = await OrderService.create(Data);

  return res.status(201).json(order);
});

export const findOneOrder = catchAsync(async (req, res) => {
  const { order } = req;

  return res.status(200).json(order);
});

export const updateOrder = catchAsync(async (req, res) => {
  const { order } = req;

  const orderUpdated = await OrderService.update(order);

  return res.status(200).json(orderUpdated);
});

export const deleteOrder = catchAsync(async (req, res) => {
  const { order } = req;

  await OrderService.delete(order);

  return res.status(204).json(null);
});
