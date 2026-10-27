import express from "express";
import { PORT } from "./config/serverConfig.js";
import { StatusCodes } from 'http-status-codes';

const app = express();

app.get("/ping", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Hello, World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});