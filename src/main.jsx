// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your publishable key
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkKey) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY in .env");
}

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkKey} navigate={(to) => navigate(to)}>
      <App />
    </ClerkProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
