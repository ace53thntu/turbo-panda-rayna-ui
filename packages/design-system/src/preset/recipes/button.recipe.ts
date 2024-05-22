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
    color: "neutral.shades.white",

    _focusVisible: {
      outline: "none",
    },

    _disabled: {
      cursor: "not-allowed",
    },
  },

  variants: {
    variant: {
      solid: {
        bg: "primary.500",
        _hover: {
          bg: "primary.400",
        },
        _focus: {
          bg: "primary.700",
        },
        _disabled: {
          bg: "gray.300",
          _hover: {
            bg: "gray.300",
          },
        },
      },
      outline: {
        // bg: "neutral.shades.white",
        // borderStyle: "solid",
        // borderWidth: 1.5,
        // borderColor: "primary.600",
        // color: "primary.600",
        // _hover: {
        //   bg: "primary.50",
        // },
        // _focus: {
        //   borderWidth: 2,
        //   bg: "primary.50",
        //   color: "primary.700",
        //   borderColor: "primary.700",
        // },
        // _disabled: {
        //   borderWidth: 2,
        //   bg: "neutral.shades.white",
        //   borderColor: "gray.100",
        //   color: "gray.400",
        //   _hover: {
        //     bg: "neutral.shades.white",
        //   },
        // },
      },
      ghost: {
        bg: "transparent",
      },

      grey: {
        bg: "gray.500",
        _hover: {
          bg: "gray.700",
        },
        _focus: {
          bg: "gray.900",
        },
        _disabled: {
          bg: "gray.300",
          _hover: {
            bg: "gray.300",
          },
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
    colorScheme: {
      primary: {
        // bg: "primary.500",
        // _hover: {
        //   bg: "primary.400",
        // },
        // _focus: {
        //   bg: "primary.700",
        // },
        // _disabled: {
        //   bg: "gray.300",
        //   _hover: {
        //     bg: "gray.300",
        //   },
        // },
      },
      secondary: {
        // borderColor: "primary.600",
        // color: "primary.600",
        // _hover: {
        //   bg: "primary.50",
        // },
        // _focus: {
        //   bg: "primary.50",
        //   color: "primary.700",
        //   borderColor: "primary.700",
        // },
        // _disabled: {
        //   bg: "neutral.shades.white",
        //   borderColor: "gray.100",
        //   color: "gray.400",
        //   _hover: {
        //     bg: "neutral.shades.white",
        //   },
        // },
      },
      destructive: {
        bg: "semantics.error.500",
        _hover: {
          bg: "semantics.error.300",
        },
        _focus: {
          bg: "semantics.error.700",
        },
        _disabled: {
          bg: "gray.300",
          _hover: {
            bg: "gray.300",
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      variant: "outline",
      colorScheme: "primary",
      css: {
        border: "2px solid blue",
      },
    },
  ],

  defaultVariants: {
    variant: "solid",
    size: "sm",
    colorScheme: "primary",
  },

  jsx: ["Button"],
});
