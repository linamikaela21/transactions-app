"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

import { createTransaction } from "../../../api/transactions";
import {
  setTransaction,
  setTransactions,
} from "../../../redux/features/transactionsSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { NumberInput } from "../common/NumberInput";
import { SelectInput } from "../common/SelectInput";
import { SubmitButton } from "../common/SubmitButton";

export const TransactionForm = (): JSX.Element => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { transaction } = useAppSelector((state) => state.transaction);
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const newTransaction = await createTransaction({
        ...transaction,
        accountID: id as string,
      });

      dispatch(setTransactions(newTransaction.transactions));
    } catch (error) {
      throw new Error("Error creating account");
    } finally {
      setLoading(false);
    }
  };

  const options = [
    {
      key: "DEPOSIT",
      label: "DEPOSIT",
      Icon: () => (
        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      ),
    },
    {
      key: "WITHDRAW",
      label: "WITHDRAW",
      Icon: () => (
        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 w-full justify-center shadow-md shadow-lime-500">
      <NumberInput
        isInvalid={false}
        label="Amount"
        setValue={(value: string) =>
          dispatch(setTransaction({ amount: Number(value) }))
        }
        value={String(transaction.amount)}
      />
      <SelectInput
        label="Type"
        options={options}
        placeholder="Select a type"
        setValue={(value: string) => dispatch(setTransaction({ type: value }))}
        value={{ key: transaction.type, label: transaction.type }}
      />
      <SubmitButton
        disabled={!transaction.amount || !transaction.type}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};
