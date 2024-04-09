import Link from "next/link";

import circleCheckPrimaryColor from "/public/images/icons/circle-check-primary-color.svg";
import starPrimaryColor from "/public/images/icons/star.svg";
import truckFastPrimaryColor from "/public/images/icons/truck-fast.svg";

import { Product, ProductVariant } from "@/types";
import styles from "./AdditionalInfoBox.module.css";
import Image from "next/image";

interface AdditionalInfoBoxProps {
  product: Product;
  variant: ProductVariant;
}
const AdditionalInfoBox = ({ product, variant }: AdditionalInfoBoxProps) => {
  return (
    <div className={styles["additional-info"]}>
      <div className={styles["services"]}>
        <div className={styles["services__item"]}>
          <Image src={circleCheckPrimaryColor} alt="" width={50} height={100} />
          <p>100% Satisfaction Guaranteed</p>
        </div>
        <div className={styles["services__item"]}>
          <Image src={starPrimaryColor} alt="" width={50} height={100} />
          <p>USA Customer Service</p>
        </div>
        <div className={styles["services__item"]}>
          <Image src={truckFastPrimaryColor} alt="" width={50} height={100} />
          <p>Fast Delivery (5-7 day)</p>
        </div>
      </div>
      <p className={styles["additional-info__item"]}>
        <label>Availability:</label>
        {variant.inventory > 0 ? (
          <span className="color--successful">In Stock</span>
        ) : (
          <span className="color--error"> Sold out</span>
        )}
      </p>
      <p className={styles["additional-info__item"]}>
        <label>SKU:</label>
        <span>{variant.sku}</span>
      </p>
      <p className={styles["additional-info__item"]}>
        <label>Vendor:</label>
        <span>4Dearest</span>
      </p>
      <p className={styles["additional-info__item"]}>
        <label>Tags:</label>
        {product?.tags.map(tag => (
          <Link href={`/product?q=${tag.replace("#", "")}`} key={tag}>
            {tag}
          </Link>
        ))}
      </p>
    </div>
  );
};

export default AdditionalInfoBox;
