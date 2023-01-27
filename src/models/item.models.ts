import { Schema, model } from "mongoose";

const ItemSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;
