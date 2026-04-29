# OhhWells Starter — Vibe Coding Workflow

This starter is built around one decision tenet:

> **The component receives content — it never fetches content.**

That single rule enables the rest: predictable structure, safe handoffs, and a platform-managed content layer.

---

## Prerequisites

Before starting, make sure you have:

- **Node.js 18+** (recommended: latest LTS)
- **npm / pnpm / yarn**
- **Git** (for cloning and version control)
- **OhhWells CLI** (for deployment)

---

### Install OhhWells CLI

If you're using the local repo:

```bash
cd ohhwells-deploy
npm install
npm run build
npm link
