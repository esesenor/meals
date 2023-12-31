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

  static async update(userId, restaurantId, reviewId, review, data) {
    return await review.update({
      comment: data.comment,
      rating: data.rating
    },
      {
        where: {
          id: reviewId,
          userId: userId,
          restaurantId: restaurantId,
        }
      });
  }

  static async delete(review) {
    return await review.update({ status: 'disable' });
  }
}
