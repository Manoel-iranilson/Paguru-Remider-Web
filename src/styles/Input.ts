import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { getColor, mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    color: "#fff",
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _placeholder: {
      color: "#fff",
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
});

const size = {
  lg: defineStyle({
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md",
  }),
  md: defineStyle({
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md",
  }),
  sm: defineStyle({
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm",
  }),
  xs: defineStyle({
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm",
  }),
};

const sizes = {
  lg: definePartsStyle({
    field: size.lg,
    addon: size.lg,
  }),
  md: definePartsStyle({
    field: size.md,
    addon: size.md,
  }),
  sm: definePartsStyle({
    field: size.sm,
    addon: size.sm,
  }),
  xs: definePartsStyle({
    field: size.xs,
    addon: size.xs,
  }),
};

const variantUnstyled = definePartsStyle({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto",
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto",
  },
});

const variants = {
  unstyled: variantUnstyled,
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
  },
});
