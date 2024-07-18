import { Router } from "express";
import { createTransaction } from "../controllers/transactions";
import {
  createAccountController,
  getBalanceController,
} from "../controllers/accounts";

const routes: Router = Router();

routes.post("/accounts", createAccountController);
routes.get("/accounts/:id/balance", getBalanceController);

routes.post("/transactions", createTransaction);

export default routes;
