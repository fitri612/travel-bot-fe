import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface AuthMiddlewareProps {
  children: ReactNode;
}

const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
  const location = useLocation();
  const userData = localStorage.getItem("resUser");

  // Kalau belum login, redirect ke /login -> sementara ke 404
  if (!userData) {
    return <Navigate to="/404" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthMiddleware;
