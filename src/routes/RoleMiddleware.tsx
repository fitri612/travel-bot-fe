// src/routes/RoleMiddleware.tsx
import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom"; // <-- Tambahkan ini

interface RoleMiddlewareProps {
  children: ReactNode;
  allowedRoles: string[];
}

interface UserData {
  role?: string;
}

const RoleMiddleware: React.FC<RoleMiddlewareProps> = ({ children, allowedRoles }) => {
  const storedUser = localStorage.getItem("resUser");
  let userData: UserData | null = null;

  try {
    userData = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing resUser from localStorage:", error);
  }

  const userRole = userData?.role;

  // Un-comment logika proteksi role
  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/no-access" replace />;
  }

  return <>{children}</>;
};

export default RoleMiddleware;