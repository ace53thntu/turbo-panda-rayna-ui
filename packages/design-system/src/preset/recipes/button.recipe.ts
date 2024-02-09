import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",

  base: {
    display: "inline-flex",
  },

  variants: {
    variant: {
      primary: {
        bg: "primary.500",
      },
    },
    size: {
      sm: {
        px: "4",
        py: "2",
      },
      lg: {
        padding: "8",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});
