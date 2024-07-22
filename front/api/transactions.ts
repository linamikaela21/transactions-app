"use client";

import { routes } from "../app/constants/routes";
import { TransactionInterface } from "../interfaces/Transaction";

export const createTransaction = async (
  data: Omit<TransactionInterface, "_id">
) => {
  try {
    const response = await fetch(routes.createTransaction, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseJSON = await response.json();

    if (response.status === 200) {
      return  { data: responseJSON, status: response.status };
    }

    return responseJSON
  } catch (error) {
    throw new Error("Failed to create transaction");
  }
};

export const getTransactions = async (accountID: string) => {
  try {
    const response = await fetch(
      routes.getTransactions.replace(":accountID", accountID)
    );

    if (!response.ok) {
      throw new Error("Failed to get transactions");
    }

    const transactions = await response.json();

    return transactions
  } catch (error) {
    throw new Error("Failed to get transactions");
  }
};
