"use client";
import { useState } from "react";

import Spinner from "@/components/Loading/Spinner";
import RangeSlider from "@/components/RangeSlider";
import useParamsControl from "@/hooks/useParamsControl";

import { Category } from "@/types";
import styles from "./FilterBox.module.css";

const minPriceFilter = 1;
const maxPriceFilter = 200;
const step = 10;

const FilterBox = ({
  onClose,
  categories,
}: {
  onClose: () => void;
  categories: Category[];
}) => {
  const [rangePrice, setRangePrice] = useState([
    minPriceFilter,
    maxPriceFilter,
  ]);
  const { pushParams } = useParamsControl();

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
        {categories.map((item, index) => (
          <p
            className={styles["categories__item"]}
            key={index}
            onClick={() => {
              pushParams({
                category: item.slug,
              });
              onClose();
            }}
          >
            {item?.categoryName}{" "}
            {item.parent && <span>({item.amountProducts})</span>}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
