import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Set BASE_PATH and STATIC_BUILD=1 in the GitHub Actions workflow to output
// a static SPA build for GitHub Pages. Inside Lovable those envs are unset,
// so the app builds normally against the Cloudflare preset.
const basePath = process.env.BASE_PATH || "/";
const isStaticBuild = process.env.STATIC_BUILD === "1";
const routerBasepath = basePath === "/" ? "/" : basePath.replace(/^\/+|\/+$/g, "");

export default defineConfig({
  vite: {
    base: basePath,
  },
  ...(isStaticBuild
    ? {
        nitro: { preset: "static" as const },
        tanstackStart: {
          router: { basepath: routerBasepath },
          server: { entry: "server" },
          prerender: { enabled: true, crawlLinks: true },
          pages: [{ path: "/" }],
        },
      }
    : {
        tanstackStart: {
          server: { entry: "server" },
        },
      }),
});
