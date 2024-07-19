"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import StoreProvider from "./StoreProvider";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>{children}</StoreProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}
