# Project Rules & Development Harness

## Tech Stack
- **Runtime & Test Runner:** Node.js v18+ (using built-in `node --test`)
- **Language:** Plain JavaScript (ES Modules, `"type": "module"`)
- **CI:** GitHub Actions (runs automatically on push to `main`)

## Verification Commands
- `npm test`: Run test suite locally
- `npm run format:check`: Check code formatting using Prettier
- `npm run format:write`: Automatically format code using Prettier

## Constraints & Guidelines
- **NEVER** add dependencies to runtime code (src/cart.js, test/); devDependencies such as Prettier are allowed.
- **NEVER** return prices as formatted strings (e.g., using `.toFixed()`); always return a rounded integer `number`.
- **NEVER** ignore or silence RangeError exceptions for negative prices or non-integer quantities.
- **Before every push:** `npm ci && npm run format:check && npm test` must pass. CI runs the same gate.