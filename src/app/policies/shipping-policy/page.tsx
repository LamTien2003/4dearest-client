import { Metadata } from "next";

import styles from "../Policies.module.css";

export const metadata: Metadata = {
  title: "Shipping Policy – 4DEAREST™",
  description:
    "Gifts, candles, accessories, and decorations at affordable prices. 4dearest - For your dearest",
};

const PrivacyPolicyPage = () => {
  return (
    <div className={styles["wrapper"]}>
      <h2 className={styles["title"]}>Shipping Policy</h2>
      <p>
        At 4dearest, we strive to provide excellent service which includes the
        security of shipping your packages. We have opted to provide you with
        multiple options for shipping your order that provides tracking numbers
        to ensure that you can monitor your shipment as it travels to your
        doorstep.
      </p>
      <p>
        <strong>INTERNATIONAL STANDARD SHIPPING</strong>
        <br />
        We have elected to use the most affordable shipping prices through
        priority mail international. It can take up to 1-3 business days to
        process orders after they are received. Delivery can range from 5-7
        business days depending on your proximity (DOES NOT DELIVERY ON{" "}
        {`SUNDAY's`}
        AND HOLIDAYS) and has no specific guaranteed delivery time. Due to
        differing international customs process, 4dearest cannot be held liable
        for any packages shipped via this method.
      </p>
      <p>
        Once it has left our warehouse. Should you run into any tracking issues.
        Please contact the shipping carrier if you did not receive your package.
      </p>
      <p>
        May file a complaint report with them directly. In some cases, we may
        elect to use a shipping method which requires a signature upon receipt,
        based on the total value of your order. If you want to ensure that we
        ship your international package with tracking confirmation to your door,
        you may make a direct request with customer service at{" "}
        <strong>4dearest.official@gmail.com</strong>.
      </p>
      <p>
        <strong>HOW CAN I TRACK MY ORDER?</strong>
        <br />
        Once your item is shipped, you will receive an email with your tracking
        number to monitor your shipment.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
