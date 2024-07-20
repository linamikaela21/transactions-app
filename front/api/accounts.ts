"use client";

import { routes } from "../app/constants/routes"
import { notFound } from "next/navigation";

import { AccountInterface } from "../interfaces/Account";

export const createAccount = async (data: Omit<AccountInterface, "_id">) => {
  try {
    const response = await fetch(routes.createAccount, {
      method: "POST",
      cache: "no-store",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      notFound();
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to create account");
  }
};

export const getAccountBalance = async (id: string) => {
  try {
    const response = await fetch(routes.getAccountBalance.replace(":id", id));

    if (!response.ok) {
      throw new Error("Failed to get account balance");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to get account balance");
  }
};
