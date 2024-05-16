import { Navigate, RouteObject } from "react-router-dom";
import {
  AccountVerification,
  Login,
  PasswordReset,
  PasswordResetConfirmation,
  SignUp,
} from "./lazy";
import { Routes } from "./routes";

export const authenticationRoutes = () => {
  return [
    {
      path: Routes.login,
      element: <Login />,
    },
    {
      path: Routes.signUp,
      element: <SignUp />,
    },

    {
      path: Routes.passwordReset,
      element: <PasswordReset />,
    },

    {
      path: Routes.accountVerification,
      element: <AccountVerification />,
    },

    {
      path: Routes.confirmPassword,
      element: <PasswordResetConfirmation />,
    },
    { path: Routes.auth, element: <Navigate to={Routes.login} replace /> },
  ] as RouteObject[];
};
