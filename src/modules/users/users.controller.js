import { INTEGER } from 'sequelize';
import { AppError } from '../../common/errors/appError.js';
import { catchAsync } from '../../common/errors/catchAsync.js';
import {
  verifyPassword,
  encryptedPassword,
} from '../../config/plugins/encripted-password.plugin.js';
import { generateJWT } from '../../config/plugins/generate-jwt.plugin.js';
import {
  validateUser,
  validatePartialUser,
  validateLogin,
} from './users.schema.js';
import { UserService } from './users.service.js';
import jwt from 'jsonwebtoken';
import { envs } from '../../config/enviroments/enviroments.js';

export const register = catchAsync(async (req, res, next) => {
  const { hasError, errorMessages, userData } = validateUser(req.body);
   console.log("Esto es la req:\n",req.params)
  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const user = await UserService.create(userData);

  const token = await generateJWT(user.id);

  return res.status(201).json({
    token,
    user: {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      role: user.role,
      photo: user.photo,
    },
  });
});

export const login = catchAsync(async (req, res, next) => {
  //1. traer los datos de la req.body y validarlos
  const { hasError, errorMessages, userData } = validateLogin(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  //2. validar que el usuario exista en la base de datos
  const user = await UserService.findOneByEmail(userData.email);

  if (!user) {
    return next(new AppError('This account does not exist', 404));
  }

  //3. comparar y comprobar contraseñas
  const isCorrectPassword = await verifyPassword(
    userData.password,
    user.password
  );

  if (!isCorrectPassword) {
    return next(new AppError('Incorrect email or password', 401));
  }

  //4. generar el jwt
  const token = await generateJWT(user.id);

  //5. enviar la respuesta al cliente
  return res.status(200).json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      // photo: user.photo,
    },
  });
});

export const findAllUser = catchAsync(async (req, res, next) => {
  const users = await UserService.findAll();

  return res.status(200).json(users);
});

export const findOneUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  return res.status(200).json({
    id: user.id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    role: user.role,
  });
});

export const updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  console.log("soy user req: ", req)
  const { hasError, errorMessages, userData } = validatePartialUser(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  await UserService.update(user, userData);

  return res.status(200).json({
    message: 'the user has been updated successfully! 	୧(▲ᴗ▲)ノ',
  });
});

export const deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  if (!user) await UserService.delete(user);

  return res.status(204).json(null);
});

export const changePassword = catchAsync(async (req, res, next) => {
  //1. obtener el usuario en session
  const { sessionUser } = req;

  //2. traer los datos de la req.body
  const { currentPassword, newPassword } = req.body;

  //3. validar si la contraseña actual y la nueva son iguales, enviar un error;
  if (currentPassword === newPassword) {
    return next(new AppError('The password cannot be equal ᕦ(⩾﹏⩽)ᕥ', 400));
  }

  //4. validar si la contraseña actual es igual a la contraseña en base de datos
  const isCorrectPassword = await verifyPassword(
    currentPassword,
    sessionUser.password
  );

  if (!isCorrectPassword) {
    return next(new AppError('Incorrect email or password', 401));
  }

  //5. encriptar la nueva contraseña
  const hashedNewPassword = await encryptedPassword(newPassword);

  //6 actualizar la contraseña
  await UserService.update(sessionUser, {
    password: hashedNewPassword,
    passwordChangedAt: new Date(),
  });

  return res.status(200).json({
    message: 'The user password was updated successfully!',
  });
});

export const findAllOrdersUser = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;
  const allOrders = await UserService.findAllOrders(sessionUser.dataValues.id);
  return res.status(202).json(allOrders);
});

export const findOneOrderUser = catchAsync(async (id, req, res, next) => {
  const { sessionUser } = req;

  await UserService.findOneOrderUser(id);

  return res.status(204).json({ message: `order` });
});
