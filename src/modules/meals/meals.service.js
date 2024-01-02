import Meal from './Meals.model.js';

export class MealService {
  static async findOne(id) {
    return await Meal.findOne({
      where: {
        id: id,
      },
    });
  }

  static async findAll() {
    return await Meal.findAll();
  }

  static async create(data) {
    return await Meal.create(data);
  }

  static async update(meal, data) {
    return await meal.update({
      name: data.name,
      price: data.price,
    });
  }

  static async delete(meal) {
    return await meal.update({ status: 'disabled' });
  }
}
