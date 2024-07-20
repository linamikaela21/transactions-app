import { model, Schema } from "mongoose";
import { AccountInterface } from "../interfaces";

const accountSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      menssage: "Name must have at least 3 characters",
    },
    accountNumber: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 20,
      menssage: "Account number must have between 8 and 20 characters",
    },
    balance: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true },
);

export default model<AccountInterface>("Account", accountSchema);
