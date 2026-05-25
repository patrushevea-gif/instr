# Instr

Browser-first internal toolbox for a manufacturing company.

## What is inside

- Clean Russian-language catalog with 24 topics and 415 working tools.
- Compact interface: category menu, search, workbench, and tool list.
- Every tool opens in the browser workbench and produces a usable result.
- Supported modes: tables, documents, calculators, checklists, registers, comparison, conversion, parsing, text processing, security helpers, AI prompts, and media workflows.
- Vercel-ready static deployment.

## Local run

```powershell
node server.js
```

Open `http://localhost:4173`.

## Vercel

This repository does not require a build step. Vercel can deploy it as a static project from the repository root.

Recommended project settings:

- Framework Preset: Other
- Build Command: empty
- Output Directory: `.`
- Install Command: empty

## Extension policy

Core modules should stay browser-first where practical. Heavy tools can be added later as optional Vercel Functions or separate internal services.
