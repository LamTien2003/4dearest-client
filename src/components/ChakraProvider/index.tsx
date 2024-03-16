"use client";
import {
  ChakraProvider as ChakraProviderOriginal,
  extendTheme,
} from "@chakra-ui/react";

import { drawerTheme } from "@/components/Drawer";
import { inputTheme } from "@/components/Input";
import { modalTheme } from "@/components/Modal";
import { tabsTheme } from "@/components/Tabs";
import {
  COLOR_PRIMARY_100,
  COLOR_PRIMARY_200,
  COLOR_PRIMARY_300,
  COLOR_PRIMARY_400,
  COLOR_PRIMARY_500,
  COLOR_PRIMARY_600,
  COLOR_PRIMARY_700,
  COLOR_PRIMARY_800,
  COLOR_PRIMARY_900,
} from "@/constants/color";
import { radioTheme } from "@/components/RadioCardGroup";

const theme = extendTheme({
  colors: {
    brand: {
      50: COLOR_PRIMARY_100,
      100: COLOR_PRIMARY_100,
      200: COLOR_PRIMARY_200,
      300: COLOR_PRIMARY_300,
      400: COLOR_PRIMARY_400,
      500: COLOR_PRIMARY_500,
      600: COLOR_PRIMARY_600,
      700: COLOR_PRIMARY_700,
      800: COLOR_PRIMARY_800,
      900: COLOR_PRIMARY_900,
    },
  },
  components: {
    Drawer: drawerTheme,
    Modal: modalTheme,
    Tabs: tabsTheme,
    Input: inputTheme,
    Radio: radioTheme,
  },
});

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProviderOriginal
      theme={theme}
      toastOptions={{ defaultOptions: { position: "top", duration: 2000 } }}
    >
      {children}
    </ChakraProviderOriginal>
  );
}
