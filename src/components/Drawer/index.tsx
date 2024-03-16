import {
  Drawer as ChakraDrawer,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerFooter,
} from "@chakra-ui/react";
import { drawerAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

import { COLOR_GRAY_300, COLOR_GRAY_600 } from "@/constants/color";

import {
  DrawerPlacement,
  DrawerProps,
  DrawerSize,
} from "@/components/Drawer/Drawer.d";
import styles from "./Drawer.module.css";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);
const baseStyle = definePartsStyle({
  dialog: {
    justifyContent: "space-between",
    borderRadius: "md",
    bg: COLOR_GRAY_300,
    overflowY: "scroll",
  },
  closeButton: {
    top: "1.5rem",
    fontSize: "1.2rem",
  },
  footer: {
    borderTop: `1px solid ${COLOR_GRAY_600}`,
    justifyContent: "normal",
  },
  body: {},
});

export const drawerTheme = defineMultiStyleConfig({
  baseStyle,
});

const Drawer = ({
  placement = DrawerPlacement.Left,
  size = DrawerSize.Medium,
  isOpen,
  onClose,
  children,
  title,
  footer,
  fixedFooter,
}: DrawerProps) => {
  return (
    <ChakraDrawer
      placement={placement}
      size={size}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={styles["drawer"]}>
        <DrawerOverlay />
        <DrawerContent borderTopWidth="1px">
          {title && (
            <DrawerHeader borderBottomWidth="1px">{title}</DrawerHeader>
          )}
          {!!onClose && <DrawerCloseButton size="lg" />}
          <div className={styles["content"]}>{children}</div>
          {footer && (
            <DrawerFooter
              __css={
                fixedFooter
                  ? { position: "fixed", bottom: 0, left: 0, right: 0 }
                  : {}
              }
            >
              {footer}
            </DrawerFooter>
          )}
        </DrawerContent>
      </div>
    </ChakraDrawer>
  );
};

export default Drawer;
