import { lazy } from "react";

export const Login = lazy(() => import("../views/auth/login"));
export const SignUp = lazy(() => import("../views/auth/signUp"));
export const PasswordReset = lazy(() => import("../views/auth/passwordReset"));
export const AccountVerification = lazy(
  () => import("../views/auth/accountVerification")
);
export const PasswordResetConfirmation = lazy(
  () => import("../views/auth/confirmPassword")
);
export const Dashboard = lazy(() => import("../views/dashboard"));
export const FranchainGoals = lazy(() => import("../views/franchain/goals"));
export const FranchainInformation = lazy(
  () => import("../views/franchain/info")
);
