import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";

import { ButtonVariant } from "@/components/Button/Button.d";
import { Category } from "@/types";
import styles from "./CategorySection.module.css";

async function getCategories() {
  const request = await fetch(
    `${process.env.API_REQUEST_URL}/category?sort=-order`
  );
  if (!request.ok) {
    throw new Error("Not found product");
  }
  const response = await request.json();
  return (response?.data?.data as Category[]) || [];
}
const CategorySection = async () => {
  const categoryList = await getCategories();
  console.log(categoryList);
  return (
    <div className={styles["wrapper"]}>
      {categoryList
        .filter(category => !category.parent)
        .map(item => {
          return (
            <div className={styles["category"]} key={item._id}>
              <Link
                href={`/product?category=${item.slug}`}
                className={styles["category-item"]}
              >
                <Image
                  className={styles["category-item__background"]}
                  src={item.categoryImage}
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
                    {item.categoryName}
                  </h3>
                  <Button variant={ButtonVariant.Solid}>View Products</Button>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default CategorySection;
