import Link from "next/link";
import styles from "./PolicyModal.module.css";

const PolicyModal = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className="d-flex flex-col gap--4 ">
        <p className={styles["title"]}>Shipping policy:</p>
        <Link href="/policies/shipping-policy" className={styles["link"]}>
          Click here to read shipping policy
        </Link>
      </div>
      <div className="d-flex flex-col gap--4 ">
        <p className={styles["title"]}>Return policy:</p>
        <Link href="/policies/return-policy" className={styles["link"]}>
          Click here to read return policy
        </Link>
      </div>
      <div className="d-flex flex-col gap--4 ">
        <p className={styles["title"]}>Privacy policy:</p>
        <Link href="/policies/privacy-policy" className={styles["link"]}>
          Click here to read privacy policy
        </Link>
      </div>
    </div>
  );
};

export default PolicyModal;
