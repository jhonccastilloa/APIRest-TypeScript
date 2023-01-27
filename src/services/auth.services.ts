import { Auth, User } from "../interfaces/types";
import UserModel from "../models/user.models";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { gererateToken } from "../utils/jswt.handle";

const findUser = async () => {
  const responseUser = await UserModel.find({});
  return responseUser;
};
const registerNewUser = async ({ password, name, email }: User) => {
  const checkUser = await UserModel.findOne({ email });
  if (checkUser) return { message: "this user was a count" };
  const passwordHash = encrypt(password);

  const responseUser = await UserModel.create({
    name,
    email,
    password: passwordHash,
  });
  return responseUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email });
  if (!user) return { message: "user not found" };
  const isLogger = verified(password, user.password);
  if (!isLogger) return { message: "incorrect password" };
  const token = gererateToken(user.name);
  return { token, user };
};
export { registerNewUser, findUser, loginUser };
