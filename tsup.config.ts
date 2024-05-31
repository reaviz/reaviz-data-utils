import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "reaviz-data-utils",
  entry: ["src/index.tsx", "src/blocks/index.ts"],
  format: ["esm", "cjs"],
  bundle: true,
  clean: true,
  splitting: true,
}));
