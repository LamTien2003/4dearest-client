"use client";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

import CartDrawer from "@/components/CartContextProvider/CartDrawer";
import useCartInformationQuery from "@/hooks/useCartInformationQuery";

import { CartItem } from "@/types";

export interface CartContextValue {
  cart: CartItem[];
  isCartLoading: boolean;
  openCartModal: () => void;
  closeCartModal: () => void;
  clearCart: () => void;
}
export const CartThemeContext = createContext<CartContextValue>({
  cart: [],
  isCartLoading: false,
  openCartModal: () => {},
  closeCartModal: () => {},
  clearCart: () => {},
});

const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState([]);
  const { cart, isCartLoading } = useCartInformationQuery(dataFromLocalStorage);

  const openCartModal = useCallback(() => setIsOpenCartModal(true), []);
  const closeCartModal = useCallback(() => setIsOpenCartModal(false), []);
  const clearCart = useCallback(() => {
    setDataFromLocalStorage([]);
    localStorage.setItem("cart", "[]");
  }, []);

  useEffect(() => {
    // Set data to cart in first access website
    setDataFromLocalStorage(JSON.parse(localStorage.getItem("cart") || "[]"));

    const onStorageChanged = () => {
      setDataFromLocalStorage(JSON.parse(localStorage.getItem("cart") || "[]"));
      if (!isOpenCartModal) {
        setIsOpenCartModal(true);
      }
    };
    window.addEventListener("addToCart", onStorageChanged, false);

    return () =>
      window.removeEventListener("addToCart", onStorageChanged, false);
  }, []);

  return (
    <CartThemeContext.Provider
      value={{ cart, isCartLoading, openCartModal, closeCartModal, clearCart }}
    >
      {children}
      <CartDrawer
        cart={cart}
        isOpenCartModal={isOpenCartModal}
        isLoading={isCartLoading}
        onClose={() => setIsOpenCartModal(false)}
      />
    </CartThemeContext.Provider>
  );
};

export default CartContextProvider;
