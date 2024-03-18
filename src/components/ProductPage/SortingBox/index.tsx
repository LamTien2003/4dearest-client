"use client";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";

import FilterIcon from "/public/images/icons/filter.svg";
import Button from "@/components/Button";
import Drawer from "@/components/Drawer";
import Select from "@/components/Select";
import FilterBox from "@/components/ProductPage/FilterBox";
import useParamsControl from "@/hooks/useParamsControl";

import {
  ButtonColorType,
  ButtonSize,
  ButtonVariant,
} from "@/components/Button/Button.d";
import { DrawerPlacement } from "@/components/Drawer/Drawer.d";
import { SelectSize } from "@/components/Select/Select.d";
import { Category } from "@/types";
import styles from "./SortingBox.module.css";

const options = [
  {
    label: "Default Sorting",
    value: "",
  },
  {
    label: "Sort by latest",
    value: "-createdAt",
  },
  {
    label: "Sort by price: low to high",
    value: "price",
  },
  {
    label: "Sort by price: high to low",
    value: "-price",
  },
];

const SortingBox = ({ categories }: { categories: Category[] }) => {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const { pushParams } = useParamsControl();

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={styles["left-sort"]}>
        <div className={styles["left-sort__action"]}>
          <Button
            size={ButtonSize.Large}
            variant={ButtonVariant.Outline}
            colorType={ButtonColorType.Black}
            className={styles["btn-filter"]}
            onClick={() => setOpenFilterModal(true)}
            leftIcon={<Image src={FilterIcon} alt="" width={20} height={20} />}
          >
            FILTER
          </Button>
          <Select
            name="sort"
            size={SelectSize.Large}
            options={options}
            onChange={(value: any) => {
              pushParams({
                sort: value,
                page: 1,
              });
            }}
          />
        </div>
        <Drawer
          isOpen={openFilterModal}
          placement={DrawerPlacement.Left}
          onClose={() => setOpenFilterModal(false)}
        >
          <FilterBox
            onClose={() => setOpenFilterModal(false)}
            categories={categories}
          />
        </Drawer>
      </Form>
    </Formik>
  );
};

export default SortingBox;
