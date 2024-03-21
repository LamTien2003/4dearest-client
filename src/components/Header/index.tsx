import Link from "next/link";
import Image from "next/image";

import logoSrc from "/public/images/logo-big.png";
import Action from "@/components/Header/Action";
import Navbar from "@/components/Header/Navbar";

import { Category } from "@/types";
import styles from "./Header.module.css";
import { NavBarOption } from "./Navbar/Navbar";

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

const Header = async () => {
  const categories = await getCategories();

  const options = categories?.reduce<NavBarOption[]>((totalOptions, item) => {
    if (!item?.parent) {
      const childrenCategories = categories?.reduce<NavBarOption[]>(
        (total, category) => {
          if (category?.parent === item?.slug) {
            return [
              ...total,
              {
                title: category?.categoryName,
                href: `/product?category=${category?.slug}`,
              } as NavBarOption,
            ];
          }
          return total;
        },
        []
      );
      if (childrenCategories?.length) {
        childrenCategories.unshift({
          title: `All ${item.categoryName}`,
          href: `/product?category=${item.slug}`,
        });
      }

      return [
        ...totalOptions,
        {
          title: item?.categoryName,
          href: `/product?category=${item?.slug}`,
          children: childrenCategories,
        },
      ];
    }
    return totalOptions;
  }, []);

  return (
    <header className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <Link href={"/"} className={styles["logo"]}>
          <Image src={logoSrc} alt="4dearest Logo" style={{ height: "100%" }} />
        </Link>

        <Navbar
          menu={[
            { title: "Home", href: "/" },
            { title: "Shop", href: "/product" },
            ...options,
          ]}
        />
        <Action />
      </div>
    </header>
  );
};

export default Header;
