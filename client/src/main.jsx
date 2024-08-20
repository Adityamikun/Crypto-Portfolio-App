import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
);
