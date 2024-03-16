import FeaturedSection from "@/components/Home/FeaturedSection";
import HomeSlider from "@/components/Home/HomeSlider";
import ProductSection from "@/components/Home/ProductSection";
import CategorySection from "@/components/Home/CategorySection";
import AdvertiseSection from "@/components/Home/AdvertiseSection";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles["main"]}>
      <HomeSlider />
      <ProductSection />
      <CategorySection />
      <FeaturedSection />
      <AdvertiseSection />
    </main>
  );
}
