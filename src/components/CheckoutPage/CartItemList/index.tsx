import Image from "next/image";

import { formatCurrency } from "@/utils/helper";

import { CartItem } from "@/types";
import styles from "./CartItemList.module.css";

const CartItemList = ({ cart }: { cart: CartItem[] }) => {
  return (
    <>
      {cart.map(item => {
        return item.variants.map((variant, index) => (
          <div
            key={`${item._id}-${variant.sku}-${index}`}
            className={styles["cart-item"]}
          >
            <div className={styles["cart-item__image"]}>
              <Image
                src={item?.imagesProduct[variant?.indexImageDisplay]}
                alt=""
                width={64}
                height={64}
              />
              <span className={styles["cart-item__amount"]}>
                {variant?.buyAmount}
              </span>
            </div>

            <div className={styles["cart-item-info"]}>
              <div>
                <h2 className={styles["cart-item-info__title"]}>
                  {item?.title}
                </h2>
                <h3 className={styles["cart-item-info__color"]}>
                  {variant?.color.toUpperCase()}
                </h3>
              </div>
              <h5 className={styles["cart-item-info__price"]}>
                {formatCurrency(
                  variant?.discountPrice * variant?.buyAmount || 0
                )}
              </h5>
            </div>
          </div>
        ));
      })}
    </>
  );
};

export default CartItemList;
