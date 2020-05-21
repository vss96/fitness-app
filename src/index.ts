import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { labelRouter } from "./routes/label";
import { taskRouter } from "./routes/task";

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT || 5000; // default port to listen
const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("mongo connection established successfully"))
  .catch((err: any) => console.log(err));
export const connection = mongoose.connection;

app.use("/label", labelRouter);
app.use("/task", taskRouter);

app.listen(port, () => {
  console.log(`hoooHooo!! server started at http://localhost:${port}`);
});
