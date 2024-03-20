import Image from "next/image";

import Button from "@/components/Button";
import Section from "@/components/Home/Section";

import { ButtonColorType, ButtonVariant } from "@/components/Button/Button.d";
import styles from "./FeaturedSection.module.css";

const FeaturedSection = () => {
  return (
    <Section>
      <div className={styles["featured-product"]}>
        <div className={styles["left"]}>
          <Image
            className={styles["left__image1"]}
            src={
              "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710855935/products/txv3bc2amzuot1uzfjxr.jpg"
            }
            width={800}
            height={800}
            alt=""
          />
          <Image
            className={styles["left__image2"]}
            src={
              "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710855935/products/esj1vd77lo8rmx7edasc.jpg"
            }
            width={400}
            height={400}
            alt=""
          />
        </div>
        <div className={styles["right"]}>
          <Image
            src={
              "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710855935/products/di9yyvlswwwozr0hcgte.jpg"
            }
            width={300}
            height={300}
            alt=""
          />
          <div className={styles["right__info"]}>
            <h3 className={styles["title"]}>Enchanted Rose Teddy Bear</h3>
            <h3 className={styles["sub-title"]}>
              A Symbol of Endless Love The combination of a teddy bear and roses
              is a classic symbol of love and romance. Our Enchanted Rose Teddy
              Bear takes this timeless concept to new heights, offering a unique
              and unforgettable way to express your deepest emotions and
              affection.
            </h3>
          </div>
          <Button
            href="/product/enchanted-rose-teddy-bear"
            colorType={ButtonColorType.Black}
            variant={ButtonVariant.Solid}
          >
            Shop now
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedSection;
