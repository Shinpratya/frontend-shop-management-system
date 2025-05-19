import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../stores";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { token } = useSelector(authSelector);

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
