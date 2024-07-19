const serverURL = "http://localhost:3002";

export const routes = {
  createAccount: `${serverURL}/accounts`,
  getAccountBalance: `${serverURL}/accounts/:id/balance`,

  createTransaction: `${serverURL}/transactions`,
  getTransactions: `${serverURL}/transactions/:accountID`,
};
