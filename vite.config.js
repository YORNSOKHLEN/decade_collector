import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_PORT) || 3000, // Default to 3000 if not set
    historyApiFallback: true, // Fixes React Router page refresh issues
  },
});
