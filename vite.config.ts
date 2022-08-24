import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import eslint from "vite-plugin-eslint"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    eslint({
      fix: true,
      lintOnStart: true,
      include: [
        "**/*.ts",
        "**/*.js",
        "**/*.svelte",
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
  },
})
