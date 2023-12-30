import Review from './reviews.model.js';

export class ReviewService {
  static async findOne(id) {
    return await Review.findOne({
      where: {
        id: id,
        status: 'available',
      },
    });
  }

  static async findAll() {
    return await Review.findAll({
      where: {
        status: 'available',
      },
    });
  }

  static async create(data) {
    return await Review.create(data);
  }

  static async update(data) {
    return await Review.update(data);
  }

  static async delete(review) {
    return await review.update({ status: 'disable' });
  }
}
