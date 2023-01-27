import { Schema, model } from "mongoose";
import { User } from "../interfaces/types";

const UserSchema = new Schema<User>(
  {
    name: {
      require: true,
      type: String,
    },
    password: {
      require: true,
      type: String,
    },
    email: {
      require: true,
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model("user", UserSchema);
export default UserModel;
