import User from './users.model.js';
import Order from '../orders/orders.model.js';

export class UserService {
  static async findOne(id) {
    return await User.findOne({
      where: {
        id: id,
      },
    });
  }

  static async findAll() {
    return await User.findAll({
      where: {
        status: 'available',
      },
    });
  }

  static async create(data) {
    return await User.create(data);
  }

  static async update(user, data) {
    return await user.update(data);
  }

  static async delete(user) {
    return await user.update({ status: 'disabled' });
  }

  static async findOneByEmail(email) {
    return await User.findOne({
      where: {
        status: 'available',
        email: email,
      },
    });
  }

  static async findAllOrderUser() {
    return await Order.findAll({
      where: {
        status: 'active',
      },
      include: [
        {
          model: User,
        },
      ],
    });
  }

  static async findOneOrderUser(id) {
    return await Order.findOne({
      where: {
        id: id,
        status: 'active',
      },
      include: [
        {
          model: User,
        },
      ],
    });
  }
}
