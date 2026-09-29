# AI-LOG.md — CSC13008

```md 
## 2026-09-29 — Harness setup & Project rules
Tool: Gemini
Asked for: Generate `RULES.md` based on assignment specifications and rubric.
Kept: Rules format, verification commands (`npm test`), and core "NEVER" guidelines.
Changed: Updated tech stack to use Node.js v18+ built-in test runner (`node --test`), ES Modules (`"type": "module"`), GitHub Actions CI, and explicitly defined RangeError rules for non-integer quantities.
Rejected: Jest framework dependency reference.
By hand: Ran initial `npm test` gate to confirm failure state (RED).
```