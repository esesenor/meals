import User from './users.model.js';
import Order from '../orders/orders.model.js';
import Meal from '../meals/meals.model.js';
import Restaurant from '../restaurants/restaurants.model.js';

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
    return await user.update({
      name: data.name,
      email: data.email,
    });
  }

  static async delete(id) {
    return await User.update(
      { status: 'disabled' },
      {
        where: {
          id: id,
        },
      }
    );
  }

  static async findOneByEmail(email) {
    return await User.findOne({
      where: {
        status: 'available',
        email: email,
      },
    });
  }

  static async findAllOrders(id) {
    return await Order.findAll({
      where: {
        status: 'active',
        user_id: id,
      },
      attributes: ['totalPrice', 'quantity'],
      include: [
        {
          model: Meal,
          attributes: ['name', 'price'],
          include: [
            {
              model: Restaurant,
              attributes: ['name', 'rating'],
            },
          ],
        },
        {
          model: User,
          attributes: ['id', 'name', 'role'],
        },
      ],
    });
  }

  static async findOneOrderUser(userId, idOrder) {
    return await Order.findOne({
      where: {
        id: idOrder,
        status: 'active',
      },
      attributes: ['id', 'totalPrice', 'quantity'],
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'role'],
          where: {
            id: userId, // Filtrar el usuario por su ID
          },
        },
      ],
    });
  }
}
