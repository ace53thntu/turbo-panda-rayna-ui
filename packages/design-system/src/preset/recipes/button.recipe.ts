import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
  className: "button",
  description: "The styles for the Button component",

  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    rounded: "base",
    fontWeight: "semibold",
    cursor: "pointer",

    _focusVisible: {
      outline: "none",
    },

    _disabled: {
      cursor: "not-allowed",
    },
  },

  variants: {
    variant: {
      primary: {
        bg: "primary.500",
        color: "neutral.shades.white",

        _disabled: {
          bg: "gray.300",
          _hover: {
            bg: "gray.300",
          },
        },

        _hover: {
          bg: "primary.400",
        },

        _focus: {
          bg: "primary.700",
        },
      },
    },
    size: {
      sm: {
        px: "4",
        py: "2",
        textStyle: "sm",
        lineHeight: "145%",
      },
      lg: {
        padding: "8",
      },
      icon: {
        p: "2",
      },
      iconLarge: {
        p: "4",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});
