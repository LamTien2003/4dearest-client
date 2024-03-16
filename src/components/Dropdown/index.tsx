"use client";
import Image from "next/image";
import { PropsWithChildren, ReactNode, useState } from "react";

import chevronUpIcon from "/public/images/icons/chevron-up.svg";
import chevronDownIcon from "/public/images/icons/chevron-down.svg";

import styles from "./Dropdown.module.css";
import { Fade } from "@chakra-ui/react";

interface DropdownProps extends PropsWithChildren {
  title: ReactNode;
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isDrop, setIsDrop] = useState(false);

  return (
    <div className={styles["dropdown"]}>
      <h5
        className={styles["dropdown__title"]}
        onClick={() => setIsDrop(prev => !prev)}
      >
        {title}
        {isDrop ? (
          <Image
            src={chevronDownIcon}
            alt=""
            style={{ width: "auto", height: 12 }}
          />
        ) : (
          <Image
            src={chevronUpIcon}
            alt=""
            style={{ width: "auto", height: 12 }}
          />
        )}
      </h5>

      {isDrop && (
        <Fade in={isDrop}>
          <div className={styles["dropdown__content"]}>{children}</div>
        </Fade>
      )}
    </div>
  );
};

export default Dropdown;
