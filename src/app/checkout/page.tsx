import Spinner from "@/components/Loading/Spinner";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const CheckoutPage = dynamic(() => import("@/components/CheckoutPage"), {
  loading: () => <Spinner />,
});

export const metadata: Metadata = {
  title: "Checkout – 4DEAREST™",
  description:
    "Gifts, candles, accessories, and decorations at affordable prices. 4dearest - For your dearest",
};

const Checkout = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <CheckoutPage />
    </div>
  );
};

export default Checkout;
