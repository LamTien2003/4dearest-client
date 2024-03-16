import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

import AdditionalInfoTab from "@/components/DetailProduct/AdditionalInfoTab";
import Breadcrumb from "@/components/Breadcrumb";
import DetailProduct from "@/components/DetailProduct";
import DescriptionTab from "@/components/DetailProduct/DescriptionTab";
import PolicyModal from "@/components/DetailProduct/ProductInfo/PriceAndActionBox/PolicyModal";
import Tabs from "@/components/Tabs";
import Loading from "@/app/loading";

import { Product } from "@/types";
import styles from "./DetailProductPage.module.css";

async function getDetailProduct(slug: string) {
  const request = await fetch(
    `${process.env.API_REQUEST_URL}/product/${slug}`,
    { next: { revalidate: 120 } }
  );
  if (!request.ok) {
    throw new Error("Not found product");
  }
  const response = await request.json();
  return response?.data?.data as Product;
}

export async function generateMetadata(
  {
    params,
  }: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;

  const request = await fetch(`${process.env.API_REQUEST_URL}/product/${slug}`);
  if (!request.ok) {
    throw new Error("Not found product");
  }
  const response = await request.json();
  const product = response?.data?.data as Product;

  return {
    title: `${product.title} – 4DEAREST™`,
    description: product.description,
    openGraph: {
      images: [product.imagesProduct[0]],
    },
  };
}

const DetailProductPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const product = await getDetailProduct(slug);

  const breads = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Product",
      href: "/product",
    },
    {
      title: product?.title,
      href: `/product/${slug}`,
    },
  ];

  const tabData = [
    {
      label: "Description",
      content: <DescriptionTab product={product} />,
    },
    {
      label: "Additional Information",
      content: (
        <>
          {product?.additionalInfo && (
            <AdditionalInfoTab data={product.additionalInfo} />
          )}
        </>
      ),
    },
    {
      label: "Shipping and return",
      content: <PolicyModal />,
    },
  ];

  return (
    <div className={styles["wrapper"]}>
      <Suspense fallback={<Loading />}>
        <div className={styles["breadcrumb"]}>
          <Breadcrumb breads={breads} />
        </div>

        <div className={styles["body"]}>
          <DetailProduct product={product} />
          <div className={styles["section-product"]}>
            <Tabs items={tabData} />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default DetailProductPage;
