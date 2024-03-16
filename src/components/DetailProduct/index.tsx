import ImagesDisplay from "@/components/DetailProduct/ImagesDisplay";
import ProductInfo from "@/components/DetailProduct/ProductInfo";
import DetailProductContext from "@/components/DetailProduct/DetailProductContext";

import { Product } from "@/types";
import styles from "./DetailProduct.module.css";

const DetailProduct = ({ product }: { product: Product }) => {
  return (
    <DetailProductContext product={product}>
      <div className={styles["section-product"]}>
        <div className={styles["section-product__left"]}>
          <ImagesDisplay images={product?.imagesProduct || []} />
        </div>
        <div className={styles["section-product__right"]}>
          <ProductInfo product={product} />
        </div>
      </div>
    </DetailProductContext>
  );
};

export default DetailProduct;
