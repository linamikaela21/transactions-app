"use client";

import { redirect, RedirectType } from "next/navigation";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setAccount } from "../../../redux/features/accountSlice";
import { createAccount } from "../../../api/accounts";
import { NumberInput } from "../common/NumberInput";
import { SubmitButton } from "../common/SubmitButton";
import { TextInput } from "../common/TextInput";

export const AccountForm = (): JSX.Element => {
  const { account } = useAppSelector((state) => state.account);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const newAccount = await createAccount(account);

      dispatch(setAccount(newAccount));
    } catch (error) {
      throw new Error("Error creating account");
    } finally {
      setLoading(false);
    }
  };

  if (account._id) {
    redirect(`/account/${account._id}`, RedirectType.push);
  }

  return (
    <div className="flex flex-col gap-4 p-4 w-full justify-center shadow-md shadow-lime-500">
      <TextInput
        isInvalid={false}
        label="Name"
        setValue={(value: string) => dispatch(setAccount({ name: value }))}
        value={account.name}
      />
      <TextInput
        isInvalid={false}
        label="Account Number"
        setValue={(value: string) =>
          dispatch(setAccount({ accountNumber: value }))
        }
        value={account.accountNumber}
      />
      <NumberInput
        isInvalid={false}
        label="Initial Balance"
        setValue={(value: string) =>
          dispatch(setAccount({ balance: Number(value) }))
        }
        value={String(account.balance)}
      />
      <SubmitButton
        disabled={!account.name || !account.accountNumber || !account.balance}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};
