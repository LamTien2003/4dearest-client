"use client";
import classNames from "classnames";
import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";

import Modal from "@/components/Modal";
import DetailProduct from "@/components/DetailProduct";
import heartIcon from "/public/images/icons/heart.svg";
import eyeIcon from "/public/images/icons/eye.svg";

import { ModalSize } from "@/components/Modal/Modal.d";
import { Product } from "@/types";
import styles from "./ProductItemActions.module.css";

interface ProductItemActionsProps extends PropsWithChildren {
  className?: string;
  product: Product;
}

const ProductItemActions = ({
  className,
  product,
}: ProductItemActionsProps) => {
  const [openQuickView, setOpenQuickView] = useState(false);

  const onOpenQuickView = (e: any) => {
    e.preventDefault();
    setOpenQuickView(true);
  };

  return (
    <>
      <div className={classNames(styles["actions"], className)}>
        <Tooltip label="Add whitelist" placement="left">
          <span className={styles["actions__item"]}>
            <Image src={heartIcon} alt="" width={16} height={16} />
          </span>
        </Tooltip>

        <Tooltip label="Quick view" placement="left">
          <span className={styles["actions__item"]} onClick={onOpenQuickView}>
            <Image src={eyeIcon} alt="" width={16} height={16} />
          </span>
        </Tooltip>
      </div>

      <Modal
        isOpen={openQuickView}
        onClose={() => setOpenQuickView(false)}
        size={ModalSize.Auto}
      >
        <div className={styles["modal-wrapper"]}>
          <DetailProduct product={product} />
        </div>
      </Modal>
    </>
  );
};

export default ProductItemActions;
