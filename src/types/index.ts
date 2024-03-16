export const ShippingType = {
  standard: "Standard Shipping",
  secured: "Secured Shipping",
  freeShipping: "Free Shipping",
};

export interface ProductVariant {
  sku: string;
  size: string;
  color: {
    label: string;
    colorCode: string;
  };
  initialPrice: number;
  discountPrice: number;
  inventory: number;
  soldItems: number;
  indexImageDisplay: number;
}
export interface Product {
  _id: string;
  category: {
    categoryName: string;
    href: string;
    _id: string;
  };
  title: string;
  subTitle: string;
  description: string;
  imagesProduct: string[];
  additionalInfo: Object;
  variants: ProductVariant[];
  tags: string[];
  slug: string;
  price: number;
  sold: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ProductPayload {
  product_id: string;
  product_name: string;
  variants: {
    image: string;
    sku: string;
    amount: number;
    price: number;
    color: {
      label: string;
      colorCode: string;
    };
  }[];
}
export interface ShippingMethodPayload {
  type: string;
  country: string;
}

export interface Category {
  _id: string;
  categoryName: string;
  categoryImage: string;
  amountProducts: number;
  slug: string;
}

export interface CartStorage {
  _id: string;
  variants: {
    amount: number;
    color: string;
    sku: string;
  }[];
}

export interface CartItem {
  _id: string;
  title: string;
  subTitle: string;
  slug: string;
  imagesProduct: string[];
  variants: (ProductVariant & {
    buyAmount: number;
  })[];
}

export interface ShippingMethod {
  shippingType: string;
  shippingFee: number;
  estimateStartDay: string;
  estimateEndDay: string;
}

export interface Coupon {
  _id: string;
  couponName: string;
  couponCode: string;
  couponDescription: string;
  startDate: string;
  endDate: string;
  quantity: number;
  isActive: boolean;
  conditions: {
    minTotalPricePayment: number;
    maxTotalPricePayment: number;
    productsForUse: string[];
  };
  effects: {
    applyTo: string;
    type: string;
    discountPercent: number;
    discountAmount: number;
    maximumDiscount: number;
  };
}
