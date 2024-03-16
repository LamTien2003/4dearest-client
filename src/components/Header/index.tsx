import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

import { navbarOptions } from "@/constants";
import logoSrc from "/public/images/logo-ver1.png";

import Navbar from "@/components/Header/Navbar";
import Action from "@/components/Header/Action";

const Header = () => {
  return (
    <header className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <Link href={"/"} className={styles["logo"]}>
          <Image
            src={logoSrc}
            alt="4dearest Logo"
            style={{ width: "auto", height: "100%" }}
          />
        </Link>

        <Navbar menu={navbarOptions} />
        <Action />
      </div>
    </header>
  );
};

export default Header;
