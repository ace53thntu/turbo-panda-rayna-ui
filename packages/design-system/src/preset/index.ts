import pandaPreset from "@pandacss/preset-panda";
import { defineConfig } from "@pandacss/dev";

// =================================================================
import { tokens } from "./tokens";
import { globalCss } from "./global-css";
import { recipes } from "./recipes";
import { utilities } from "./utilities";
import { textStyles } from "./text-styles";

export const edmPandaPreset = defineConfig({
  presets: [pandaPreset],
  globalCss,
  theme: {
    extend: {
      tokens,
      recipes,
      textStyles,
    },
  },
  utilities,
});
