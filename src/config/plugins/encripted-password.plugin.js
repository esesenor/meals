import bcrypt from 'bcrypt';

//1.
export const encryptedPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

//2.
export const verifyPassword = async (bodyPassword, userPassword) => {
  return await bcrypt.compare(bodyPassword, userPassword);
};
