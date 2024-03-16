import { PropsWithChildren, ReactNode } from "react";

export enum ModalSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",
  ExtraLarge = "xl",
  SuperLarge = "2xl",
  Auto = "auto",
}

export interface ModalProps extends PropsWithChildren {
  title?: ReactNode;
  footer?: ReactNode;
  blockScrollOnMount?: boolean;
  size?: ModalSize;
  isOpen: boolean;
  onClose: () => void;
}
