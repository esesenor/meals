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

  static async update(restaurant,data) {
    return await restaurant.update({
      name: data.name,
      address: data.address
    });
  }

  static async delete(restaurant) {
    return await restaurant.update({ status: 'disabled' });
  }

  
}
