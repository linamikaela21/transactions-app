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
      <CardHeader className="flex row-span-3 w-full justify-between px-6">
        <span className="lg:text-lg text-medium w-1/3">{transaction.type}</span>
        <span className="lg:text-3xl text-2xl w-1/3 text-center">
          {parseNumber(transaction.amount)}
        </span>
        <span className="lg:text-xl text-medium  w-1/3 text-end">
          {new Date(transaction?.createdAt ?? "").toLocaleDateString()}
        </span>
      </CardHeader>
    </Card>
  );
};
