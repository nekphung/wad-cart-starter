# Self-assessment — IA#1

Submitted by: 24120416 — Đoàn Thế Phùng

Total I claim: 100 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | `src/cart.js:3-5` returns `0` for empty/non-array items; `src/cart.js:15-19` throws `RangeError` on `price < 0`; `src/cart.js:22-26` throws `RangeError` when `!Number.isInteger(qty) \|\| qty <= 0`; `src/cart.js:31-32` applies VAT and inclusive free-shipping threshold; `src/cart.js:34` returns `Math.round()` as integer number. Worked example passes (405,000 subtotal + 32,400 VAT + 30,000 ship = 467,400). Verified in commits `9ae339a` and `28e4cc8`. |
| Tests | 20 | 20 | `npm test` → 6/6 pass using `node --test`. Each test asserts 1 behavior: worked example (`test/cart.test.js:8`), empty cart (`test/cart.test.js:18`), free-shipping threshold (`test/cart.test.js:26`), negative price `RangeError` (`test/cart.test.js:34`), zero quantity `RangeError` (`test/cart.test.js:42`), non-integer quantity `RangeError` (`test/cart.test.js:50`). Verified in commits `1a09ed0` and `f54f976`. |
| Harness | 20 | 20 | `RULES.md` defines stack, 3 NEVER rules, and pre-push gate `npm ci && npm run format:check && npm test`. `.github/workflows/ci.yml` enforces same gate on push/PR to `main`. Local `npm run format:check` reports code matches Prettier style. Verified in commits `a395a0d`, `31fa7fb`, `5b3502c`, `a15e354`, and `e8fb4e9`. |
| Brief | 15 | 15 | `BRIEF.md` specifies allowed files (`src/cart.js`, `test/`), core formula (`Total = Math.round(Subtotal + VAT + Shipping)`), rounding rules, dedicated Error Cases section for `RangeError`, and zero runtime dependency constraint. Verified in commits `750b93d` and `9de326c`. |
| AI-LOG.md | 15 | 15 | `AI-LOG.md` contains 9 dated entries with explicit Kept / Changed / Rejected / By hand lines. Concrete rejections listed (Jest, Lodash, `npm install` in CI). Hand-written tasks logged under `Tool: None` (Prettier setup, validation refactor, pre-push gate, CI docs). |

## What I did not manage
- **Static Analysis & Code Coverage:** Did not implement ESLint or code coverage tools. Untested default parameter fallback branches (`options = {}`) exist in `src/cart.js`.
- **Branch Protection & GitHub Enforcement:** CI runs on push/PR, but branch protection on `main` was not enabled on GitHub; rules were enforced manually by convention.
- **Git Workflow & Commit Quality:** All commits were pushed directly to `main` without Pull Requests, peer code reviews, or automated commitlint rules.
- **Tooling Configuration Scope:** No `.prettierrc` config file was committed, and `format:check` only targets JavaScript files rather than Markdown or YAML files.
- **Documentation Alignment:** `README.md` was left as starter code rather than updated alongside `RULES.md` and `BRIEF.md`.

## What I would do differently
- Set up feature branches and Pull Requests from day one with GitHub Branch Protection enabled to prevent direct pushes to `main`.
- Add an explicit `.prettierrc` file and expand `format:check` coverage to include Markdown and YAML files.
- Include unit tests covering default parameter fallback logic (`cartTotal(items)`) to ensure 100% line and branch coverage.