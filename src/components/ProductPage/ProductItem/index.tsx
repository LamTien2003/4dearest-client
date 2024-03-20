import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import ProductItemActions from "@/components/ProductPage/ProductItem/ProductItemActions";
import { formatCurrency } from "@/utils/helper";

import { ButtonColorType, ButtonVariant } from "@/components/Button/Button.d";
import { Product } from "@/types";
import styles from "./ProductItem.module.css";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div>
      <Link href={`/product/${product.slug}`} className={styles["product"]}>
        <div className={styles["product-image"]}>
          {product?.variants[0].initialPrice >
            product?.variants[0].discountPrice && (
            <span className={styles["sale-tag"]}>Sale</span>
          )}
          <Image
            className={styles["primary-image"]}
            src={product?.imagesProduct[0]}
            alt={`${product?.title}-image-1`}
            width={300}
            height={200}
            style={{
              height: "31.4rem",
              objectFit: "cover",
            }}
          />
          <Image
            className={styles["hover-image"]}
            src={product?.imagesProduct[1]}
            alt={`${product?.title}-image-2`}
            width={300}
            height={200}
            style={{
              height: "31.4rem",
              objectFit: "cover",
            }}
          />
          <ProductItemActions className={styles["actions"]} product={product} />
        </div>
        <div className={styles["product-info"]}>
          <h3 className={styles["product-info__title"]}>{product?.title}</h3>
          <h5 className={styles["product-info__sub-title"]}>
            {product?.subTitle}
          </h5>
          <p className={styles["product-info__price"]}>
            <span className={styles["discount"]}>
              {formatCurrency(product?.variants[0].initialPrice)}
            </span>
            {formatCurrency(product?.variants[0].discountPrice)}
          </p>
          <Button
            variant={ButtonVariant.Solid}
            colorType={ButtonColorType.Primary}
          >
            Buy now
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
