"use client";
import Image from "next/image";
import { useContext } from "react";

import {
  DetailProductContextValue,
  DetailProductThemeContext,
} from "@/components/DetailProduct/DetailProductContext";
import Slider from "@/components/Slider";

import styles from "./ImagesDisplay.module.css";

interface ImagesDisplayProps {
  images: string[];
}

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 1000,
  autoplaySpeed: 2000,
  cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
};
const ImagesDisplay = ({ images }: ImagesDisplayProps) => {
  const context = useContext<DetailProductContextValue>(
    DetailProductThemeContext
  );

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["active-image"]}>
        <Image
          className={styles["mounting-animation"]}
          src={context?.activeImage}
          width={400}
          height={500}
          key={context?.activeImage}
          alt=""
        />
      </div>
      <div className={styles["list-images"]}>
        <Slider settings={settings} className={styles["slider"]}>
          {images?.map(image => (
            <div className={styles["list-images__slide"]} key={image}>
              <Image
                className={styles["list-images__item"]}
                src={image}
                width={60}
                height={60}
                style={{ height: "100%", objectFit: "cover" }}
                alt=""
                onClick={() => context.setActiveImage(image)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImagesDisplay;
