import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";

import styles from "./CategorySection.module.css";

const categoryList = [
  {
    title: "BLOOM FLOWER CANDLES",
    href: "#",
    image:
      "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604942/products/u2pfjjdthg0vgmsqjoae.jpg",
  },
  {
    title: "BLOOM FLOWER CANDLES 2",
    href: "#",
    image:
      "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604942/products/u2pfjjdthg0vgmsqjoae.jpg",
  },
  {
    title: "BLOOM FLOWER CANDLES 3",
    href: "#",
    image:
      "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604942/products/u2pfjjdthg0vgmsqjoae.jpg",
  },
];

const CategorySection = () => {
  return (
    <div className={styles["wrapper"]}>
      {categoryList.map(item => {
        return (
          <div className={styles["category"]} key={item.title}>
            <Link href={item.href} className={styles["category-item"]}>
              <Image
                className={styles["category-item__background"]}
                src={item.image}
                width={500}
                height={200}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.7)",
                }}
                alt=""
              />
              <div className={styles["category-item-popup"]}>
                <h3 className={styles["category-item-popup__title"]}>
                  {item.title}
                </h3>
                <Button>View Products</Button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
