import { PropsWithChildren, ReactNode } from "react";

export enum DrawerPlacement {
  Top = "top",
  Bottom = "bottom",
  Right = "right",
  Left = "left",
}

export enum DrawerSize {
  ExtraSmall = "xs",
  Small = "sm",
  Medium = "md",
  Large = "lg",
  ExtraLarge = "xl",
  Full = "full",
}

export interface DrawerProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  title?: ReactNode;
  footer?: ReactNode;
  fixedFooter?: boolean;
}
