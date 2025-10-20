import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import os from "os";

// Vite cache goes to system temp, NOT node_modules/.vite (avoids Dropbox locks)
export default defineConfig({
  plugins: [react()],
  cacheDir: path.join(os.tmpdir(), "ready72-vite-cache"),
});
