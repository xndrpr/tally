import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        port: 3000,
    },
    base: "/",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@widgets": path.resolve(__dirname, "src/widgets"),
            "@shared": path.resolve(__dirname, "src/shared"),
        },
    },
});
