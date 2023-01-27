import { sign, verify } from "jsonwebtoken";

const JWT_SECRET: string = process.env.JWT_SECRET || "";
const gererateToken = (name: string) => {
  const jwt = sign({ name }, JWT_SECRET, {
    expiresIn: "2h",
  });

  return jwt;
};

const verifyToken = (jwt: string) => {
  const isCorrect = verify(jwt, JWT_SECRET);
  return isCorrect;
};

export { gererateToken, verifyToken };
