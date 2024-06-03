import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  name: "reaviz-data-utils",
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  bundle: true,
  clean: true,
}));
