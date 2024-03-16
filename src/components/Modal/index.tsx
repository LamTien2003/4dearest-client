import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

import { ModalProps, ModalSize } from "./Modal.d";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  closeButton: {
    fontSize: "1.4rem",
    top: "2%",
    right: "2%",
  },
});

const sm = defineStyle({
  width: "32rem",
});
const md = defineStyle({
  width: "48rem",
});
const lg = defineStyle({
  width: "62rem",
});
const xl = defineStyle({
  width: "76rem",
});
const xxl = defineStyle({
  width: "90rem",
});
const auto = defineStyle({
  maxWidth: "fit-content",
});
const sizes = {
  sm: definePartsStyle({ dialog: sm }),
  md: definePartsStyle({ dialog: md }),
  lg: definePartsStyle({ dialog: lg }),
  xl: definePartsStyle({ dialog: xl }),
  auto: definePartsStyle({ dialog: auto }),
  ["2xl"]: definePartsStyle({ dialog: xxl }),
};

export const modalTheme = defineMultiStyleConfig({
  sizes,
  baseStyle,
});

const Modal = ({
  isOpen,
  onClose,
  title,
  footer,
  size = ModalSize.Medium,
  blockScrollOnMount = true,
  children,
}: ModalProps) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={blockScrollOnMount}
      isCentered
      scrollBehavior="outside"
      size={size}
    >
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalCloseButton />
        {children}
        {footer && <ModalFooter>{title}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
