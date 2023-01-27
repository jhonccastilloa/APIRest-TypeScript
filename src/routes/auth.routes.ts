import { Router } from "express";
import { getUser, loginCtrl, registerCtrl } from "../controllers/auth.controller";

const router = Router();

router.post("/register", registerCtrl);
router.get("/userregister", getUser);
router.post("/login", loginCtrl);

export default router;
