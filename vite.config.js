import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ Fixed for Vercel deployment
  server: {
    port: 3000,
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/react-fruit-store/", // ✅ Changed for GitHub Pages
//   server: {
//     port: 3000,
//   },
// });
