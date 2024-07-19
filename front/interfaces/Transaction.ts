export interface TransactionInterface {
  _id?: string;
  accountID: string;
  type: 'DEPOSIT' | 'WITHDRAWAL';
  amount: number;
  createdAt?: string;
}