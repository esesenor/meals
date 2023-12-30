import Meal from './Meals.model.js';

export class MealService {
  static async findOne(id) {
    return await Meal.findOne({
      where: {
        id: id,
      },
    });
  }

  static async findAllDisabled() {
    return await Meal.findAll({
      where: {
        status: 'disabled',
      },
    });
  }

  static async findAllAvailable() {
    return await Meal.findAll({
      where: {
        status: 'available',
      },
    });
  }

  static async findAll() {
    return await Meal.findAll();
  }

  static async create(data) {
    return await Meal.create(data);
  }

  static async update(data) {
    return await Meal.update(data);
  }

  static async delete(meal) {
    return await meal.update({ status: 'disabled' });
  }
}
