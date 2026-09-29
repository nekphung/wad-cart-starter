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

```md 
## 2026-09-29 — Brief setup & Cart Total specifications
Tool: Gemini
Asked for: Generate and refine `brief.md` based on `cartTotal(items, options)` requirements and constraints.
Kept: Function contract, core specifications (`subtotal`, `VAT`, `shipping`, rounding to whole đồng), and allowed files restriction (`src/cart.js`).
Changed: Standardized field naming to `qty` (replacing `quantity`), clarified `RangeError` conditions for non-positive or non-integer quantities (`qty <= 0 || !Number.isInteger(qty)`), and renamed exception section to "Error Cases".
Rejected: External framework/library dependencies (Jest, Lodash) to enforce plain JavaScript constraint.
By hand: Verified specification logic against the worked example (405,000 subtotal + 32,400 VAT + 30,000 shipping = 467,400 total).
```