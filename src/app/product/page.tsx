import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

import SortingBox from "@/components/ProductPage/SortingBox";
import ProductItem from "@/components/ProductPage/ProductItem";
import PaginationBox from "@/components/ProductPage/PaginationBox";
import { buildQueryString, convertSlugToString } from "@/utils/helper";

import { Category, Product } from "@/types";
import styles from "./ProductPage.module.css";
import { Suspense } from "react";
import Spinner from "@/components/Loading/Spinner";

const productPerPage = 9;
async function getProducts(query: string) {
  const request = await fetch(
    `${process.env.API_REQUEST_URL}/product?${query}`,
    { next: { revalidate: 300 } }
  );
  if (!request.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetching data");
  }
  const response = await request.json();
  return response?.data;
}

async function getCategories() {
  const request = await fetch(
    `${process.env.API_REQUEST_URL}/category?sort=-order`
  );
  if (!request.ok) {
    throw new Error("Not found product");
  }
  const response = await request.json();
  return (response?.data?.data as Category[]) || [];
}

export async function generateMetadata(
  {
    searchParams,
  }: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { category } = searchParams;

  return {
    title: `${convertSlugToString(
      typeof category === "string"
        ? category
        : category?.join(", ") || "All Products"
    ).toUpperCase()} – 4DEAREST™`,
  };
}

const ProductPage = async ({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const productsResponse = await getProducts(
    buildQueryString({
      page: 1,
      ...searchParams,
      limit: productPerPage,
    })
  );
  const categories = await getCategories();

  return (
    <div>
      <div className={styles["banner"]}>
        <Image
          src="https://res.cloudinary.com/dcv1op3hs/image/upload/v1708604942/products/u2pfjjdthg0vgmsqjoae.jpg"
          fill
          alt=""
        />
      </div>
      <div className={styles["body"]}>
        <div className={styles["content"]}>
          <h4 className={styles["content__title"]}>
            {convertSlugToString(
              typeof searchParams?.category === "string"
                ? searchParams?.category
                : searchParams?.category?.join(", ") || "All Products"
            ).toUpperCase()}
          </h4>
          <p className={styles["content__sub-title"]}>
            Showing all {productsResponse?.totalItems} results
          </p>
          <SortingBox categories={categories} />
          <div className={styles["content-products"]}>
            {productsResponse?.data?.length === 0 && (
              <div className={styles["not-found-title"]}>
                No suitable products were found
              </div>
            )}
            <Suspense fallback={<Spinner />}>
              {(productsResponse?.data as Product[])?.map(product => (
                <div
                  className={styles["content-products__item"]}
                  key={product._id}
                >
                  <ProductItem product={product} />
                </div>
              ))}
            </Suspense>
          </div>
          <PaginationBox
            pageCount={Math.round(productsResponse.totalItems / productPerPage)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
