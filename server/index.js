import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, { dbName: "Filipini" })
  .then(() =>
    app.listen(8000, () => console.log(`Server running on port: 8000`))
  )
  .catch(error => console.log(error.message));

app.post("/newpost", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
