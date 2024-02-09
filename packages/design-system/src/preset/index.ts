import pandaPreset from "@pandacss/preset-panda";
import { defineConfig } from "@pandacss/dev";

// =================================================================
import { tokens } from "./tokens";
import { globalCss } from "./global-css";
import { recipes } from "./recipes";

export const edmPandaPreset = defineConfig({
  presets: [pandaPreset],
  globalCss,
  theme: {
    extend: {
      tokens,
      recipes,
    },
  },
});
