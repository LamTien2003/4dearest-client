import Image from "next/image";

import logoSrc from "/public/images/logo-ver1-white.png";
import paymentMethodSrc from "/public/images/payment-method.png";

import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["body"]}>
        <div className={styles["body-item"]}>
          <Image src={logoSrc} alt="4Dearest - Logo" />
        </div>
        <div className={styles["body-item"]}>
          <h4 className={styles["body-item__title"]}>CONTACT</h4>
          <Link className={styles["body-item__link"]} href={"#"}>
            A: 46 Monterey Street, Monterey NSW 2217, Australia
          </Link>
          <Link className={styles["body-item__link"]} href={"#"}>
            T: +61 417 174 788
          </Link>
          <Link className={styles["body-item__link"]} href={"#"}>
            Gmail: 4dearest.official@gmail.com
          </Link>
          <Link className={styles["body-item__link"]} href={"#"}>
            IG: 4dearest.official
          </Link>
        </div>

        <div className={styles["body-item"]}>
          <h4 className={styles["body-item__title"]}>SHOP</h4>
          <Link className={styles["body-item__link"]} href={"#"}>
            All Candles
          </Link>
          <Link className={styles["body-item__link"]} href={"#"}>
            All Gifts
          </Link>
          <Link className={styles["body-item__link"]} href={"#"}>
            Accessories
          </Link>
          <Link className={styles["body-item__link"]} href={"#"}>
            Home Decors
          </Link>
        </div>
        <div className={styles["body-item"]}>
          <h4 className={styles["body-item__title"]}>Socials</h4>
          <Link className={styles["body-item__link"]} href={"#"}>
            Instagram
          </Link>
          <Link className={styles["body-item__link"]} href={"#"}>
            Facebook
          </Link>
          <Link className={styles["body-item__link"]} href={"#"}>
            Tiktok
          </Link>
          <Link className={styles["body-item__link"]} href={"#"}>
            Youtube
          </Link>
        </div>
        <div className={styles["body-item"]}>
          <h4 className={styles["body-item__title"]}>HELP</h4>
          <Link className={styles["body-item__link"]} href={"#"}>
            Contact
          </Link>
          <Link
            className={styles["body-item__link"]}
            href={"/policies/privacy-policy"}
          >
            Privacy policy
          </Link>
          <Link
            className={styles["body-item__link"]}
            href={"/policies/return-policy"}
          >
            Return policy
          </Link>
          <Link
            className={styles["body-item__link"]}
            href={"/policies/shipping-policy"}
          >
            Shipping policy
          </Link>
        </div>
      </div>

      <div className={styles["foot"]}>
        <div className={styles["foot__item"]}>
          <Link href="">Term of use</Link>
          <Link href="">Privacy</Link>
        </div>
        <Image src={paymentMethodSrc} alt="Payment Method - 4Dearest" />
        <div className={styles["foot__item"]}>
          <Link href="">© 2023 4Dearest, All Rights Reserved</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
