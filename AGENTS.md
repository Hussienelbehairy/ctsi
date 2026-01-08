# AGENTS.md

## Project Overview

Cut To Size Interiors website - A Next.js 15 marketing site with TypeScript, Tailwind CSS, and Motion for animations.

## Package Manager

**Always use `pnpm`** (not npm or yarn)
- Install: `pnpm install`
- Run dev server: `pnpm dev`
- Build: `pnpm build`
- Start production: `pnpm start`

## Linting & Type Checking

- Lint: `pnpm lint` (ESLint with Next.js rules)
- Type checking: Not configured - check with TypeScript compiler if needed: `npx tsc --noEmit`

## Testing

No test framework is currently configured. When adding tests:
- Choose Jest, Vitest, or React Testing Library
- Add test script to package.json
- Update this file with single test command

## Code Style Guidelines

### Imports

- Path alias `@/*` maps to `./src/*` (defined in tsconfig.json)
- Type imports use `import { type ... }` pattern
- Group imports: React/types → third-party → local components
- Example:
  ```tsx
  import type { Metadata } from "next";
  import { useState, type FormEvent } from "react";
  import { Button } from "@/components/ui/button";
  ```

### Component Structure

- **Server Components**: Default (no "use client" directive)
- **Client Components**: Add `"use client";` at the very top when using hooks/event handlers
- **Default Exports**: Use `export default function ComponentName()`
- **Named Exports**: Use for utilities, types, and reusable components
- **File Naming**: kebab-case for components (`hero-section.tsx`), PascalCase for React files

### TypeScript

- **Strict mode enabled**: `strict: true` in tsconfig.json
- **Type definitions**: Use interfaces or type aliases for component props and data structures
- **Event handlers**: Type explicitly: `React.ChangeEvent<HTMLInputElement>`, `React.FormEvent<HTMLFormElement>`
- **Status types**: Use union types for state management: `"idle" | "loading" | "success" | "error"`
- **ESLint exceptions**: `no-explicit-any`, `no-unused-vars`, `no-empty-object-type` are disabled in eslint.config.mjs

### Styling with Tailwind

- **Utility function**: Use `cn()` from `@/lib/utils` to merge Tailwind classes (combines clsx + tailwind-merge)
- **Responsive design**: Mobile-first: `md:`, `lg:`, `xl:` breakpoints
- **Spacing**: Use standard spacing scale: `px-6`, `py-16`, `gap-8`
- **Typography**: `text-balance` for line wrapping, text colors from `foreground`, `muted-foreground`
- **Animation**: Use Motion primitives from `@/components/motion-primitives` or `motion/react` directly

### Component Patterns

- **Forms**: Use controlled inputs with useState
- **API calls**: Use fetch with try/catch, handle loading/error/success states
- **Icons**: Import from `lucide-react`, use consistent sizing: `size-4`, `size-5`, `size-6`
- **Images**: Use `next/image` with proper width, height, and loading attributes
- **Accessibility**: Include ARIA labels on interactive elements: `aria-label`, `aria-modal`, `role`
- **Links**: Use `next/link` for internal navigation

### Naming Conventions

- **Components**: PascalCase (`HeroSection`, `ContactForm`)
- **Functions**: camelCase (`handleSubmit`, `handleChange`)
- **Constants**: SCREAMING_SNAKE_CASE or camelCase for local constants
- **Types/Interfaces**: PascalCase (`FormData`, `ContactResponse`)
- **File names**: kebab-case (`portfolio-card.tsx`, `contact-form.tsx`)

### Error Handling

- **API routes**: Return JSON with appropriate status codes and error messages
- **Client-side**: Try/catch blocks, set error state, display user-friendly messages
- **Validation**: Use HTML5 validation (`required`, `type`, `pattern`) + server-side checks
- **Logging**: Use `console.error()` for API errors with descriptive messages

### File Organization

```
src/
├── app/              # Next.js App Router (pages, API routes, layouts)
├── components/
│   ├── ui/          # shadcn/ui base components
│   ├── sections/    # Page sections (hero, about, etc.)
│   └── motion-primitives/ # Reusable animation components
├── content/         # Static data/content (portfolio, services, etc.)
├── hooks/           # Custom React hooks
└── lib/             # Utilities (cn function, helpers)
```

### State Management

- **Local state**: React `useState` for component-level state
- **Form state**: Object-based with explicit type: `useState({ name: "", phone: "" })`
- **Status tracking**: Union type pattern: `"idle" | "loading" | "success" | "error"`
- **No global state**: Currently no Redux/Zustand - use React Context if needed

### Code Quality

- **Comment sparsely**: Only explain complex logic or business rules
- **Keep components focused**: Single responsibility, extract if >300 lines
- **Avoid prop drilling**: Use Context or composition for deeply nested state
- **Type everything**: Leverage TypeScript's strict mode for better DX
- **Environment variables**: Access via `process.env.VAR_NAME`, include in `.env.local` (not committed)

## Available Scripts

```bash
pnpm dev              # Start dev server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
```

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI (via shadcn/ui)
- **Animations**: Motion (motion.dev)
- **Icons**: Lucide React
- **Package Manager**: pnpm
