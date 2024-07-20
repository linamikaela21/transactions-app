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
    logout: () => {
      storage.removeItem("persist:root");
    },
  },
});

export const { setAccount, logout } = accountSlice.actions;

export default accountSlice.reducer;
