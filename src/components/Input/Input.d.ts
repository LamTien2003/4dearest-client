import { FieldValidator } from "formik";
import { ReactNode } from "react";

export enum InputSize {
  ExtraSmall = "xs",
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

export enum InputVariant {
  Outline = "outline",
  UnStyled = "unstyled",
  Flushed = "flushed",
  Filled = "filled",
}

export interface InputProps {
  name: string;
  value?: any;
  onChange?: (e: event) => void;
  placeholder: string;
  size?: InputSize;
  variant?: InputVariant;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  className?: string;
  validate?: FieldValidator;
}
