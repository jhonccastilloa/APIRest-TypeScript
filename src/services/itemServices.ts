import { Car } from "../interfaces/types";
import ItemModel from "../models/item.models";

const findItems = async () => {
  const items = await ItemModel.find({});
  return items;
};
const findItem = async (id: string) => {
  const responseItem = await ItemModel.findById(id);
  if (!responseItem) return { message: "item not found" };
  return responseItem;
};

const insertItem = async (body: Car) => {
  const responseItem = await ItemModel.create(body);
  return responseItem;
};

const renovateItem = async (id: string, body: Car) => {
  const options = {
    new: true,
  };
  const responseItem = await ItemModel.findByIdAndUpdate(id, body, options);

  return responseItem;
};

const removeItem = async (id: string) => {
  const responseItem = await ItemModel.deleteOne({ _id: id });
  if (!responseItem.deletedCount) return { message: "item not found" };
  return responseItem;
};
export { findItems, insertItem, findItem, renovateItem, removeItem };
