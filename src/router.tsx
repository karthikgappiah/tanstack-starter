// --------------------------- [ Router Configuration ] ---------------------------
// [ Location ]: ~/src/router.tsx
// [ Purpose  ]: To configure the routing behavior of TanStack Router.
// --------------------------------------------------------------------------------

import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
  });

  return router;
}
