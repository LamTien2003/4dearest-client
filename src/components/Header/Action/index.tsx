"use client";
import { Collapse } from "@chakra-ui/react";
import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

import { CartThemeContext } from "@/components/CartContextProvider";
import Input from "@/components/Input";
import bagShoppingIcon from "/public/images/icons/bag-shopping.svg";
import heartIcon from "/public/images/icons/heart.svg";
import searchIcon from "/public/images/icons/magnifying-glass.svg";

import { InputSize } from "@/components/Input/Input.d";
import styles from "./Action.module.css";

const Action = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const { cart, openCartModal } = useContext(CartThemeContext);
  const router = useRouter();

  return (
    <Formik initialValues={{ search: "" }} onSubmit={() => {}}>
      {({ values }) => {
        return (
          <div className={styles["actions"]}>
            <Link
              href={"#"}
              className={`${styles["actions__item"]} ${styles["liked-product"]}`}
            >
              <Image
                src={heartIcon}
                alt="Heart icon - 4dearest"
                width={16}
                height={16}
              />
              (0)
            </Link>
            <div
              className={styles["actions__item"]}
              onClick={() => openCartModal()}
            >
              <Image
                src={bagShoppingIcon}
                alt="Shopping icon - 4dearest"
                width={16}
                height={16}
              />
              (
              {cart?.reduce(
                (total, current) =>
                  total +
                  current.variants.reduce(totalVariant => totalVariant + 1, 0),
                0
              ) || 0}
              )
            </div>

            <div className={`${styles["actions__item"]}`}>
              <div onClick={() => setIsOpenSearch(prev => !prev)}>
                <Image
                  src={searchIcon}
                  alt="Search icon - 4dearest"
                  width={16}
                  height={16}
                />
              </div>
              <Collapse in={isOpenSearch} animateOpacity>
                <div className={styles["search-popup"]}>
                  <Input
                    name="search"
                    className={styles["search-popup__input"]}
                    placeholder="Search product by name"
                    size={InputSize.Large}
                    rightAddon={
                      <Image
                        src={searchIcon}
                        alt="Search icon - 4dearest"
                        width={16}
                        height={16}
                        onClick={() => {
                          router.push(`/product?q=${values.search}`);
                          setIsOpenSearch(false);
                        }}
                      />
                    }
                  />
                </div>
              </Collapse>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Action;
