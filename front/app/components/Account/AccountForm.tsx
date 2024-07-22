"use client";

import { useFormik } from "formik";
import { useDisclosure } from "@nextui-org/react";
import { redirect, RedirectType } from "next/navigation";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setAccount } from "../../../redux/features/accountSlice";
import { createAccount } from "../../../api/accounts";
import { NumberInput } from "../common/NumberInput";
import { SubmitButton } from "../common/SubmitButton";
import { TextInput } from "../common/TextInput";
import { accountSchema } from "../../../api/schemas/accountSchema";
import { AccountInterface } from "../../../interfaces/Account";

import { ExistingAccountModal } from "./ExistingAccountModal";


export const AccountForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const { account } = useAppSelector((state) => state.account);

  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    touched,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues: {
      name: account.name,
      accountNumber: account.accountNumber,
      balance: account.balance,
    },
    validationSchema: accountSchema,
    onSubmit: async (values) => {
      handleCreateAccount(values);
    },
  });

  const handleCreateAccount = async (values: Omit<AccountInterface, "_id">) => {
    try {
      const newAccount = await createAccount(values);

      dispatch(setAccount(newAccount.data));
      if (newAccount.status === 200) {
        return onOpen();
      }

      return newAccount;
    } catch (error) {
      throw new Error("Failed to create account");
    }
  };

  if (account._id && !isOpen) {
    return redirect(`/account/${account._id}`, RedirectType.push);
  }

  return (
    <>
      <form className="flex flex-col lg:gap-4 gap-12 p-4 w-full justify-center shadow-md lg:shadow-lime-500 pb-8">
        <TextInput
          errorMessage={errors.name}
          handleChange={handleChange}
          label="Name"
          name="name"
          placeholder="John Doe"
          touched={touched.name}
          value={values.name}
        />
        <TextInput
          errorMessage={errors.accountNumber}
          handleChange={handleChange}
          label="Account Number"
          name="accountNumber"
          placeholder="ABCD1234ABCD1234"
          touched={touched.accountNumber}
          value={values.accountNumber}
        />
        <NumberInput
          errorMessage={errors.balance}
          handleChange={handleChange}
          label="Balance"
          name="balance"
          touched={touched.balance}
          value={values.balance}
        />
        <SubmitButton
          disabled={!isValid || !values.accountNumber || !values.name || !values.balance}
          handleSubmit={handleSubmit}
          loading={isSubmitting}
        />
      </form>
      <ExistingAccountModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
