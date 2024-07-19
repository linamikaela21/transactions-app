import { AccountForm } from "./components/Account/AccountForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:block">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 justify-center">
          <AccountForm />
        </div>
      </div>
    </main>
  );
}
