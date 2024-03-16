import React, { ReactNode, useState } from "react";
import {
  Fade,
  Radio,
  RadioGroup,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";
import { radioAnatomy } from "@chakra-ui/anatomy";

import {
  COLOR_GRAY_300,
  COLOR_GRAY_500,
  COLOR_GRAY_600,
  COLOR_GRAY_700,
} from "@/constants/color";

import styles from "./RadioCardGroup.module.css";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    padding: "1.8rem",
    gap: "2rem",
    border: `2px solid ${COLOR_GRAY_300}`,
    borderRadius: 4,
    _checked: {
      borderColor: COLOR_GRAY_500,
      backgroundColor: COLOR_GRAY_300,
    },
  },
  label: {
    display: "block",
    flex: 1,
  },
  control: {
    fontSize: 23,
    border: `1px solid ${COLOR_GRAY_600} !important`,
  },
});

export const radioTheme = defineMultiStyleConfig({
  baseStyle,
});

interface RadioCardOption {
  label: ReactNode;
  value: any;
  children?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
}

interface RadioCardGroupProps {
  options: RadioCardOption[];
  value: any;
  onChange: (value: any) => void;
}

const RadioCardGroup = ({ onChange, options, value }: RadioCardGroupProps) => {
  return (
    <RadioGroup className={styles["wrapper"]} value={value} onChange={onChange}>
      {options.map((option, index) => {
        return (
          <div key={`${option.value}-${index}`}>
            <Radio
              value={option.value}
              id={`${value}-${index}`}
              name={`${option.value}-${index}`}
              size="lg"
              display="flex"
              colorScheme="blackAlpha"
              isDisabled={option?.disabled || false}
            >
              <div className={styles["label-box"]}>
                <span className={styles["label-box__title"]}>
                  {option.label}
                </span>
                {option?.suffix && <div>{option.suffix}</div>}
              </div>
            </Radio>
            {option?.children && value === option.value && (
              <Fade in={value === option.value}>
                <div className={styles["children-wrapper"]}>
                  {option.children}
                </div>
              </Fade>
            )}
          </div>
        );
      })}
    </RadioGroup>
  );
};

export default RadioCardGroup;
