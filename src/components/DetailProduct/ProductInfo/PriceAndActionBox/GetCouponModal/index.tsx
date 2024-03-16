import dayjs from "dayjs";

import Button from "@/components/Button";
import useCouponQuery from "@/hooks/useCouponQuery";
import useToast from "@/hooks/useToast";
import { formatCurrency } from "@/utils/helper";

import { ButtonVariant } from "@/components/Button/Button.d";
import { Coupon } from "@/types";
import styles from "./GetCouponModal.module.css";

const GetCouponModal = () => {
  const { coupons } = useCouponQuery();
  const { displaySuccessToast, displayErrorToast } = useToast();

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      displaySuccessToast("Coupon code copied to clipboard");
    } catch (err) {
      displayErrorToast("Failed to copy");
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        {coupons?.map((coupon: Coupon) => (
          <div className={styles["coupon"]} key={coupon._id}>
            <div className="d-flex flex-col">
              <h3 className={styles["coupon__title"]}>{coupon?.couponName}</h3>
              <p className={styles["coupon__sub-title"]}>
                {coupon?.couponCode}
              </p>
              <p className={styles["coupon__sub-title"]}>
                {coupon?.couponDescription}
              </p>
              <p className={styles["coupon__description"]}>
                Minimum Order{" "}
                {formatCurrency(coupon?.conditions.minTotalPricePayment)}
              </p>
              <p className={styles["coupon__description"]}>
                {dayjs(coupon?.startDate).format("DD-MMM").toString()} to{" "}
                {dayjs(coupon?.endDate).format("DD-MMM").toString()}
              </p>
              <p className={styles["coupon__description"]}>
                Available: {coupon?.quantity}
              </p>
            </div>
            <Button
              variant={ButtonVariant.Solid}
              onClick={() => handleCopy(coupon.couponCode)}
            >
              Copy
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetCouponModal;
