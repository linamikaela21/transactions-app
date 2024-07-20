import * as yup from "yup";

import { TransactionType } from "../../interfaces/Transaction";

export const transactionSchema = yup.object().shape({
  amount: yup.number().min(1, 'Amount must be at least 1').max(1000000, 'Amount must be at most $ 1.000.000').required('Amount is required'),
  type: yup.string().oneOf(TransactionType).required('Type Account is required'),
});
