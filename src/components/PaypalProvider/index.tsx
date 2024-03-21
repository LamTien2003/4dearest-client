"use client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PropsWithChildren } from "react";

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "sb",
  currency: "USD",
  intent: "capture",
};

const PaypalProvider = ({ children }: PropsWithChildren) => {
  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
};

export default PaypalProvider;
