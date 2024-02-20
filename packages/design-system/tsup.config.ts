import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  external: ["react", "react-dom", "@pandacss/dev", "styled-system", "react/jsx-runtime"],
  format: ["esm"],
  dts: true,
});
