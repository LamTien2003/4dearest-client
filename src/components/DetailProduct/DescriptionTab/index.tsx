import parse from "html-react-parser";
import Image from "next/image";

import AdditionalInfoTab from "@/components/DetailProduct/AdditionalInfoTab";

import { Product } from "@/types";
import styles from "./DescriptionTab.module.css";

const DescriptionTab = ({ product }: { product: Product }) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: parse(product?.description || "") }}
      />
      {product?.additionalInfo && (
        <AdditionalInfoTab data={product.additionalInfo} />
      )}
      <div className={styles["images"]}>
        {product?.imagesProduct.map((item, index) => (
          <Image
            className={styles["images__item"]}
            src={item}
            alt={`${product.title}-image-${index}`}
            key={index}
            width={650}
            height={650}
          />
        ))}
      </div>
    </>
  );
};

export default DescriptionTab;
