import { Product } from "@/types";
import styles from "./ProductInfo.module.css";
import PriceAndActionBox from "./PriceAndActionBox";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["name"]}>
        <h2 className={styles["name__title"]}>{product?.title}</h2>
        <h4 className={styles["name__sub-title"]}>{product?.subTitle}</h4>
      </div>

      <PriceAndActionBox product={product} />
    </div>
  );
};

export default ProductInfo;
