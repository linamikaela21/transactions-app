"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

import { useAppSelector } from "../../../redux/hooks";

export const ExistingAccountModal = ({
  isOpen,
  onOpenChange,
}: {
  onOpenChange: () => void;
  isOpen: boolean;
}): JSX.Element => {
  const { account } = useAppSelector((state) => state.account);

  return (
    <Modal
      className="bg-lime-500 px-8 text-black"
      isOpen={isOpen}
      placement="center"
      radius="sm"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h3 className="text-3xl font-semibold">Account Already Exists</h3>
            </ModalHeader>
            <ModalBody>
              <span className="text-lg">
                An account with the same account number{" "}
                <b>{account.accountNumber}</b> already exists.
                <br /> Lets us redirect you to your account page.
              </span>
            </ModalBody>
            <ModalFooter>
              <Button
                className="text-lg"
                color="secondary"
                radius="sm"
                variant="bordered"
                onPress={onClose}
              >
                <Link href={`/account/${account._id}`}>Go to Account</Link>
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
