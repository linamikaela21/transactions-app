import { TransactionInterface } from "../interfaces";
import Transaction from "../models/transaction";

export const createTransactionService = async (
  transactionData: TransactionInterface,
): Promise<TransactionInterface[]> => {
  const newTransaction = await new Transaction(transactionData).save();
  const transactions = await Transaction.find({
    accountID: newTransaction.accountID,
  }).sort({
    createdAt: "desc",
  });

  return transactions;
};

export const getTransactionsService = async (
  accountID: string,
): Promise<TransactionInterface[]> => {
  const transactions = await Transaction.find({ accountID }).sort({
    createdAt: "desc",
  });
  return transactions;
};
