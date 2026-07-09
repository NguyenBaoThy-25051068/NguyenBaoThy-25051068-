import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const routerBasepath = (() => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const normalized = baseUrl.replace(/\/$/, "");
  return normalized || "/";
})();

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath: routerBasepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
