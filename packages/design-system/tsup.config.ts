import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  external: ["react", "react-dom"],
  format: ["esm", "cjs"],
  dts: true,
});
