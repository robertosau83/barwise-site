// vite.config.ts (ESM)
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

// Config standard per Solid + Vite
export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'esnext',
  },
});