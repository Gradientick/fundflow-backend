import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["Deposit", "Withdrawal"],
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
});

const TransactionModel = mongoose.model("Transaction", transactionSchema);

export default TransactionModel;
