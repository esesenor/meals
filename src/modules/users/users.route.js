import express from 'express';
import {
  register,
  login,
  findAllUser,
  findOneUser,
  updateUser,
  deleteUser,
  changePassword,
  findAllOrdersUser,
  findOneOrderUser,
} from './users.controller.js';

import {
  protect,
  protectAccountOwner,
  restrictTo,
  validateExistUser,
} from './users.middleware.js';

export const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.use(protect); //////////////////////////////////////////////////////////

router.patch('/change-password', changePassword);

router.get('/', findAllUser);
router.get('/orders', findAllOrdersUser);
router.get('/orders/:id', findOneOrderUser);

router
  .route('/:id')
  .get(restrictTo('admin'), validateExistUser, findOneUser)
  .patch(validateExistUser, protectAccountOwner, updateUser)
  .delete(validateExistUser, protectAccountOwner, deleteUser);
