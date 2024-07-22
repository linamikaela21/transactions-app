"use client";

import { useParams } from "next/navigation";
import { useFormik } from "formik";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { createTransaction } from "../../../api/transactions";
import { setTransactions } from "../../../redux/features/transactionsSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { NumberInput } from "../common/NumberInput";
import { SelectInput } from "../common/SelectInput";
import { SubmitButton } from "../common/SubmitButton";
import { transactionSchema } from "../../../api/schemas/transactionSchema";
import { TransactionInterface } from "../../../interfaces/Transaction";

export const TransactionForm = (): JSX.Element => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const { errors, handleSubmit, isSubmitting, isValid, handleChange, values } =
    useFormik({
      initialValues: {
        amount: undefined,
        type: "",
      },
      validationSchema: transactionSchema,
      onSubmit: async (values: any) => {
        handleCreateTransaction(values);
      },
    });

  const handleCreateTransaction = async (
    values: Pick<TransactionInterface, "amount" | "type">
  ) => {
    setError(null);
    try {
      const newTransaction = await createTransaction({
        ...values,
        accountID: id as string,
      });

      if (newTransaction.status === 200) {
        return setError(newTransaction.data.message);
      }
      
     dispatch(setTransactions(newTransaction.transactions));
     queryClient.resetQueries({ queryKey: ["transactions"] });
     queryClient.resetQueries({ queryKey: ["balance"] });

    } catch (error) {
      throw new Error("Error creating account");
    }
  };

  const options = [
    {
      key: "DEPOSIT",
      label: "DEPOSIT",
      Icon: faArrowUp,
    },
    {
      key: "WITHDRAWAL",
      label: "WITHDRAWAL",
      Icon: faArrowDown,
    },
  ];

  return (
    <>
      <form className="flex flex-col gap-4 p-4 w-full justify-center shadow-md shadow-lime-500">
        <NumberInput
          errorMessage={errors.amount as string}
          handleChange={handleChange}
          label="Amount"
          name="amount"
          value={values.amount}
        />
        <SelectInput
          handleChange={handleChange}
          label="Type"
          name="type"
          options={options}
          value={values.type}
        />
        <SubmitButton
          disabled={!isValid || !values.amount}
          handleSubmit={handleSubmit}
          loading={isSubmitting}
        />
      </form>
      {error ? (
        <div className="text-danger-500 text-medium text-center  p-4">
          {error}
        </div>
      ) : null}
    </>
  );
};
