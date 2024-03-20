"use client";
import Image from "next/image";
import { useContext } from "react";
import { LazyLoadTypes } from "react-slick";

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
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
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
          fill
          key={context?.activeImage}
          alt=""
        />
      </div>
      <div className={styles["list-images"]}>
        <Slider
          settings={{
            ...settings,
            beforeChange: (current: number, next: number) =>
              context.setActiveImage(images[next]),
          }}
          className={styles["slider"]}
        >
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
