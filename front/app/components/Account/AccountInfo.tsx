"use client";

import { useQuery } from "@tanstack/react-query";
import { redirect, RedirectType } from "next/navigation";
import { Skeleton } from "@nextui-org/react";

import { useAppSelector } from "../../../redux/hooks";
import { getAccountBalance } from "../../../api/accounts";
import { parseNumber } from "../../../utils/parseNumer";

export const AccountInfo = () => {
  const { account } = useAppSelector((state: any) => state.account);
  const accountID = account._id;

  if (!accountID) {
    redirect("/", RedirectType.push);
  }

  const { transactions } = useAppSelector((state: any) => state.transaction);

  const { data, isLoading } = useQuery({
    queryKey: ["balance", accountID, transactions?.length],
    queryFn: async () => await getAccountBalance(accountID),
    staleTime: 1000,
    retryDelay: 1000,
  });

  return (
    <div className="flex flex-col gap-4 p-4 w-full justify-center">
      <h1 className="text-center p-2 font-semibold lg:text-4xl text-2xl">
        {account.name} - {account.accountNumber}
      </h1>
      <Skeleton className="h-16 bg-lima-500" isLoaded={!isLoading}>
        <h2 className="text-center p-2 font-semibold lg:-5xl text-3xl">Balance: {isLoading ? '...Loading': parseNumber(data?.balance)}</h2>
      </Skeleton>
    </div>
  );
};
