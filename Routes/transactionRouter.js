import express from "express";
import transactionController from "../controllers/transactionController.js";

const transactionRouter = express.Router();

transactionRouter.post(
  "/new-transaction",
  transactionController.createTransaction
);
transactionRouter.get("/:userId", transactionController.getTransactions);
transactionRouter.put(
  "/edit/:transactionId",
  transactionController.editTransaction
);
transactionRouter.delete(
  "/delete/:transactionId",
  transactionController.deleteTransaction
);
export default transactionRouter;
