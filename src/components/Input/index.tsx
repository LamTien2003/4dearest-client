"use client";
import {
  Input as ChakraInput,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputRightElement as ChakraInputRightElement,
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/react";
import { inputAnatomy } from "@chakra-ui/anatomy";
import { Field, useField } from "formik";

import ValidatedError from "@/components/ValidatedError";

import {
  InputProps,
  InputSize,
  InputVariant,
} from "@/components/Input/Input.d";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const xs = defineStyle({
  fontSize: "0.8rem",
  height: "2.4rem",
});
const sm = defineStyle({
  fontSize: "1rem",
  height: "3.2rem",
});
const md = defineStyle({
  fontSize: "1.2rem",
  height: "4rem",
});
const lg = defineStyle({
  fontSize: "1.48rem",
  height: "4.8rem",
});

const sizes = {
  xs: definePartsStyle({ field: xs, addon: xs }),
  sm: definePartsStyle({ field: sm, addon: sm }),
  md: definePartsStyle({ field: md, addon: md }),
  lg: definePartsStyle({ field: lg, addon: lg }),
};

export const inputTheme = defineMultiStyleConfig({ sizes });

const Input = ({
  name = "",
  value = "",
  onChange,
  placeholder = "",
  size = InputSize.Medium,
  variant = InputVariant.Outline,
  leftAddon,
  rightAddon,
  className,
  validate,
}: InputProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="w--100">
      <ChakraInputGroup className={className}>
        {leftAddon && (
          <ChakraInputLeftElement>{leftAddon}</ChakraInputLeftElement>
        )}

        <ChakraInput
          {...field}
          value={value || field.value}
          borderColor={"blackAlpha.300"}
          focusBorderColor="blackAlpha"
          colorScheme="white"
          placeholder={placeholder}
          size={size}
          variant={variant}
        />

        {rightAddon && (
          <ChakraInputRightElement>{rightAddon}</ChakraInputRightElement>
        )}
      </ChakraInputGroup>
      {validate && <Field {...field} validate={validate} hidden />}

      <ValidatedError touched={meta.touched} error={meta.error} />
    </div>
  );
};

export default Input;
