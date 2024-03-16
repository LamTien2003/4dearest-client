import classNames from "classnames";
import { useEffect, useState } from "react";

import MinusIcon from "/public/images/icons/minus.svg";
import PlusIcon from "/public/images/icons/plus.svg";

import { InputSize } from "@/components/Input/Input.d";
import { NumberInputProps } from "@/components/Input/NumberInput/NumberInput.d";
import styles from "./NumberInput.module.css";
import Image from "next/image";

const NumberInput = ({
  value,
  onChange,
  min = 0,
  max = 9999,
  size = InputSize.Large,
  onMaxValue,
  onMinValue,
}: NumberInputProps) => {
  return (
    <div
      className={classNames(styles["wrapper"], {
        [styles["xs"]]: size === InputSize.ExtraSmall,
        [styles["sm"]]: size === InputSize.Small,
        [styles["md"]]: size === InputSize.Medium,
        [styles["lg"]]: size === InputSize.Large,
      })}
    >
      <button
        className={styles["button"]}
        onClick={() => {
          if (value <= min) {
            onMinValue && onMinValue(min, value);
            return;
          }
          onChange(value - 1);
        }}
      >
        <Image src={MinusIcon} width={10} height={10} alt="minus" />
      </button>
      <input
        className={styles["input"]}
        type="number"
        value={value}
        onChange={e => {
          e.preventDefault();
          const value = +e.target.value;
          if (value >= min && value <= max) {
            onChange(value);
          }
        }}
      />
      <button
        className={styles["button"]}
        onClick={() => {
          if (value >= max) {
            onMaxValue && onMaxValue(max, value);
            return;
          }
          onChange(value + 1);
        }}
      >
        <Image src={PlusIcon} width={10} height={10} alt="minus" />
      </button>
    </div>
  );
};

export default NumberInput;
