// src/ProtectedRoute.js
import { Navigate } from "react-router-dom";
//import { useAuth } from "./authContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
