"use client";

import { useQuery } from "@tanstack/react-query";

import { TransactionInterface } from "../../../interfaces/Transaction";
import { useAppSelector } from "../../../redux/hooks";
import { getTransactions } from "../../../api/transactions";

import { TransactionCard } from "./TransactionCard";

export const TransactionsList = () => {
  const account = useAppSelector((state) => state.account.account);

  const { data, isLoading } = useQuery({
    queryKey: ["transactions", account?._id],
    queryFn: async () => await getTransactions(account?._id),
    staleTime: 1000,
    retryDelay: 1000,
  });

  if (isLoading) {
    return Array.from({ length: 5 }, (_, index) => (
      <div
        key={index}
        className="flex flex-col gap-4 p-4 w-full justify-center rounded-lg shadow-md shadow-lime-500"
      >
        <div className="animate-pulse flex flex-col gap-4">
          <div className="bg-gray-200 h-8 w-1/2" />
          <div className="bg-gray-200 h-8 w-1/2" />
          <div className="bg-gray-200 h-8 w-1/2" />
        </div>
      </div>
    ));
  }

  return (
    <div className="flex flex-col gap-4 p-4  w-full justify-center rounded-lg shadow-md shadow-lime-500">
      <h2 className="text-center p-4 font-semibold lg:text-3xl text:2xl">
        Transactions
      </h2>
      <div className="scrollbar-thin scrollbar-thumb-lime-500 scrollbar-track-lime-200 overflow-y-scroll h-80 gap-4">
        {data?.map((transaction: TransactionInterface) => (
          <TransactionCard key={transaction._id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
