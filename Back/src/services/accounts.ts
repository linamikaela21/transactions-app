import Account from "../models/account";
import mongoose from "mongoose";
import { AccountInterface } from "../interfaces";

export const existingAccountService = async (
  accountNumber: string,
): Promise<AccountInterface | null> => {
  return await Account.findOne({
    accountNumber: accountNumber,
  });
};

export const getAccountService = async (
  id: string,
  where?: {
    select?: string;
  },
): Promise<AccountInterface | null> => {
  const account = await Account.findById(id).select(where?.select || "");
  return account;
};

export const createAccountService = async ({
  name,
  accountNumber,
  balance,
}: {
  name: string;
  accountNumber: string;
  balance: number;
}): Promise<AccountInterface> => {
  const existingAccount = await Account.findOne({
    accountNumber: accountNumber,
  });
  if (existingAccount) {
    throw new Error("Account with this account number already exists");
  }

  const newAccount = await new Account({
    name,
    accountNumber,
    balance,
    id: new mongoose.Types.ObjectId(),
  }).save();

  return newAccount;
};

export const updateBalanceService = async (
  id: string,
  amount: number,
): Promise<{
  balance: number;
}> => {
  const account = await Account.findById(id);
  if (!account) {
    throw new Error("Account not found");
  }

  account.balance += amount;
  await account.save();

  return account;
};
