import { getUserIdFromToken } from "../middleware/auth-middleware.js";
import transactionService from "../service/transaction-service.js";

const createTransaction = async (req, res, next) => {
  try {
    const transactionData = req.body;
    const userId = getUserIdFromToken(req);

    transactionData.user_id = userId;
    const createdTransaction = await transactionService.createTransaction(
      transactionData
    );

    if (!createdTransaction) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(createdTransaction);
  } catch (e) {
    next(e);
  }
};

const getTransaction = async (req, res, next) => {
  try {
    const transactions = await transactionService.getTransaction();

    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};

const deleteTransaction = async (req, res, next) => {
  try {
    const transactionId = req.params.id;

    const deletedTransaction = await transactionService.deleteTransaction(
      transactionId
    );

    if (!deletedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export default {
  createTransaction,
  getTransaction,
  deleteTransaction
};
