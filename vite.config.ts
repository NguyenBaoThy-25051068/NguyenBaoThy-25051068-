import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// For GitHub Pages: set BASE_PATH=/repo-name/ and STATIC_BUILD=1 in the workflow.
// Static builds disable Nitro (no server deploy target) and turn on TanStack
// Start's SPA mode, then the GitHub workflow copies the generated shell to
// dist/client/index.html so GitHub Pages always has a root file to serve.
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
