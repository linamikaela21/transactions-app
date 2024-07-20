"use client";

import { useParams } from "next/navigation";
import { useFormik } from "formik";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
    try {
      const newTransaction = await createTransaction({
        ...values,
        accountID: id as string,
      });

      dispatch(setTransactions(newTransaction.transactions));
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
  );
};
