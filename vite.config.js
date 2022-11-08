import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, "src/lib.ts"),
      name: "my-ui-lib",
      fileName: "my-ui-lib",
    },
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "es",
          exports: "named",
          globals: { vue: "vue" },
        },
      ],
    },
    commonjsOptions: {
      esmExternals: true,
    },
  },
});
