import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// For GitHub Pages, set BASE_PATH and STATIC_BUILD=1 in the workflow.
// This turns on TanStack Start's SPA mode, which prerenders a single
// client-side shell at BASE_PATH/index.html — perfect for static hosts.
const basePath = process.env.BASE_PATH || "/";
const isStaticBuild = process.env.STATIC_BUILD === "1";

export default defineConfig({
  vite: {
    base: basePath,
  },
  tanstackStart: {
    server: { entry: "server" },
    ...(isStaticBuild
      ? {
          spa: { enabled: true, maskPath: "/" },
          pages: [{ path: "/" }],
        }
      : {}),
  },
});
