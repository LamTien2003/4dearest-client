"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Drawer from "@/components/Drawer";
import barsIcon from "/public/images/icons/bars.svg";
import logoSrc from "/public/images/logo-big.png";

import { NavBarOption } from "@/components/Header/Navbar/Navbar.d";
import styles from "./MenuMobile.module.css";
import Dropdown from "@/components/Dropdown";

interface MenuProps {
  menu: NavBarOption[];
}

const MenuMobile = ({ menu }: MenuProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div
        className={styles["menu__icon"]}
        onClick={() => setIsOpenModal(true)}
      >
        <Link href={"#"}>
          <Image
            src={barsIcon}
            alt="Menu icon - 4dearest"
            width={16}
            height={16}
          />
        </Link>
      </div>

      <Drawer isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div className={styles["wrapper"]}>
          <div className={styles["menu-mobile"]}>
            {menu.map((item, index) => {
              return (
                <div key={`${item.title} - ${index}`}>
                  {item?.children && item?.children?.length ? (
                    <Dropdown
                      title={
                        <span className={styles["menu-mobile__item"]}>
                          {item.title}
                        </span>
                      }
                    >
                      {item.children.map((itemChildren, index) => (
                        <Link
                          href={itemChildren.href}
                          className={styles["menu-mobile__item"]}
                          key={`${itemChildren.title} - ${index}`}
                          onClick={() => setIsOpenModal(false)}
                        >
                          {itemChildren.title}
                        </Link>
                      ))}
                    </Dropdown>
                  ) : (
                    <Link
                      href={item.href}
                      className={styles["menu-mobile__item"]}
                      onClick={() => setIsOpenModal(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          <div className={styles["menu-mobile__footer"]}>
            <Image src={logoSrc} alt="4dearest Logo" />
            <h3>Gift and Decor Store</h3>
            <h5>For your Dearest.</h5>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MenuMobile;
