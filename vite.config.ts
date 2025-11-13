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
        howWeWork: path.resolve(__dirname, "how-we-work.html"),
        careers: path.resolve(__dirname, "join-us.html"),
        contact: path.resolve(__dirname, "contact.html"),
        position: path.resolve(__dirname, "position.html"),
        // Add more pages here as needed
      },
    },
  },
});
