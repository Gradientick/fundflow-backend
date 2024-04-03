import express from "express";
import config from "./utils/config.js";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./Routes/userCreateRouter.js";

async function connectToDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
}

const app = express();
const PORT = config.PORT || 3001;

app.use(cors());
app.use(express.json());
connectToDB(config.DB);

app.get("/", (_req, res) => {
  res.send("hello World");
});

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
