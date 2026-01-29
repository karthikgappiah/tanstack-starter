// ------------------------------- [ Landing Page ] -------------------------------
// [ Location ]: ~/src/routes/index.tsx
// [ Purpose  ]: To market this application's core value proposition.
// --------------------------------------------------------------------------------

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <main className='h-screen flex items-center justify-center'>
      <div>{"Sorry, this website is under construction!"}</div>
    </main>
  )
}
