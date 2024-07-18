export interface AccountInterface {
  name: string;
  accountNumber: string;
  balance: number;
}

export type TransactionType = "DEPOSIT" | "WITHDRAWAL";

export interface TransactionInterface {
  accountID: string;
  type: TransactionType;
  amount: number;
}
