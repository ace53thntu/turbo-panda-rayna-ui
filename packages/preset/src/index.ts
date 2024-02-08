import pandaPreset from "@pandacss/preset-panda";
import { defineConfig } from "@pandacss/dev";

// =================================================================
import { tokens } from "./tokens";

export const edmPandaPreset = defineConfig({
  presets: [pandaPreset],
  theme: {
    extend: {
      tokens,
    },
  },
});
