"use client";
import classNames from "classnames";
import { Fade } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import ArrowDownIcon from "/public/images/icons/arrow-down.svg";
import useClickOutside from "@/hooks/useClickOutside";

import {
  SelectProps,
  SelectSize,
  SelectVariant,
} from "@/components/Select/Select.d";
import styles from "./Select.module.css";
import { Field, useField } from "formik";
import ValidatedError from "../ValidatedError";

const Select = ({
  name,
  options,
  icon = <Image src={ArrowDownIcon} alt="arrow-down" width={8} height={8} />,
  onChange,
  size = SelectSize.Medium,
  variant = SelectVariant.Outline,
  placeholder,
  validate,
}: SelectProps) => {
  const [field, meta] = useField(name);
  const [selectedField, setSelectedField] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  useEffect(() => {
    setSelectedField(options[0]);
  }, [options]);

  return (
    <>
      <div
        className={classNames(styles["wrapper"], {
          [styles["xs"]]: size === SelectSize.ExtraSmall,
          [styles["sm"]]: size === SelectSize.Small,
          [styles["md"]]: size === SelectSize.Medium,
          [styles["lg"]]: size === SelectSize.Large,
          [styles["full"]]: size === SelectSize.Full,
          [styles["filled"]]: variant === SelectVariant.Filled,
          [styles["flushed"]]: variant === SelectVariant.Flushed,
        })}
        ref={ref}
      >
        <div
          className={styles["title"]}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <p className={styles["title-box"]}>
            {placeholder && (
              <span className={styles["title-box__note"]}>{placeholder}</span>
            )}
            {selectedField.label}
          </p>

          {icon}
        </div>
        {isOpen && (
          <Fade in={isOpen} className={styles["menu"]}>
            {options.map(item => (
              <li
                value={item.value}
                key={item.value}
                className={classNames(styles["menu__item"], {
                  [styles["menu__item--active"]]:
                    item.value === selectedField.value,
                })}
                onClick={() => {
                  setSelectedField(item);
                  onChange(item.value);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </Fade>
        )}
        {validate && <Field {...field} validate={validate} hidden />}
        <ValidatedError touched={meta.touched} error={meta.error} />
      </div>
    </>
  );
};

export default Select;
