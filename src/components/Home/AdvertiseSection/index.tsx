import Link from "next/link";
import Image from "next/image";

import Slider from "@/components/Slider";

import styles from "./AdvertiseSection.module.css";

const settings = {
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  autoplay: false,
  cssEase: "linear",
  slidesToShow: 6,
  slidesToScroll: 1,
  waitForAnimate: false,
  slickNext: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const images = [
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604940/products/vxeslyfmjzelogya4dpt.jpg",
];

const AdvertiseSection = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["head"]}>
        <h5 className={styles["sub-title"]}>For more gift & promotion</h5>
        <h3 className={styles["title"]}>Follow us on Instagram!</h3>
      </div>
      <Slider settings={settings} className={styles["slider"]}>
        {images.map((item, index) => {
          return (
            <Link href={""} className={styles["advertise"]} key={index}>
              <Image
                className={styles["primary-image"]}
                src={item}
                alt=""
                width={200}
                height={200}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default AdvertiseSection;
