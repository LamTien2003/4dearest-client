interface PaypalStyles {
  color?: "blue" | "silver" | "white" | "black" | "gold";
  disableMaxWidth?: boolean;
  height?: number;
  label?:
    | "paypal"
    | "checkout"
    | "buynow"
    | "pay"
    | "installment"
    | "subscribe"
    | "donate";
  layout?: "vertical" | "horizontal";
  shape?: "rect" | "pill";
  tagline?: boolean;
}

export interface PaypalButtonsProps {
  style?: PaypalStyles;
  className?: string;
  forceReRender?: any;
  onClick?: (
    data: Record<string, unknown>,
    actions: OnClickActions
  ) => void | Promise<void> | undefined;
  createOrder: () => any;
  onApprove: (data: any) => any;
}
