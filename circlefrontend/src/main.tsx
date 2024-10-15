import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { chakraTheme } from "./libs/chakra-theme.ts";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
