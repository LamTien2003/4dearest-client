import { Metadata } from "next";

import styles from "../Policies.module.css";

export const metadata: Metadata = {
  title: "Return Policy – 4DEAREST™",
  description:
    "Gifts, candles, accessories, and decorations at affordable prices. 4dearest - For your dearest",
};

const PrivacyPolicyPage = () => {
  return (
    <div className={styles["wrapper"]}>
      <h2 className={styles["title"]}>Return Policy</h2>
      <p>
        Our policy lasts 16 days. If 16 days have gone by since your purchase,
        unfortunately we cannot offer you a refund or exchange.
      </p>
      <p>
        To be eligible for a return, your item must be unused and in the same
        condition that you received it. It must also be in the original
        packaging
      </p>
      <p>
        All merchandise returned to us must be in the original packaging with
        all original items accompanying the merchandise. If the originally
        packaging is not available, pack your item securely using a replacement
        box and proper packaging to ensure the device is well protected. The
        return address will vary based on product but will be included in the
        return label.
      </p>
      <p>
        To complete your return, we require a receipt or proof of purchase.
        Please do not send your purchase back to the manufacturer.
      </p>
      <p>
        Purchases made during any promotional sale are final and cannot be
        refunded or returned unless there is a manufacturer defect.
      </p>
      <p>
        <strong>Refunds (If applicable)</strong>
        <br />
        Once your return is received and inspected, we will send you an email to
        notify you that we have received your returned item. We will also notify
        you of the approval or rejection of your refund. If you are approved,
        then your refund will be processed, and a credit will automatically be
        applied to your credit card or original method of payment, within 3
        days.
      </p>
      <strong>Late or missing refunds (If applicable)</strong>
      <p>
        If you {`haven't`} received a refund yet, first check your bank account
        again. Then contact your credit card company, it ma take some time
        before your refund is officially posted. Next contact your bank. There
        is often some processing time before a refund is posted. If {`you've`}{" "}
        done all of this and you still have not received your refund yet, please
        contact us at <strong>4dearest.official@gmail.com</strong>.
      </p>
      <p>
        <strong>Shipping</strong>
        <br />
        You will be responsible for paying for your own shipping costs for
        returning your item. Shipping costs are non-refundable. If you receive a
        refund, the cost of return shipping will be deducted from your refund.
        Depending on where you live, the time it may take for your exchanged
        product to reach you, may vary.
      </p>
      <p>
        <strong>Cancellations (If Applicable)</strong>
        <br />
        If you would like to cancel your order, contact us at{" "}
        <strong>4dearest.official@gmail.com</strong> within 6 hours of ordering.
        Each order remains in a processing state for 6 hours until it is
        transmitted to our operational facility for immediate fulfillment.
      </p>
      <p>
        <strong>Wrong Address</strong>
        <br />
        It is the responsibility of the buyer to make sure that they enter their
        shipping address correctly. Please contact us at{" "}
        <strong>4dearest.official@gmail.com</strong> within 6 hours of ordering
        if you believe you have provided us with an incorrect shipping address.
        We do our best to speed up our processing times, so there is always a
        small window to correct an incorrect shipping address.
      </p>
      <p>
        <strong>Lost or Stolen Packages</strong>
        <br />
        4dearest is not responsible for lost or stolen packages. If your
        tracking information states that your package was delivered to your
        address and you have not received it, please file a complaint to your
        respective shipping carrier. If you have any further questions on how to
        do this please reach out to us at{" "}
        <strong>4dearest.official@gmail.com</strong> .
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
