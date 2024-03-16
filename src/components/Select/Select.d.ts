import { ReactElement, ReactNode } from "react";

export enum SelectSize {
  ExtraSmall = "xs",
  Small = "sm",
  Medium = "md",
  Large = "lg",
  Full = "full",
}

export enum SelectVariant {
  Outline = "outline",
  Unstyled = "unstyled",
  Flushed = "flushed",
  Filled = "filled",
}

interface Option {
  label: ReactNode;
  value: any;
}

export interface SelectProps {
  name: string;
  options: Option[];
  onChange: (value: any) => void;
  placeholder?: string;
  icon?: ReactElement;
  size?: SelectSize;
  variant?: SelectVariant;
  validate?: FieldValidator;
  className?: string;
}
