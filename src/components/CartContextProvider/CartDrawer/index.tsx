import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

import FooterCartDrawer from "@/components/CartContextProvider/CartDrawer/FooterCartDrawer";
import Drawer from "@/components/Drawer";
import NumberInput from "@/components/Input/NumberInput";
import Spinner from "@/components/Loading/Spinner";
import { formatCurrency } from "@/utils/helper";

import { DrawerPlacement, DrawerSize } from "@/components/Drawer/Drawer.d";
import { CartItem, CartStorage, ProductVariant } from "@/types";
import styles from "./CartDrawer.module.css";

interface CartDrawerProps {
  cart: CartItem[];
  isOpenCartModal: boolean;
  onClose: () => void;
  isLoading: boolean;
}

const CartDrawer = ({
  cart,
  isOpenCartModal,
  isLoading,
  onClose,
}: CartDrawerProps) => {
  const onChangeAmount = (
    value: number,
    {
      productId,
      variant,
    }: {
      productId: string;
      variant: ProductVariant & {
        buyAmount: number;
      };
    }
  ) => {
    const cartStorage = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartStorage[];

    const product = cartStorage.find(item => item?._id === productId);
    const newVariants = product?.variants.map(item => {
      if (item?.sku === variant?.sku) {
        item.amount = value;
      }
      return item;
    });

    Object.assign(newVariants || [], product?.variants);
    localStorage.setItem("cart", JSON.stringify(cartStorage));
    window.dispatchEvent(new Event("addToCart"));
  };

  const onRemove = (
    productId: string,
    variant: ProductVariant & {
      buyAmount: number;
    }
  ) => {
    const cartStorage = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartStorage[];

    const product = cartStorage.find(item => item?._id === productId);
    if (!product) {
      return;
    }
    const newVariants = product?.variants.filter(
      item => item?.sku !== variant?.sku
    );
    product.variants = newVariants;

    if (product.variants.length <= 0) {
      const newCart = cartStorage.filter(item => item._id !== productId);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      localStorage.setItem("cart", JSON.stringify(cartStorage));
    }

    return window.dispatchEvent(new Event("addToCart"));
  };

  const totalPayment = useMemo(() => {
    return cart.reduce((total, current) => {
      const totalPriceItem = current.variants.reduce(
        (totalOfVariant, currentVariant) =>
          Number(totalOfVariant) +
          Number(currentVariant.discountPrice * currentVariant.buyAmount),
        0
      );
      return total + totalPriceItem;
    }, 0);
  }, [cart]);

  return (
    <Drawer
      isOpen={isOpenCartModal}
      size={DrawerSize.Large}
      placement={DrawerPlacement.Right}
      onClose={onClose}
      title={<span style={{ fontSize: 24 }}>Cart</span>}
      footer={!!cart.length && <FooterCartDrawer totalPayment={totalPayment} />}
    >
      {isLoading && <Spinner />}
      <section className={styles["wrapper"]}>
        {!cart?.length && !isLoading && (
          <div className={styles["empty-box"]}>Your cart is empty</div>
        )}
        {!!cart?.length &&
          cart.map(item => {
            return item.variants.map(variant => {
              if (variant.inventory <= 0) {
                return;
              }

              return (
                <div className={styles["cart-item"]} key={variant?.sku}>
                  <Link href={`/product/${item.slug}`}>
                    <Image
                      src={item?.imagesProduct[variant.indexImageDisplay]}
                      alt={`product-${item?.title}`}
                      width={120}
                      height={160}
                      onClick={onClose}
                    />
                  </Link>
                  <div className={styles["right"]}>
                    <Link
                      href={`/product/${item.slug}`}
                      className={styles["right__title"]}
                      onClick={onClose}
                    >
                      {item?.title}
                    </Link>
                    <h4 className={styles["right__price"]}>
                      {formatCurrency(variant.discountPrice)}
                    </h4>
                    <p className={styles["right__color"]}>
                      {variant?.color.toUpperCase()}
                    </p>
                    <div className={styles["right-action"]}>
                      <NumberInput
                        value={variant?.buyAmount}
                        onChange={value =>
                          onChangeAmount(value, {
                            productId: item?._id,
                            variant,
                          })
                        }
                        min={1}
                        max={variant.inventory}
                      />
                      <span
                        className={styles["right-action__remove"]}
                        onClick={() => onRemove(item._id, variant)}
                      >
                        Remove
                      </span>
                    </div>
                  </div>
                </div>
              );
            });
          })}
      </section>
    </Drawer>
  );
};

export default CartDrawer;
