import { Schema, Types, model, Model } from "mongoose";

const ItemSchema = new Schema({
  color: {
    type: String,
  },
  gas: {
    type: String,
    enum: ["gasolina", "elecric"],
  },
  year: {
    type: Number,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const ItemModel = model("items", ItemSchema);
export default ItemModel;
