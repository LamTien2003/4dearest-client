import Slider from "@/components/Slider";
import Section from "@/components/Home/Section";
import ProductItem from "@/components/ProductPage/ProductItem";

import { Product } from "@/types";
import styles from "./ProductSection.module.css";

const settings = {
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  autoplay: true,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  waitForAnimate: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

async function getProducts() {
  const request = await fetch(`${process.env.API_REQUEST_URL}/product`);
  if (!request.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetching data");
  }
  const response = await request.json();
  return response?.data?.data as Product[];
}

const ProductSection = async () => {
  const products = await getProducts();

  return (
    <Section>
      <div className={styles["head"]}>
        <h5 className={styles["sub-title"]}>CANDLES & DIFFUSERS</h5>
        <h3 className={styles["title"]}>COLLECTION BEST SELLERS</h3>
      </div>
      <div className={styles["body"]}>
        <Slider settings={settings} className="w--100">
          {products.map(product => (
            <ProductItem product={product} key={product._id} />
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default ProductSection;
