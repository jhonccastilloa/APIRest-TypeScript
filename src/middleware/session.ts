import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jswt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(401).json({ message: "you are need a token" });
    const jwt = authorization.split(" ")[1];
    const user = verifyToken(jwt);

    if (!user) return res.status(401).json({ message: "authenticate error" })
    req.userName = user;
    next();
  } catch (error) {
    console.log({ error });
    res.status(400);
    res.send("SESSION_NO_VALIDAD");
  }
};
export { checkJwt };
