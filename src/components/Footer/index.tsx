import Image from "next/image";

import logoSrc from "/public/images/logo-big-white.png";
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
          <a
            target="_blank"
            className={styles["body-item__link"]}
            href="https://www.instagram.com/4dearest.official/"
          >
            IG: 4dearest.official
          </a>
        </div>

        <div className={styles["body-item"]}>
          <h4 className={styles["body-item__title"]}>SHOP</h4>
          <Link
            className={styles["body-item__link"]}
            href={"/product?category=accessories"}
          >
            All Accessories
          </Link>
          <Link
            className={styles["body-item__link"]}
            href={"/product?category=gifts"}
          >
            All Gifts
          </Link>
          <Link
            className={styles["body-item__link"]}
            href={"/product?category=decorations"}
          >
            All Decorations
          </Link>
        </div>
        <div className={styles["body-item"]}>
          <h4 className={styles["body-item__title"]}>Socials</h4>
          <a
            target="_blank"
            className={styles["body-item__link"]}
            href="https://www.instagram.com/4dearest.official/"
          >
            Instagram
          </a>
          <a
            target="_blank"
            className={styles["body-item__link"]}
            href="https://www.facebook.com/profile.php?id=61557038176940"
          >
            Facebook
          </a>
        </div>
        <div className={styles["body-item"]}>
          <h4 className={styles["body-item__title"]}>HELP</h4>
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
          <Link
            className={styles["body-item__link"]}
            href={"/policies/terms-of-service"}
          >
            Terms of Service
          </Link>
        </div>
      </div>

      <div className={styles["foot"]}>
        <div className={styles["foot__item"]}>
          <Link href={"/policies/return-policy"}>Return policy</Link>
          <Link href={"/policies/privacy-policy"}>Privacy</Link>
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
