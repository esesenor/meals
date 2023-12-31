import Review from '../../modules/reviews/reviews.model.js';
import User from '../../modules/users/users.model.js';
import Restaurant from '../../modules/restaurants/restaurants.model.js';
import Order from '../../modules/orders/orders.model.js';
import Meal from '../../modules/meals/meals.model.js';

export const initModel = () => {
  User.hasMany(Review);
  Review.belongsTo(User, { foreignKey: 'userId' });

  User.hasMany(Order);
  Order.belongsTo(User, { foreignKey: 'userId' });

  Restaurant.hasMany(Meal);
  Meal.belongsTo(Restaurant, { foreignKey: 'restaurantId' });

  Restaurant.hasMany(Review);
  Review.belongsTo(Restaurant, { foreignKey: 'restaurantId' });

  Meal.hasOne(Order);
  Order.belongsTo(Meal, { foreignKey: 'mealId' });
};
