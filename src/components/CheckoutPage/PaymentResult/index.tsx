import { formatCurrency } from "@/utils/helper";

import styles from "./PaymentResult.module.css";
import classNames from "classnames";

interface PaymentResultProps {
  subTotal: number;
  shippingFee: number;
  priceDiscount: number;
  shippingDiscount: number;
  totalPayment: number;
}

const PaymentResult = ({
  subTotal,
  priceDiscount,
  shippingDiscount,
  shippingFee,
  totalPayment,
}: PaymentResultProps) => {
  return (
    <div className={styles["payment-box"]}>
      <div className={styles["payment-box__item"]}>
        <h5>Subtotal</h5>
        <span>{formatCurrency(subTotal)}</span>
      </div>
      <div className={styles["payment-box__item"]}>
        <h5>Shipping</h5>
        <span>{formatCurrency(shippingFee || 0)}</span>
      </div>
      <div className={styles["payment-box__item"]}>
        <h5>Price discount</h5>
        <span>{formatCurrency(priceDiscount)}</span>
      </div>
      <div className={styles["payment-box__item"]}>
        <h5>Shipping discount</h5>
        <span>{formatCurrency(shippingDiscount)}</span>
      </div>
      <div
        className={classNames(
          styles["payment-box__item"],
          styles["total-price"]
        )}
      >
        <h4>Total</h4>
        <span>{formatCurrency(totalPayment)}</span>
      </div>
    </div>
  );
};

export default PaymentResult;
