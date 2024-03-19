import parse from "html-react-parser";
import Image from "next/image";

import AdditionalInfoTab from "@/components/DetailProduct/AdditionalInfoTab";

import { Product } from "@/types";
import styles from "./DescriptionTab.module.css";

const DescriptionTab = ({ product }: { product: Product }) => {
  console.log(
    parse(
      "<p><strong>Embark on a magical journey of romance with the Eternal Flower Rose Artificial Flower. This product isn't just an ordinary artificial bouquet; it's an enchanting masterpiece designed to create a perfect romantic ambiance for every special occasion.</strong></p>"
    )
  );
  return (
    <>
      <div className={styles["wrapper"]}>{parse(product?.description)}</div>
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
