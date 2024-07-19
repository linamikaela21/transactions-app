import { Card, CardHeader } from "@nextui-org/react";

import { TransactionInterface } from "../../../interfaces/Transaction";
import { parseNumber } from "../../../utils/parseNumer";

export const TransactionCard = ({
  transaction,
}: {
  transaction: TransactionInterface;
}) => {
  return (
    <Card className="m-2 bg-transparent shadow-md shadow-lime-500 text-white">
      <CardHeader className="flex row-span-3 w-full justify-between">
        <span className="text-lg">{transaction.type}</span>
        <span className="lg:text-3xl text-2xl">{parseNumber(transaction.amount)}</span>
        <span className="lg:text-lg text-medium">
          {new Date(transaction?.createdAt ?? "").toLocaleDateString()}
        </span>
      </CardHeader>
    </Card>
  );
};
