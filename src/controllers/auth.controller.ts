import { request, Request, Response } from "express";
import {
  findUser,
  loginUser,
  registerNewUser,
} from "../services/auth.services";

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await registerNewUser(body);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR_SERVER",
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const response = await findUser();
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR_SERVER",
    });
  }
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await loginUser(body);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "ERROR_SERVER",
    });
  }
};

export { registerCtrl, getUser,loginCtrl };
