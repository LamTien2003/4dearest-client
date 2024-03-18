import { Product, ProductVariant } from "@/types";
import styles from "./AdditionalInfoBox.module.css";
import Link from "next/link";

interface AdditionalInfoBoxProps {
  product: Product;
  variant: ProductVariant;
}
const AdditionalInfoBox = ({ product, variant }: AdditionalInfoBoxProps) => {
  return (
    <div className={styles["additional-info"]}>
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
