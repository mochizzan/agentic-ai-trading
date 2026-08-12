# Onboarding Guide: Agentic AI Trading

## Overview
Platform trading berbasis agen AI untuk analisis pasar dan eksekusi otomatis. Proyek ini dibangun menggunakan SvelteKit dengan TypeScript.

## Tech Stack
| Layer | Technology | Version |
|-------|-----------|---------|
| Language | TypeScript | 6.x |
| Framework | SvelteKit | 2.63.x |
| UI Framework | Svelte | 5.56.x |
| Build Tool | Vite | 8.x |
| Testing | svelte-check | 4.6.x |
| Adapter | @sveltejs/adapter-auto | 7.x |

## Architecture
Frontend-only SvelteKit application dengan struktur routing convention-based. Menggunakan Svelte 5 runes mode untuk state management.

```
src/
├── routes/          # SvelteKit routing (pages +layout.svelte, +page.svelte)
├── lib/             # Shared libraries
├── app.d.ts         # TypeScript declarations
└── app.html         # HTML template
```

### Deployment Architecture
| Environment | Platform | Container | Notes |
|-------------|----------|-----------|-------|
| Development | Windows 10 | - | Native npm/vite development |
| Production | Docker | Node.js | Containerized deployment |

## Key Entry Points
- **Pages**: `src/routes/+page.svelte` — homepage
- **Layout**: `src/routes/+layout.svelte` — app shell dengan favicon
- **Config**: `vite.config.ts` — build configuration
- **Types**: `src/app.d.ts` — TypeScript type declarations

## Directory Map
| Directory | Purpose |
|-----------|---------|
| `src/routes/` | SvelteKit route handlers (pages) |
| `src/lib/` | Shared utilities dan components |
| `src/` | Source code |
| `static/` | Static assets |
| `.svelte-kit/` | Generated SvelteKit files |
| `.codegraph/` | Code knowledge graph |
| `.serena/` | MCP Serena index |

## Request Lifecycle
1. User navigates ke URL → SvelteKit router menangkap
2. SvelteKit load function di `+page.ts` (jika ada) dieksekusi
3. Component di `+page.svelte` dirender
4. Layout `+layout.svelte` menyediakan shell dengan favicon

## Conventions
- **File naming**: Kebab-case untuk routes (`+page.svelte`, `+layout.svelte`)
- **Component naming**: PascalCase
- **TypeScript**: Strict mode aktif
- **State management**: Svelte 5 runes (`$props()`, reactive declarations)
- **CSS**: Scoped component styles (Svelte style tag)

## Common Tasks
- **Run dev server**: `npm run dev`
- **Build production**: `npm run build`
- **Preview build**: `npm run preview`
- **Type check**: `npm run check`
- **Type check watch**: `npm run check:watch`

## Development Environment

### Windows 10 (Development)
```
OS: Windows 10 Pro
Node.js: Latest LTS
npm: Latest
```

**Setup:**
```bash
npm install
npm run dev
```

**Development commands:**
- `npm run dev` — Start dev server (localhost:5173)
- `npm run dev -- --open` — Start and open in browser
- `npm run check` — Type check
- `npm run check:watch` — Type check with watch mode

### Docker (Production)

**Build image:**
```bash
docker build -t agentic-ai-trading .
```

**Run container:**
```bash
docker run -p 3000:3000 agentic-ai-trading
```

**Dockerfile** (create in project root):
```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001
COPY --from=builder /app/.svelte-kit .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/static ./static
RUN chown -R nextjs:nodejs /app
USER nextjs
EXPOSE 3000
CMD ["node", ".svelte-kit/output/server/index.js"]
```

## Where to Look
| I want to... | Look at... |
|--------------|-----------|
| Add a new page | `src/routes/+page.svelte` |
| Add layout | `src/routes/+layout.svelte` |
| Shared utilities | `src/lib/` |
| Change build config | `vite.config.ts` |
| TypeScript types | `src/app.d.ts` |

## MCP Integration
Proyek ini menggunakan Codebase Memory MCP dan CodeGraph untuk code intelligence:
- **CodeGraph**: `codegraph_explore` untuk khámorsi kode
- **Codebase Memory**: `search_graph`, `trace_path`, `get_architecture`
- **Serena**: Symbol-based code intelligence

---

# Project Instructions

## Tech Stack
TypeScript 6.x dengan SvelteKit 2.63.x dan Svelte 5.56.x

## Code Style
- Svelte 5 runes mode (`$props()`, `$state()`, dll)
- Strict TypeScript dengan `rewriteRelativeImportExtensions`
- PascalCase untuk components, kebab-case untuk routes

## Testing
- Type check: `npm run check`
- Watch mode: `npm run check:watch`

## Build & Run

### Local Development (Windows)
- Dev: `npm run dev`
- Preview: `npm run preview`
- Build: `npm run build`

### Production (Docker)
- Build: `docker build -t agentic-ai-trading .`
- Run: `docker run -p 3000:3000 agentic-ai-trading`

## Project Structure
```
src/routes/     # SvelteKit pages
src/lib/        # Shared libraries
static/         # Static assets
```

## Conventions
- Commit style: Conventional Commits (dari AGENTS.md)
- Error handling: try/catch atau throw untuk runtime errors
- Async patterns: async/await

## Git Workflow
- Branch naming: From git convention detection
- PR workflow: Standard GitHub flow
