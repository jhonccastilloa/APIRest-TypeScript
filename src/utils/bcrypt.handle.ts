import { hashSync, compareSync } from "bcryptjs";

const encrypt = (pass: string) => {
  const passwordHash = hashSync(pass, 8);
  return passwordHash;
};
const verified = (pass: string, passHash: string) => {
  const isCorrect = compareSync(pass, passHash);
  return isCorrect;
};

export { encrypt,verified };
