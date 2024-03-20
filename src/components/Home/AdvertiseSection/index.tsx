import Link from "next/link";
import Image from "next/image";

import Slider from "@/components/Slider";

import styles from "./AdvertiseSection.module.css";

const settings = {
  infinite: true,
  slidesToShow: 10,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

const images = [
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710855935/products/txv3bc2amzuot1uzfjxr.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710860586/products/esquiw9xhbuwjnobplnr.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710862992/products/hp5inwr5fuf1uwkdvajm.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710910884/products/qgnel3zeitsoo90alcag.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710915814/products/jlzzzp6bhqvv8wxxrect.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710915814/products/nfiydldcqfq0obhvnlnf.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710917345/rose_gold_ijcfe6.webp",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710918909/products/ade3hbcpcsuc5gesvflu.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710931798/products/apvv6xmtkopcsv7f4tz4.jpg",
  "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710934199/products/kn9bvo0rycmysyliyfd6.jpg",
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
            <a
              target="_blank"
              href="https://www.instagram.com/4dearest.official/"
              className={styles["advertise"]}
              key={index}
            >
              <Image
                className={styles["primary-image"]}
                src={item}
                alt=""
                width={200}
                height={200}
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                }}
              />
            </a>
          );
        })}
      </Slider>
    </div>
  );
};

export default AdvertiseSection;
