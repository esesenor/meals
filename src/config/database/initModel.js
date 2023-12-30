import Review from '../../modules/reviews/reviews.model.js';
import User from '../../modules/users/users.model.js';
import Restaurant from '../../modules/restaurants/restaurants.model.js';
import Order from '../../modules/orders/orders.model.js';
import Meal from '../../modules/meals/meals.model.js';

export const initModel = () => {
  User.hasMany(Review);
  Review.belongsTo(User);

  User.hasMany(Order);
  Order.belongsTo(User);

  Restaurant.hasMany(Meal);
  Meal.belongsTo(Restaurant);

  Restaurant.hasMany(Review);
  Review.belongsTo(Restaurant);

  Order.hasOne(Meal);
  Meal.belongsTo(Order);
};
