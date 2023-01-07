import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./Routers/userRouter.js";
import bodyParser from 'body-parser'
import cors from "cors";

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

const PORT = 3500

app.listen(PORT, () => {
  // connect to database
  mongoose
    .connect('mongodb+srv://sahib:nokiaasha308@cluster0.qpsm9y7.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error));
});
