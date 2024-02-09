import { defineConfig } from "@pandacss/dev";
import { edmPandaPreset } from "@edm/design-system";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./node_modules/@edm/design-system/src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
  emitPackage: true,

  presets: [edmPandaPreset],

  jsxFramework: "react",
});
