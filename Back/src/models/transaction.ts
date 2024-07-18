import { model, Schema } from "mongoose";
import { TransactionInterface } from "../interfaces";

const transactionSchema: Schema = new Schema(
  {
    accountID: {
      type: String,
      required: true,
      message: "Account ID is required",
    },
    type: {
      type: String,
      enum: ["DEPOSIT", "WITHDRAWAL"],
      message: "Type must be DEPOSIT or WITHDRAWAL",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      message: "Amount is required",
    },
  },
  { timestamps: true },
);

export default model<TransactionInterface>("Transaction", transactionSchema);
