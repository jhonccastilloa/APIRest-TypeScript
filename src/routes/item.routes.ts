import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/item.controllers";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/",checkJwt, getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
