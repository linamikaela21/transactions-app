"use client";

import { createSlice } from "@reduxjs/toolkit";

import { TransactionInterface } from "../../interfaces/Transaction";

interface InitialStateInterface {
  transactions: TransactionInterface[];
}

const initialState: InitialStateInterface = {
  transactions: [],
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = { ...state.transactions, ...action.payload };
    }
  },
});

export const { setTransactions } = transactionsSlice.actions;

export default transactionsSlice.reducer;
