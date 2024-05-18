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

export interface PaymentInterface {
  id: number;
  label: string;
  checked: boolean;
}

export const allPayments: PaymentInterface[] = [
  { id: 1, label: "Reduce failed payment", checked: false },
  { id: 2, label: "Reduce failed payment", checked: false },
  { id: 3, label: "Reduce failed payment", checked: false },
  { id: 4, label: "Reduce failed payment", checked: false },
  { id: 5, label: "Reduce failed payment", checked: false },
  { id: 6, label: "Reduce failed payment", checked: false },
  { id: 7, label: "Reduce failed payment", checked: false },
  { id: 8, label: "Reduce failed payment", checked: false },
];
