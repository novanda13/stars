import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import "dotenv/config";

const createTransaction = async (transactionData) => {
  try {
    const createdTransaction = await prismaClient.transaction.create({
      data: transactionData
    });

    return createdTransaction;
  } catch (error) {
    throw error;
  }
};

const getTransaction = async () => {
  try {
    const transactions = await prismaClient.transaction.findMany();

    return transactions;
  } catch (error) {
    throw error;
  }
};

const deleteTransaction = async (transactionId) => {
  try {
    const deletedTransaction = await prismaClient.transaction.delete({
      where: { id: transactionId }
    });

    return deletedTransaction;
  } catch (error) {
    throw error;
  }
};

export default {
  createTransaction,
  getTransaction,
  deleteTransaction
};
