import { Metadata } from "next";

import CheckoutPage from "@/components/CheckoutPage";

export const metadata: Metadata = {
  title: "Checkout – 4DEAREST™",
  description:
    "Gifts, candles, accessories, and decorations at affordable prices. 4dearest - For your dearest",
};

const Checkout = () => {
  return <CheckoutPage />;
};

export default Checkout;
