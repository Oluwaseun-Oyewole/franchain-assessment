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
};

export const AuthLinks: AuthTitle = {
  signup: Routes.login,
  login: Routes.signUp,
  confirmPasswordReset: Routes.login,
  passwordReset: Routes.login,
  accountVerification: Routes.accountVerification,
};
