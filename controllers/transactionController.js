import TransactionModel from "../Models/TransactionModel.js";

async function createTransaction(req, res) {
  const { type, amount, user } = req.body;

  try {
    const newTransaction = new TransactionModel({
      type,
      amount,
      user,
    });

    const savedTransaction = await newTransaction.save();
    return res.status(201).json(savedTransaction);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error Creating Transaction", error });
  }
}

async function getTransactions(req, res) {
  const { userId } = req.params;

  try {
    const transactions = await TransactionModel.find({ user: userId });
    return res.status(200).json(transactions);
  } catch (error) {
    return res
      .status(200)
      .json({ message: "Fetching Transactions Failed", error });
  }
}

async function deleteTransaction(req, res) {
  const { transactionId } = req.params;

  try {
    const deletedTransaction = await TransactionModel.findByIdAndDelete(
      transactionId
    );

    if (!deleteTransaction) {
      return res.status(404).json({ message: "Transaction Not Found" });
    }

    return res
      .status(200)
      .json({ message: "Transaction Succesfully Deleted", deletedTransaction });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error Deleting Transaction", error });
  }
}

async function editTransaction(req, res) {
  const { transactionId } = req.params;
  const { type, amount } = req.body;

  try {
    const updatedTransaction = await TransactionModel.findByIdAndUpdate(
      transactionId,
      { type, amount },
      { new: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction Not Found" });
    }

    return res.status(200).json({
      message: "Transaction Changed Successfully",
      updatedTransaction,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error Deleting Transaction", error });
  }
}

export default {
  createTransaction,
  getTransactions,
  deleteTransaction,
  editTransaction,
};
