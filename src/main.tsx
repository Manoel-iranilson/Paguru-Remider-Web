import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ReminderProvider from "./contexts/reminder";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ReminderProvider>
        <App />
      </ReminderProvider>
    </ChakraProvider>
  </React.StrictMode>
);
