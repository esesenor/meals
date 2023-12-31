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

  static async delete(restaurantId,reviewId) {
    return await Review.update({ status: "disabled" },
    {
      where: {
        id: reviewId,
        restaurant_id: restaurantId
      }
    });
  }
}
