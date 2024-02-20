import { defineRecipe } from "@pandacss/dev";

export const h1 = defineRecipe({
  className: "h1",
  description: "Typography - h1 style",

  base: {
    textStyles: "h1",
  },
});
