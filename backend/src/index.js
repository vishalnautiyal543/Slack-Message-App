import express from "express";
import { PORT } from "./config/serverConfig.js";
import { StatusCodes } from 'http-status-codes';
import { connectDB } from "./config/dbConfig.js";
import apiRoutes from './routes/apiRoutes.js'

const app = express();

app.get("/ping", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Hello, World!" });
});

//routes
app.use('/api',apiRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});