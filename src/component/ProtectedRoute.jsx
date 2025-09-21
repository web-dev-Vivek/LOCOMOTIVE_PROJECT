// src/components/ProtectedRoute.jsx
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) return <p>Loading...</p>;

  if (!userId) {
    return <Navigate to="/" replace />;
  }

  return children;
}
