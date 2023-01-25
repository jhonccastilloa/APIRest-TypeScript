import { Request, Response } from "express";

const getItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "ERROR_GET_ITEM",
    });
  }
};
const getItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "ERROR_GET_ITEM",
    });
  }
};
const createItem = (req: Request, res: Response) => {
  try {
    const { body } = req;
    console.log(body)
    res.send("hola")
  } catch (error) {
    res.status(500).json({
      message: "ERROR_GET_ITEM",
    });
  }
};
const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "ERROR_GET_ITEM",
    });
  }
};
const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "ERROR_GET_ITEM",
    });
  }
};

export { getItems, getItem, createItem, updateItem, deleteItem };
