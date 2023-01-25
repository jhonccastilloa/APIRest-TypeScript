import express from "express";
import cors from "cors";
import "dotenv/config";
import routerItem from "./routes/item.routes";
import db from "./config/mongo";
const app = express();

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json())

app.use("/items",routerItem);
db()
  .then(() => console.log("Conection database successfully"))
  .catch((err) => console.log(err));
app.listen(PORT, () => {
  console.log("Servidor iniciado en el puerto:", PORT);
});
