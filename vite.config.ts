import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/new/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        careers: path.resolve(__dirname, "join-us.html"),
        // Add more pages here as needed
      },
    },
  },
});
