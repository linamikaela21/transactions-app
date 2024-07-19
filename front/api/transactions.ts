"use client";

import { routes } from "../app/constants/routes";
import { TransactionInterface } from "../interfaces/Transaction";

export const createTransaction = async (data: Omit<TransactionInterface, '_id'>) => {
  try {
    const response = await fetch(routes.createTransaction, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create transaction");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to create transaction");
  }
};

export const getTransactions = async (accountID: string) => {
  try {
    const response = await fetch(routes.getTransactions.replace(":accountID", accountID));

    if (!response.ok) {
      throw new Error("Failed to get transactions");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to get transactions");
  }
};