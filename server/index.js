import express from "express";
import connection from "./databse/db.js";
import dotenv from "dotenv";
import router from "./routes/route.js";
const app = express();
dotenv.config();
const PORT = process.env.port || 8000;

app.use("/", router);

app.listen(PORT, (req, res) => {
  console.log(`server is started at port ${PORT}`);
});
//database

const DB_URL = process.env.DB_URL;
connection(DB_URL);
