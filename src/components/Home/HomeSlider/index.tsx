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
              "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710937305/668848e7-da4a-4016-9293-6eef561a0819_xbi3pg.png"
            }
            alt=""
            fill
          />
          <div className={styles["slider-item__main"]}>
            <Image
              src={
                "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710855935/products/txv3bc2amzuot1uzfjxr.jpg"
              }
              alt=""
              width={500}
              height={500}
            />
            <div className={styles["content"]}>
              <h2 className={styles["content__title"]}>
                Enchanted Rose Teddy Bear
              </h2>
              <p className={styles["content__sub-title"]}>
                Handmade Teddy Bear Rose Artificial
              </p>
              <p className={styles["content__description"]}>
                A Symbol of Endless Love The combination of a teddy bear and
                roses is a classic symbol of love and romance. Our Enchanted
                Rose Teddy Bear takes this timeless concept to new heights,
                offering a unique and unforgettable way to express your deepest
                emotions and affection.
              </p>
              <Button
                href="/product/enchanted-flower-rose-artificial"
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
            className={styles["slider-item__background"]}
            src={
              "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710937034/b270175b-4897-479b-8f1d-86dc34052757_pc84dn.png"
            }
            alt=""
            fill
          />
          <div className={styles["slider-item__main"]}>
            <Image
              src={
                "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710918909/products/fsxibmkkqb6od2ttqglv.jpg"
              }
              alt=""
              width={500}
              height={500}
            />
            <div className={styles["content"]}>
              <h2 className={styles["content__title"]}>
                AstroBunny Charm Necklace
              </h2>
              <p className={styles["content__sub-title"]}>
                Galactic Bunny Necklace
              </p>
              <p className={styles["content__description"]}>
                Embark on an intergalactic adventure with our AstroBunny Charm
                Necklace. This whimsical necklace features a delightful bunny
                astronaut charm suspended from a dainty chain, adding a touch of
                cosmic charm to your ensemble.
              </p>
              <Button
                href="/product/astrobunny-charm-necklace"
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
            className={styles["slider-item__background"]}
            src={
              "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710937723/4b716fc2-cd90-42e5-8a34-0e478a7edad0_sir6zc.png"
            }
            alt=""
            fill
          />
          <div className={styles["slider-item__main"]}>
            <Image
              src={
                "https://res.cloudinary.com/dcv1op3hs/image/upload/v1710861207/products/hnlvesdc7gsbmg1f8pqa.jpg"
              }
              alt=""
              width={500}
              height={500}
            />
            <div className={styles["content"]}>
              <h2 className={styles["content__title"]}>
                Enchanted Flower Rose Artificial
              </h2>
              <p className={styles["content__sub-title"]}>
                Handmade Flower Rose Artificial
              </p>
              <p className={styles["content__description"]}>
                {`Step into the World of Romance with Eternal Flower Rose
                Artificial Flower Embark on a magical journey of romance with
                the Eternal Flower Rose Artificial Flower. This product isn't
                just an ordinary artificial bouquet; it's an enchanting
                masterpiece designed to create a perfect romantic ambiance for
                every special occasion.`}
              </p>
              <Button
                href="/product/astrobunny-charm-necklace"
                className="w--50"
                variant={ButtonVariant.Solid}
              >
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
