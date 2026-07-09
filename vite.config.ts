import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// For GitHub Pages: set BASE_PATH=/repo-name/ and STATIC_BUILD=1 in the workflow.
// Static builds disable Nitro (no server deploy target) and turn on TanStack
// Start's SPA mode, which prerenders a client-side shell to
// dist/client/_shell.html. The workflow renames that to index.html and
// publishes dist/client/ as the Pages site.
const basePath = process.env.BASE_PATH || "/";
const isStaticBuild = process.env.STATIC_BUILD === "1";

export default defineConfig({
  vite: {
    base: basePath,
  },
  ...(isStaticBuild ? { nitro: false as const } : {}),
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
