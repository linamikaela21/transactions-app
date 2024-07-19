import { AccountInfo } from "../../components/Account/AccountInfo";
import { TransactionForm } from "../../components/Transactions/TransactionForm";
import { TransactionsList } from "../../components/Transactions/TransactionsList";

export default function AccountPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between shadow-md shadow-lime-500">
      <div className="w-full max-w-5xl items-center justify-between text-2xl lg:block shadow-md shadow-lime-500 h-full mt-12 border-t-lime-500">
        <AccountInfo />
        <TransactionForm />
        <TransactionsList />
      </div>
    </main>
  );
}
