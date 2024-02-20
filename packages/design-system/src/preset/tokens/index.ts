import { defineTokens } from "@pandacss/dev";

// =================================================================
import { colors } from "./colors";
import { fonts } from "./fonts";
import { radii } from "./radii";
import { fontSizes } from "./font-sizes";
import { lineHeights } from "./line-heights";

export const tokens = defineTokens({
  colors,
  fonts,
  radii,
  fontSizes,
  lineHeights,
});
