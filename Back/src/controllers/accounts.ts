import { Request, Response } from "express";
import { AccountInterface } from "../interfaces";
import {
  getAccountService,
  createAccountService,
  existingAccountService,
} from "../services/accounts";

export const createAccountController = async (
  req: Request,
  res: Response,
): Promise<unknown> => {
  const { name, accountNumber, balance } = req.body;
  if (!name || !accountNumber || !balance) {
    return res
      .status(400)
      .json({ message: "Account name, number, and balance are required" });
  }

  if (parseInt(balance) < 0) {
    return res.status(400).json({ message: "Balance cannot be negative" });
  }

  try {
    const existingAccount: AccountInterface | null =
      await existingAccountService(accountNumber);

    if (existingAccount) {
      return res.status(200).json(existingAccount);
    }

    const newAccount: AccountInterface = await createAccountService({
      name,
      accountNumber,
      balance,
    });

    return res.status(201).json(newAccount);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getBalanceController = async (
  req: Request,
  res: Response,
): Promise<unknown> => {
  try {
    const id: string = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Account ID is required" });
    }

    const account: AccountInterface | null = await getAccountService(id);

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    return res.status(200).json({
      balance: account.balance,
    });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
};
