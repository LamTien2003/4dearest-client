import styles from "./ContactModal.module.css";

const ContactModal = () => {
  return (
    <div className={styles["wrapper"]}>
      <h3 style={{ fontWeight: 600 }}>Gmail: 4dearest.official@gmail.com</h3>
      <h3>Address: 46 Monterey Street, Monterey NSW 2217, Australia</h3>
      <h5>
        If you need support, please contact us via gmail, we will answer your
        questions at your email inbox.
      </h5>
    </div>
  );
};

export default ContactModal;
