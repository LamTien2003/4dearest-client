import { NavBarOption } from "@/components/Header/Navbar/Navbar.d";

export const navbarOptions: NavBarOption[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Candles",
    href: "/product?category=candles",
    children: [
      {
        title: "All Candles",
        href: "/product?category=candles",
      },
      {
        title: "Scented Candles",
        href: "/product?category=scented-candles",
      },
      {
        title: "All Candles 3",
        href: "/product?category=candles",
      },
      {
        title: "All Candles 4",
        href: "/product?category=candles",
      },
    ],
  },
  {
    title: "Home Decor",
    href: "/product?category=home-decor",
    children: [
      {
        title: "All Product",
        href: "/product?category=home-decor",
      },
      {
        title: "Light",
        href: "/product?category=light",
      },
      {
        title: "All Candles 3",
        href: "/product?category=home-decor",
      },
      {
        title: "All Candles 4",
        href: "/product?category=home-decor",
      },
    ],
  },
  {
    title: "Accessories",
    href: "/product?category=accessories",
    children: [
      {
        title: "All Candles",
        href: "/product?category=candles",
      },
      {
        title: "Scented Candles",
        href: "/product?category=scented-candles",
      },
      {
        title: "All Candles 3",
        href: "/product?category=candles",
      },
      {
        title: "All Candles 4",
        href: "/product?category=candles",
      },
    ],
  },
  {
    title: "Gifts",
    href: "/product?category=candles",
    children: [
      {
        title: "All Candles",
        href: "/product?category=candles",
      },
      {
        title: "Scented Candles",
        href: "/product?category=scented-candles",
      },
      {
        title: "All Candles 3",
        href: "/product?category=candles",
      },
      {
        title: "All Candles 4",
        href: "/product?category=candles",
      },
    ],
  },
];
