import pandaPreset from "@pandacss/preset-panda";
import { defineConfig } from "@pandacss/dev";

// =================================================================
import { tokens } from "./tokens";
import { globalCss } from "./global-css";

export const edmPandaPreset = defineConfig({
  presets: [pandaPreset],
  globalCss,
  theme: {
    extend: {
      tokens,
    },
  },
});
