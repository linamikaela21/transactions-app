import { TransactionInterface } from "../interfaces";
import { Request, Response } from "express";
import {
  createTransactionService,
  getTransactionsService,
} from "../services/transactions";
import { getAccountService, updateBalanceService } from "../services/accounts";

export const createTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const transaction: TransactionInterface = req.body;

    if (!transaction.accountID || !transaction.type || !transaction.amount) {
      res.status(400).json({
        message: "Transaction needs Account ID, Type, and Amount",
      });
    }

    const account = await getAccountService(transaction.accountID);

    if (!account) {
      res.status(404).json({
        message: "Account not found",
      });
    }

    const currentBalance = await getAccountService(transaction.accountID, {
      select: "balance",
    });

    if (
      transaction.type === "WITHDRAWAL" &&
      transaction.amount >= (currentBalance?.balance || 0)
    ) {
      res.status(200).json({
        message: "Withdrawal amount exceeds current balance",
        currentBalance: currentBalance?.balance,
      });
    } else {
      const transactions: TransactionInterface[] =
        await createTransactionService(transaction);

      const { balance } = await updateBalanceService(
        transaction.accountID,
        transaction.type === "DEPOSIT"
          ? transaction.amount
          : -transaction.amount
      );

      res.status(201).json({ balance, transactions });
    }
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getAllTransactions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { accountID } = req.params;

    if (!accountID) {
      res.status(400).json({
        message: "Account ID is required",
      });
    }

    const transactions: TransactionInterface[] =
      await getTransactionsService(accountID);

    res.status(200).json(transactions);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
};
