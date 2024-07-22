import * as yup from "yup";

export const accountSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  accountNumber: yup
    .string()
    .min(8, "Account number must be at least 8 characters")
    .max(20, "Account number must be at most 20 characters")
    .required("Account number is required"),
  balance: yup
    .number()
    .min(0, "Balance must be at least 0")
    .max(1000000, "Balance must be at most 1000000")
    .required("Balance is required")
    .default(0),
});
