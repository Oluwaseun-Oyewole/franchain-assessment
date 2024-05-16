import React, { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Routes } from "./routes";

const Login = lazy(() => import("../views/auth/login"));
const SignUp = lazy(() => import("../views/auth/signUp"));
const PasswordReset = lazy(() => import("../views/auth/passwordReset"));

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

    { path: "/auth", element: <Navigate to={Routes.login} replace /> },
  ] as RouteObject[];
};
