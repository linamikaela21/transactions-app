"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { TransactionInterface } from "../../../interfaces/Transaction";
import { useAppSelector } from "../../../redux/hooks";
import { getTransactions } from "../../../api/transactions";
import { setTransactions } from "../../../redux/features/transactionsSlice";

import { TransactionCard } from "./TransactionCard";

export const TransactionsList = () => {
  const dispatch = useDispatch();
  const account = useAppSelector((state) => state.account.account);

  const { data, isLoading } = useQuery({
    queryKey: ["transactions", account?._id],
    queryFn: async () => {
      const transactions = await getTransactions(account?._id);

      dispatch(setTransactions(transactions));

      return transactions;
    },
    enabled: !!account?._id,
  });

  return (
    <div className="flex flex-col gap-4 p-4  w-full justify-center rounded-lg shadow-md shadow-lime-500">
      <div className="scrollbar-thin scrollbar-thumb-lime-500 scrollbar-track-lime-200 overflow-y-scroll h-80 gap-4">
        {isLoading ? (
          <TransactionCardSkeleton />
        ) : !data?.length ? (
          <div className="w-full flex justify-center">
            <Image
              alt="No transactions found"
              height={300}
              loading="lazy"
              src="/noMoney.png"
              width={300}
            />
          </div>
        ) : (
          <>
            <h2 className="text-center p-4 font-semibold lg:text-3xl text:2xl">
              Transactions
            </h2>
            {data?.map((transaction: TransactionInterface) => (
              <TransactionCard
                key={transaction._id}
                transaction={transaction}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const TransactionCardSkeleton = () =>
  Array.from({ length: 5 }, (_, index) => (
    <div
      key={index}
      className="flex flex-col gap-4 p-4 w-full justify-center rounded-lg shadow-md shadow-lime-500"
    >
      <div className="animate-pulse flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="bg-lime-500 h-8 w-1/4" />
          <div className="bg-lime-500 h-8 w-1/4" />
          <div className="bg-lime-500 h-8 w-1/4" />
        </div>
      </div>
    </div>
  ));
