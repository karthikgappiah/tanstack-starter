// ---------------------------- [ Vite Configuration ] ----------------------------
// [ Location ]: ~/vite.config.ts
// [ Purpose  ]: To build, serve, and bundle the frontend application.
// --------------------------------------------------------------------------------

import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart(),
    viteReact(), // WARNING: tanstackStart must precede viteReact.
    tailwindcss()
  ],
})