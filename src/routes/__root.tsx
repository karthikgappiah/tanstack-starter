// ------------------------------- [ Root Layout ] --------------------------------
// [ Location ]: ~/src/routes/__root.tsx
// [ Purpose  ]: To wrap all other routes in this application.
// --------------------------------------------------------------------------------

/// <reference types="vite/client" />

import type { ReactNode } from "react";

import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import theme from "../styles/theme.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Starter",
      },
    ],
    links: [{ rel: "stylesheet", href: theme }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
