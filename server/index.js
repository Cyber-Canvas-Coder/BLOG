import express from "express";
import connection from "./databse/db.js";
import dotenv from "dotenv";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
const PORT = process.env.port;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.listen(PORT, (req, res) => {
  console.log(`server is started at port ${PORT}`);
});
//database

const DB_URL = process.env.DB_URL;
connection(DB_URL);
