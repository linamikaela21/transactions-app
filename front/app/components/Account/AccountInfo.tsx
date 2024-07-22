"use client";

import { useQuery } from "@tanstack/react-query";
import { redirect, RedirectType } from "next/navigation";
import { Skeleton } from "@nextui-org/react";

import { useAppSelector } from "../../../redux/hooks";
import { getAccountBalance } from "../../../api/accounts";
import { parseNumber } from "../../../utils/parseNumer";
import { NavBar } from "../common/NavBar";

export const AccountInfo = (): JSX.Element => {
  const { account } = useAppSelector((state) => state.account);
  const accountID = account._id;

  if (!accountID) {
    redirect("/", RedirectType.push);
  }

  const { data, isLoading } = useQuery({
    queryKey: ["balance"],
    queryFn: async () => await getAccountBalance(accountID),
  });

  return (
    <div className="flex flex-col gap-4 p-4 w-full justify-center">
      <NavBar accountNumber={account.accountNumber} userName={account.name} />
      <Skeleton className="h-16 bg-lima-500" isLoaded={!isLoading}>
        <h2 className="text-center p-2 font-semibold lg:-5xl text-3xl">
          Balance: {isLoading ? "...Loading" : parseNumber(data?.balance)}
        </h2>
      </Skeleton>
    </div>
  );
};
