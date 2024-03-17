import Image from "next/image";

import styles from "./HomeSlider.module.css";

import Button from "@/components/Button";
import Slider from "@/components/Slider";

import { ButtonVariant } from "@/components/Button/Button.d";
import { LazyLoadTypes } from "react-slick";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 7000,
    autoplay: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    lazyLoad: "ondemand" as LazyLoadTypes,
  };
  return (
    <div className={`slider-container ${styles["wrapper"]}`}>
      <Slider settings={settings} className="w--100">
        <div className={styles["slider-item"]}>
          <Image
            className={styles["slider-item__background"]}
            src={
              "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604942/products/u2pfjjdthg0vgmsqjoae.jpg"
            }
            alt=""
            fill
          />
          <div className={styles["slider-item__main"]}>
            <Image
              src={
                "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg"
              }
              alt=""
              width={500}
              height={600}
            />
            <div className={styles["content"]}>
              <h2 className={styles["content__title"]}>NATURAL INGREDIENTS</h2>
              <p className={styles["content__sub-title"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
              </p>
              <p className={styles["content__description"]}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum sint occaecat cupidatat non proident
                sint occaecat cupida. READ MORE
              </p>
              <Button
                href="123"
                className="w--50"
                variant={ButtonVariant.Solid}
              >
                Shop now
              </Button>
            </div>
          </div>
        </div>
        <div className={styles["slider-item"]}>
          <Image
            src={
              "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg"
            }
            alt=""
            fill
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
