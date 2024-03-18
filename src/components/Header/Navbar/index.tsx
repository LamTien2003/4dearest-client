import Link from "next/link";

import { NavbarProps } from "@/components/Header/Navbar/Navbar.d";
import MenuMobile from "@/components/Header/Navbar/MenuMobile";
import styles from "./Navbar.module.css";

const Navbar = ({ menu }: NavbarProps) => {
  return (
    <>
      <nav className={styles["menu"]}>
        <ul>
          {menu.map((item, index) => {
            return (
              <li
                className={styles["menu__item"]}
                key={`${item.title}-${index}`}
              >
                <Link className={styles["link"]} href={item.href}>
                  {item.title}
                </Link>

                {item.children && (
                  <ul className={styles["sub-menu"]}>
                    {item.children.map((itemChildren, index) => {
                      return (
                        <li key={`${itemChildren.title}-${index}`}>
                          <Link
                            href={itemChildren.href}
                            className={styles["sub-menu__item"]}
                          >
                            {itemChildren.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <MenuMobile menu={menu} />
    </>
  );
};

export default Navbar;
