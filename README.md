# Instr

Browser-first internal toolbox for a manufacturing company.

## What is inside

- Menu-based catalog with 24 broad topics and 500+ tool ideas.
- Searchable tool list with statuses: ready, MVP, backlog.
- Working browser-only modules: CSV cleaner, BOM comparer, OEE/takt calculator, Cp/Cpk, Pareto, serial batch CSV, JSON/JWT/Base64/URL tools, text utilities, SHA-256 checksum, GS1 parser.
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
