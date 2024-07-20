# Banking Application

Overview
This project consists of a frontend and an optional backend for a banking application. The frontend allows users to open a new bank account and perform transactions such as deposits and withdrawals. The backend provides endpoints for creating accounts, fetching account balances, and handling transactions.

## Frontend

### Technologies Required

- Next.js
- React
- TypeScript
- Redux
- React Query

## Features

1. Create a new bank account by providing details such as name, account number, and initial balance.

2. Perform deposits and withdrawals by entering the transaction amount and selecting the transaction type.
   Display the updated account balance after each transaction.

3. State management using Redux.

4. Clean, component-oriented code structure.

## Installation

1. Install the project with npm

```bash
  git clone https://github.com/linamikaela21/transactions-app
```

2. Install dependencies:

```bash
  cd front
  npm install
```

3. Run the development server:

```bash
  npm run dev
```

4. Open http://localhost:3000 with your browser to see the result.

## Backend

### Technologies Required

- Node
- TypeScript
- Docker
- MongoDB

## Endpoints

- Create a new account
  **URL**: POST /accounts

**Description**: Creates a new bank account.

**Body**: Creates a new bank account.

```bash
  {
  "name": "string",
  "accountNumber": "string",
  "balance": number
  }
```

**Response**:

```bash
{
  "_id": "669a2aba3727e18af99eae1a",
  "name": "John Doe",
  "accountNumber": "123456789123456",
  "balance": 900,
  "createdAt": "2024-07-19T08:58:34.628Z",
  "updatedAt": "2024-07-19T09:08:27.224Z",
}
```

- Get Account balance
  **URL**: GET /accounts/:id/balance

**Description**: Retrieves the balance of the bank account.

**Response**: Creates a new bank account.

```bash
  {
    "balance": "number"
  }
```

- Create a new transaction
  **URL**: POST /transactions

**Description**: Creates a new transaction (deposit or withdrawal).

**Body**: Creates a new transaction.

```bash
  {
  "accountID": "669a2aba3727e18af99eae1a",
  "type": "DEPOSIT" | WITHDRAWAL,
  "amount": 200
  }
```

**Response**:

```bash
{
  "balance": 1100,
  "transactions": [
    {
      "_id": "669b04a322b13c69f3cf91c6",
      "accountID": "669a2aba3727e18af99eae1a",
      "type": "DEPOSIT",
      "amount": 200,
      "createdAt": "2024-07-20T00:28:19.764Z",
      "updatedAt": "2024-07-20T00:28:19.764Z",
      "__v": 0
    },
    {
      "_id": "669b050fb6ecd9b95b277c23",
      "accountID": "669a2aba3727e18af99eae1a",
      "type": "WITHDRAWAL",
      "amount": 200,
      "createdAt": "2024-07-20T00:30:07.309Z",
      "updatedAt": "2024-07-20T00:30:07.309Z",
      "__v": 0
    }
  ]
}
```

- Get all transactions
  **URL**: GET /transactions/:id

**Description**: Retrieves all transactions associated with one id

**Response**: Creates a new bank account.

```bash
  [{
      "_id": "669b04a322b13c69f3cf91c6",
      "accountID": "669a2aba3727e18af99eae1a",
      "type": "DEPOSIT",
      "amount": 200,
      "createdAt": "2024-07-20T00:28:19.764Z",
      "updatedAt": "2024-07-20T00:28:19.764Z",
      "__v": 0
    },
    {
      "_id": "669b050fb6ecd9b95b277c23",
      "accountID": "669a2aba3727e18af99eae1a",
      "type": "WITHDRAWAL",
      "amount": 200,
      "createdAt": "2024-07-20T00:30:07.309Z",
      "updatedAt": "2024-07-20T00:30:07.309Z",
      "__v": 0
    }]
```

## Installation

1. Install the project with npm

```bash
  git clone https://github.com/linamikaela21/transactions-app
```

2. Install dependencies:

```bash
  cd back
  npm install
```

3. Create Mongo Database and .env file

To run this project, you will need to add the following environment variables to your .env file

`MONGO_USER`

`MONGO_USER`

`MONGO_DB`

4. Turn on Docker and run:

```bash
  docker-compose up -d --build
   npm run start
```

4. Open http://localhost:3002 with your browser to see the result.

# Thanks to read everything! Last think.. if you work in VSC you can download Thunder Client extension and go to '/front/server.http' to check all the endpoints working👋
