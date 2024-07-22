import { AccountForm } from "./components/Account/AccountForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between shadow-md ">
      <div className="w-full max-w-5xl justify-between text-2xl lg:block shadow-md lg:shadow-lime-500 h-full mt-12  items-center">
        <h1 className="text-4xl text-center lg:my-8 my-10 pb-10 lg:pb-0 shadow-lime-500 shadow-md lg:shadow-none font-semibold">
          Create an Account
        </h1>
        <AccountForm />
      </div>
    </main>
  );
}
