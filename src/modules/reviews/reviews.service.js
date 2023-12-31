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

  static async create(reviewData) {
    return await Review.create(reviewData);
  }

  static async update(data) {
    return await Review.update(data);
  }

  static async delete(review) {
    return await review.update({ status: 'disable' });
  }
}
