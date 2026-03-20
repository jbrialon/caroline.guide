import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "~@": path.resolve(__dirname, "/src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: ["import", "global-builtin", "if-function", "color-functions"],
        loadPaths: [
            path.resolve(__dirname, "src/styles"),
            path.resolve(__dirname, "node_modules"),
          ],
      },
    },
  },
  plugins: [vue()],
});
