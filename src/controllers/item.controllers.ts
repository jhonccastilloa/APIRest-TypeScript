import { Request, Response } from "express";
import { JwtUser } from "../interfaces/types";
import {
  findItem,
  findItems,
  insertItem,
  removeItem,
  renovateItem,
} from "../services/itemServices";

const getItems = async (req: Request, res: Response) => {
  try {
    const { name } = req.userName as JwtUser;
    console.log(name);
    const result = await findItems();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "ERROR_GET_ITEM",
    });
  }
};
const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await findItem(id);
    res.json(result);
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      message: "ERROR_GET_ITEM",
    });
  }
};
const createItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const result = await insertItem(body);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "ERROR_GET_ITEM",
    });
  }
};
const updateItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const result = await renovateItem(id, body);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "ERROR_GET_ITEM",
    });
  }
};
const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await removeItem(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({
      message: "ERROR_GET_ITEM",
    });
  }
};

export { getItems, getItem, createItem, updateItem, deleteItem };
