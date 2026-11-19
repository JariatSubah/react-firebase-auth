import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Wrap any page with <ProtectedRoute> to make it login-only.
export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Not logged in -> send to the login page
    return <Navigate to="/login" replace />;
  }

  return children;
}
