import { Routes } from "@/routes/routes";

type AuthTitle = {
  [key: string]: string;
};

export const AuthTitle: AuthTitle = {
  signup: "Log in",
  login: "Create account",
  confirmPasswordReset: "Return to login",
  passwordReset: "Return to login",
  accountVerification: "Go back",
  info: "Skip to dashboard",
  goals: "Skip to dashboard",
};

export const AuthLinks: AuthTitle = {
  signup: Routes.login,
  login: Routes.signUp,
  confirmPasswordReset: Routes.login,
  passwordReset: Routes.login,
  accountVerification: Routes.accountVerification,
  info: Routes.dashboard,
  goals: Routes.dashboard,
};
