"use client";
import { PaymentInterface, allPayments } from "@/helper/constants";
import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface FormContextType {
  payments: PaymentInterface[];
  setPayments: Dispatch<React.SetStateAction<PaymentInterface[]>>;
}
const PaymentContext = createContext<FormContextType | undefined>(undefined);

export const PaymentProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [payments, setPayments] = useState(allPayments);

  useEffect(() => {
    const storedPayments = localStorage.getItem("allPayments");
    if (storedPayments) {
      setPayments(JSON.parse(storedPayments));
    }
  }, []);
  return (
    <PaymentContext.Provider
      value={{
        payments,
        setPayments,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContext;

export const usePaymentContext = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
