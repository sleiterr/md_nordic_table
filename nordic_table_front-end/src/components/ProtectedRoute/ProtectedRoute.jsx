import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
// JWT decoding library to decode the token and get user information
import { jwtDecode } from "jwt-decode";
// React Router components for navigation and redirection
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const [token] = useLocalStorage("token", null);

  if (!token) return <Navigate to="/login" replace />;

  let guest;
  try {
    // Decode the token to get user information, including their role
    guest = jwtDecode(token);
  } catch {
    return <Navigate to="/login" replace />;
  }

  // Check if the user's role is included in the allowedRoles array
  // use the && operator to first check if allowedRoles has any roles defined, and then check if the user's role is included in that array
  if (allowedRoles.length && !allowedRoles.includes(guest.role)) {
    // Redirect to unauthorized page if the user's role is not allowed
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;

//! allowedRoles.length && ["if true, check if the user's role is included in the allowedRoles array"] --- IGNORE ---

// !allowedRoles.includes(guest.role) && ["if the user's role is not included in the allowedRoles array, redirect to unauthorized page"] --- IGNORE ---
