import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "~@": path.resolve(__dirname, "/src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/additionalData.scss";`,
      },
    },
  },
  plugins: [vue()],
};
