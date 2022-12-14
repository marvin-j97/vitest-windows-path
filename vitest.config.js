import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: "test-vitest/**/*.spec.js",
    coverage: {
      provider: "istanbul",
      reporter: ["json", "html"],
      reportsDirectory: ".report_vitest",
    },
  },
});
