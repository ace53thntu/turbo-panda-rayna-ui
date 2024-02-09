import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  external: ["react", "react-dom", "@pandacss/dev", "styled-system"],
  format: ["esm"],
  dts: true,
});
