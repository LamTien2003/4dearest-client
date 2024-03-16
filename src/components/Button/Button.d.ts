import { classnames } from "classnames";
import { PropsWithChildren, ReactElement } from "react";

export enum ButtonSize {
  ExtraSmall = "xs",
  Small = "sm",
  Medium = "md",
  Large = "lg",
  ExtraLarge = "xl",
}

export enum ButtonVariant {
  Solid = "solid",
  Outline = "outline",
  //   Ghost = "ghost",
  //   Link = "link",
}

export enum ButtonColorType {
  Primary = "primary",
  White = "white",
  Black = "black",
  //   Gray = "gray",
}

export interface ButtonProps extends PropsWithChildren {
  size?: ButtonSize;
  variant?: ButtonVariant;
  colorType?: ButtonColorType;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  isSubmit?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  href?: string;
  className?: string;
  onClick?: (e: Event) => void;
}
