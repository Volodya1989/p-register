import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isVerified } = useAuth();

  return isLoggedIn && isVerified ? <Navigate to={redirectTo} /> : Component;
};
