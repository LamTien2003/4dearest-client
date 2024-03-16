"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import RangeSlider from "@/components/RangeSlider";
import useParamsControl from "@/hooks/useParamsControl";
import useProductsQuery from "@/hooks/useProductQuery";
import { formatCurrency } from "@/utils/helper";

import { Category, Product } from "@/types";
import styles from "./FilterBox.module.css";
import useCategoriesQuery from "@/hooks/useCategoriesQuery";
import Spinner from "@/components/Loading/Spinner";

const minPriceFilter = 1;
const maxPriceFilter = 200;
const step = 10;

const FilterBox = () => {
  const [rangePrice, setRangePrice] = useState([
    minPriceFilter,
    maxPriceFilter,
  ]);
  const { pushParams } = useParamsControl();
  const { products, isProductsLoading } = useProductsQuery(1, 2, {
    sort: "hotOrder",
  });
  const { categories, isCategoriesLoading } = useCategoriesQuery(1, 10);

  return (
    <div className={styles["wrapper"]}>
      <h5 className={styles["title"]}>FILTER</h5>

      <div className={styles["range-price"]}>
        <RangeSlider
          min={minPriceFilter}
          max={maxPriceFilter}
          step={step}
          defaultValue={[minPriceFilter, maxPriceFilter]}
          onChangeEnd={value => {
            pushParams({
              [`price[gte]`]: value[0],
              [`price[lte]`]: value[1],
              page: 1,
            });
          }}
          onChange={value => setRangePrice(value)}
        />
        <p>
          Price: {rangePrice[0]}$ - {rangePrice[1]}$
        </p>
      </div>

      <div className={styles["categories"]}>
        <h5 className={styles["categories__title"]}>Categories</h5>
        {isCategoriesLoading && <Spinner />}
        {categories.map((item, index) => (
          <p
            className={styles["categories__item"]}
            key={index}
            onClick={() =>
              pushParams({
                category: item.slug,
              })
            }
          >
            {item?.categoryName} <span>({item?.amountProducts})</span>
          </p>
        ))}
      </div>

      <div className={styles["best-seller"]}>
        <h5 className={styles["best-seller__title"]}>Best Seller</h5>
        {isProductsLoading && <Spinner />}
        {products.map((item, index) => (
          <Link
            href={`/product/${item?.slug}`}
            className={styles["best-seller__item"]}
            key={index}
          >
            <Image
              src={item?.imagesProduct[0]}
              width={70}
              height={70}
              alt={`${item.title}-image`}
            />
            <div className={styles["product-info"]}>
              <h3 className={styles["product-info__title"]}>{item?.title}</h3>
              <h3 className={styles["product-info__sub-title"]}>
                {item?.subTitle}
              </h3>
              <p className={styles["product-info__price"]}>
                {formatCurrency(item?.price || 0)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
