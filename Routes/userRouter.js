import express from "express";
import userController from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.post("/create", userController.createUser);
userRouter.get("/getusers", userController.getUsers);
userRouter.put("/updateUser/:userId", userController.updateUser);
userRouter.delete("/delete/:userId", userController.deleteUser);

export default userRouter;
