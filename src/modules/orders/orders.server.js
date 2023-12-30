import Order from './orders.model.js';

export class OrderService {
  static async findOne(id) {
    return await Order.findOne({
      where: {
        id: id,
        status: 'active',
      },
    });
  }

  static async findOneCompleted(id) {
    return await Order.findOne({
      where: {
        id: id,
        status: 'completed',
      },
    });
  }

  static async findOneCancelled(id) {
    return await Order.findOne({
      where: {
        id: id,
        status: 'cancelled',
      },
    });
  }

  static async findAllActive() {
    return await Order.findAll({
      where: {
        status: 'active',
      },
    });
  }

  static async findAllCancelled() {
    return await Order.findAll({
      where: {
        status: 'Cancelled',
      },
    });
  }

  static async findAllCompleted() {
    return await Order.findAll({
      where: {
        status: 'Completed',
      },
    });
  }

  static async findAll() {
    return await Order.findAll();
  }

  static async create(data) {
    return await Order.create(data);
  }

  static async update() {
    return await Order.update({ status: 'completed' });
  }

  static async delete(order) {
    return await order.update({ status: 'cancelled' });
  }
}
