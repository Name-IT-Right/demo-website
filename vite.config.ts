import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // change base for Github Pages hosting on production builds
  base: command === 'build' ? '/website/' : '/',
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/test/setup.ts',
  //   // you might want to disable it, if you don't have tests that rely on CSS
  //   // since parsing CSS is slow
  //   // css: true,
  // },
}));