import express = require("express");
import { Label } from "../dtos/label";

export const labelRouter = express.Router();

labelRouter.get("/", (req, res) => {
  const labels: Label[] = [
    { id: 123, name: "sports" },
    { id: 124, name: "running" },
  ];
  console.log(req, res);
  res.status(200).send(labels);
});
