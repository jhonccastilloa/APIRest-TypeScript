import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface Car {
  color: String;
  gas: String;
  year: Number;
  description: String;
  price: Number;
}

export interface Auth {
  email: string;
  password: string;
}

export interface User extends Auth {
  name: string;
}

declare global {
  namespace Express {
    interface Request {
      userName: JwtPayload | string;
    }
  }
}

export interface JwtUser {
  name: string;
  iat: number;
  exp: number;
}
