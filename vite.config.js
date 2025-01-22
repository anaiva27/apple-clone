import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	base: "/apple-clone/",
	plugins: [react(), sentryVitePlugin({
        org: "anastasia-software",
        project: "javascript-react"
    })],
	build: {
		sourcemap: true,
	},
});