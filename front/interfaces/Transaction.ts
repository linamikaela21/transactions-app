export const TransactionType = ['DEPOSIT', 'WITHDRAWAL'] as const;

export interface TransactionInterface {
  _id?: string;
  accountID: string;
  type: typeof TransactionType;
  amount: number;
  createdAt?: string;
}