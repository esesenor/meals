import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database/database.js';

const Review = sequelize.define('reviews', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    field: 'restaurant_id',
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('available', 'disabled'),
    allowNull: false,
    defaultValue: 'available',
  },
});

export default Review;
