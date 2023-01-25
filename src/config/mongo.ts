import "dotenv/config";
import { connect } from "mongoose";

const DB_URI = <string>process.env.DB_URI;
const db = async () => {
  connect(DB_URI);
};

export default db;
