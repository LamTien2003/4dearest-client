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
              "https://res.cloudinary.com/dcv1op3hs/image/upload/v1709099532/h1-img-03_iugxe6.jpg"
            }
            width={800}
            height={800}
            alt=""
          />
          <Image
            className={styles["left__image2"]}
            src={
              "https://res.cloudinary.com/dcv1op3hs/image/upload/v1709099531/h1-img-04_s4v98o.jpg"
            }
            width={400}
            height={400}
            alt=""
          />
        </div>
        <div className={styles["right"]}>
          <Image
            src={
              "https://res.cloudinary.com/dcv1op3hs/image/upload/v1709099569/h1-img-08_i6gvu9.jpg"
            }
            width={400}
            height={400}
            alt=""
          />
          <div className={styles["right__info"]}>
            <h3 className={styles["title"]}>OUR FAVOURITES</h3>
            <h3 className={styles["sub-title"]}>
              Lorem ipsum dolor sit amet, consectetur adipi, scing seddo eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Pretium quam
              vulputate.
            </h3>
          </div>
          <Button
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
