"use client";

import { createSlice } from "@reduxjs/toolkit";

import { TransactionInterface } from "../../interfaces/Transaction";

interface InitialStateInterface {
  transaction: TransactionInterface;
  transactions: TransactionInterface[];
}

const initialState: InitialStateInterface = {
  transaction: {
    accountID: "",
    type: "DEPOSIT",
    amount: 0,
  },
  transactions: [],
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.transaction = { ...state.transaction, ...action.payload };
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    }
  },
});

export const { setTransaction, setTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
