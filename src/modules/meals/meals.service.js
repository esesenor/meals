import Restaurant from '../restaurants/restaurants.model.js';
import Meal from './meals.model.js';

export class MealService {
  static async findOne(id) {
    return await Meal.findOne({
      where: {
        id: id,
        status: 'available'
      },
      include: [ //trae mas los datos del restaurante a donde pertenece la meals
        {
          model: Restaurant,
          attributes: ['id', 'name', 'address', 'rating'],
        },
      ],
    });
  }

  static async findAll() {
    return await Meal.findAll({
      where: {
        status: 'available'
      },
      include: [
        {
          model: Restaurant,
          attributes: ['id', 'name', 'address', 'rating'],
        },
      ],
    });
  }

  static async create(data) {
    return await Meal.create(data);
  }

  static async update(meal, data) {
    return await meal.update({
      name: data.name,
      price: data.price
    });
  }

  static async delete(meal) {
    return await meal.update({ status: 'disabled' });
  }
}
