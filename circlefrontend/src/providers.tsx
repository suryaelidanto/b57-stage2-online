import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { chakraTheme } from "./libs/chakra-theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
