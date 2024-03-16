"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";

import { PaypalButtonsProps } from "./PaypalButtons.d";

const PaypalButtons = ({
  style,
  className,
  forceReRender,
  createOrder,
  onApprove,
  onClick,
}: PaypalButtonsProps) => {
  return (
    <PayPalButtons
      className={className}
      createOrder={createOrder}
      onApprove={onApprove}
      style={style}
      onClick={onClick}
      forceReRender={forceReRender}
    />
  );
};

export default PaypalButtons;
