"use client";
import { Product } from "@/types";
import { PropsWithChildren, createContext, useState } from "react";

export interface DetailProductContextValue {
  activeImage: string;
  setActiveImage: (image: string) => void;
}
export const DetailProductThemeContext =
  createContext<DetailProductContextValue>({
    activeImage: "",
    setActiveImage: (image: string) => {},
  });

interface DetailProductContextProps extends PropsWithChildren {
  product: Product;
}

const DetailProductContext = ({
  children,
  product,
}: DetailProductContextProps) => {
  const [activeImage, setActiveImage] = useState(product?.imagesProduct[0]);

  return (
    <DetailProductThemeContext.Provider
      value={{
        activeImage,
        setActiveImage: (image: string) => setActiveImage(image),
      }}
    >
      {children}
    </DetailProductThemeContext.Provider>
  );
};

export default DetailProductContext;
