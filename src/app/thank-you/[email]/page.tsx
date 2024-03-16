import { Metadata } from "next";
import Image from "next/image";

import Logo from "/public/images/logo-ver1.png";
import CircleCheckIcon from "/public/images/icons/circle-check.svg";
import Button from "@/components/Button";
import { decodeURL } from "@/utils/helper";

import { ButtonVariant } from "@/components/Button/Button.d";
import styles from "./ThankYouPage.module.css";

export const metadata: Metadata = {
  title: "Thank you – 4DEAREST™",
  description:
    "Gifts, candles, accessories, and decorations at affordable prices. 4dearest - For your dearest",
};

const ThankYouPage = ({
  params,
}: {
  params: { email: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["body"]}>
        <div className={styles["logo"]}>
          <Image src={Logo} alt="" />
          <Image src={CircleCheckIcon} alt="" width={80} height={80} />
        </div>
        <div className={styles["context"]}>
          <h3 className={styles["context__title"]}>Your order is confirmed.</h3>

          <h4 className={styles["context__sub-title"]}>
            Thank you for choosing us. Hope you will be satisfied with our
            product.
          </h4>

          <h4 className={styles["context__sub-title"]}>
            {`You will soon receive a confirmation email with your order's
            shipping tracking number after the order has been handed over to the
            shipping carrier. It will be sent to the email address: `}
            <span style={{ fontWeight: 900 }}>{decodeURL(params?.email)}</span>.
            Please keep an eye on your email regularly.
          </h4>
        </div>
        <Button
          href="/"
          variant={ButtonVariant.Solid}
          className={styles["continue-btn"]}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default ThankYouPage;
