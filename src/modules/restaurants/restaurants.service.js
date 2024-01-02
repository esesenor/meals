import Restaurant from './restaurants.model.js';

export class RestaurantService {
  static async findOne(id) {
    return await Restaurant.findOne({
      where: {
        id: id,
        status: 'available',
      },
    });
  }

  static async findAll() {
    return await Restaurant.findAll({
      where: {
        status: 'available',
      },
    });
  }

  static async create(data) {
    return await Restaurant.create(data);
  }

  static async update(data) {
    return await Restaurant.update(data);
  }

  static async delete(restaurant) {
    return await restaurant.update({ status: 'disable' });
  }

  
}
