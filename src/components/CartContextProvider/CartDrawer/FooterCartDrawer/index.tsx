import { useRouter } from "next/navigation";
import { useContext } from "react";

import Button from "@/components/Button";
import { CartThemeContext } from "@/components/CartContextProvider";
import { formatCurrency } from "@/utils/helper";

import {
  ButtonColorType,
  ButtonSize,
  ButtonVariant,
} from "@/components/Button/Button.d";
import styles from "./FooterCartDrawer.module.css";

const FooterCartDrawer = ({ totalPayment }: { totalPayment: number }) => {
  const { closeCartModal } = useContext(CartThemeContext);
  const router = useRouter();

  const onCheckout = () => {
    closeCartModal();
    router.push("/checkout");
  };
  return (
    <div className={styles["wrapper"]}>
      <p className={styles["title"]}>
        Taxes and shipping calculated at checkout
      </p>
      <Button
        variant={ButtonVariant.Solid}
        colorType={ButtonColorType.Black}
        className={styles["btn-checkout"]}
        size={ButtonSize.ExtraLarge}
        onClick={onCheckout}
      >
        Checkout
        <span>&#x2022;</span>
        <span className={styles["btn-checkout__price"]}>
          {formatCurrency(totalPayment)} USD
        </span>
      </Button>
    </div>
  );
};

export default FooterCartDrawer;
