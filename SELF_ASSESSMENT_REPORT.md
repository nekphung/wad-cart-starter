# SELF_ASSESSMENT_REPORT

- **Student ID:** 24120416
- **Student Name:** Đoàn Thế Phùng
- **Repository Link:** https://github.com/nekphung/wad-cart-starter.git
- **Self-assessed Total Score:** 100/100

| Criterion | Points Claimed | Evidence |
| :--- | :---: | :--- |
| **1. Behaviour** | 30/30 | All specification rules hold. `src/cart.js:3-5` returns `0` for an empty/non-array cart before any VAT or shipping is applied. `src/cart.js:15-19` throws `RangeError` on `price < 0`; `src/cart.js:22-26` throws `RangeError` when `!Number.isInteger(qty) \|\| qty <= 0`. `src/cart.js:31-32` applies `vat = subtotal * vatRate` and `shipping = 0` when `subtotal >= freeShipFrom` (inclusive threshold) else `shipFee`; `src/cart.js:34` returns `Math.round(subtotal + vat + shipping)` as a number, never a formatted string. Verified against the worked example: 405,000 subtotal + 32,400 VAT + 30,000 shipping = **467,400**. Commits `9ae339a` (logic) and `28e4cc8` (validation aligned strictly to spec). |
| **2. Tests** | 20/20 | `npm test` → **6/6 pass, 0 fail** (`node --test`, zero test-framework dependency). Each test asserts exactly one behaviour: worked example `test/cart.test.js:8`, empty cart `test/cart.test.js:18`, free-shipping at threshold `test/cart.test.js:26`, negative price `RangeError` `test/cart.test.js:34`, zero quantity `RangeError` `test/cart.test.js:42`, non-integer quantity `RangeError` `test/cart.test.js:50`. Tests were added incrementally and confirmed RED before implementation. Commits `1a09ed0` and `f54f976`. |
| **3. The harness** | 20/20 | `RULES.md` documents the stack (Node 18+, ES Modules, `node --test`, GitHub Actions), the verification commands (`npm test`, `npm run format:check`, `npm run format:write`), three "NEVER" rules (no runtime dependencies, no formatted-string prices, no swallowing `RangeError`), and the pre-push gate `npm ci && npm run format:check && npm test`. `.github/workflows/ci.yml` runs on push/PR to `main` and enforces that same three-step gate (`npm ci` → `format:check` → `test`); local run of `npm run format:check` reports "All matched files use Prettier code style!". Commits `a395a0d`, `31fa7fb`, `5b3502c`, `a15e354`, `e8fb4e9`. |
| **4. The brief** | 15/15 | `BRIEF.md` states the allowed files (`src/cart.js` only, `test/` may be extended), the core specification as a formula (`Total = Math.round(Subtotal + VAT + Shipping)`) with each term defined separately, rounding to whole đồng, and a dedicated **Error Cases** section naming both `RangeError` triggers. The "no dependencies" constraint is stated in section 4. Verified by hand against the worked example arithmetic. Commits `750b93d`, `9de326c`. |
| **5. AI-LOG.md** | 15/15 | `AI-LOG.md` holds 9 dated entries covering the whole lifecycle. Each entry records the tool used, what was asked for, and explicit **Kept / Changed / Rejected / By hand** lines. Rejected items are named concretely (Jest, Lodash, `npm install` steps), and three entries are logged as `Tool: None` because the work was fully hand-written (Prettier gate, `format:write`, validation refactor, pre-push gate, CI docs). |
| **Total** | **100/100** | Reproduce with: `npm ci && npm run format:check && npm test` |

### What I did not manage (Key Technical Debt)
1. **Static Analysis & Coverage:** Relied solely on `npm test` and Prettier. Did not configure ESLint for static code analysis or run coverage tools (untested default fallback branches remain).
2. **Branch & Pipeline Enforcement:** CI workflow exists, but branch protection on `main` was not enabled. Rules were enforced by convention rather than strict GitHub policy.
3. **Git & Review Workflow:** Committed directly to `main` without PR code reviews or automated commit-linting checks.
4. **Tooling Configuration:** Lacks explicit `.prettierrc` configuration and coverage for `.md`/CI files in `format:check`.
5. **Project Documentation:** `README.md` was not updated to reflect final state changes alongside `RULES.md`.
