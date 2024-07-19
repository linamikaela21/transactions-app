"use client";

import { createSlice } from "@reduxjs/toolkit";

import { AccountInterface } from "../../interfaces/Account";
import storage from "../storage";

interface InitialStateInterface {
  account: AccountInterface;
}

const initialState: InitialStateInterface = {
  account: {
    name: "",
    accountNumber: "",
    balance: 0,
    _id: "",
  },
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.account = { ...state.account, ...action.payload };
    },
    closeAccount: (state) => {
      state.account = initialState.account;
      storage.removeItem("persist:root");
    },
  },
});

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
