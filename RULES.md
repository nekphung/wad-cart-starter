# Project Rules & Development Harness

## Tech Stack
- **Runtime & Test Runner:** Node.js v18+ (using built-in `node --test`)
- **Language:** Plain JavaScript (ES Modules, `"type": "module"`)
- **CI:** GitHub Actions (runs automatically on push to `main`)

## Verification Commands
- `npm test`: Run test suite locally

## Constraints & Guidelines
- **NEVER** use external third-party dependencies/libraries in `src/cart.js`.
- **NEVER** return prices as formatted strings (e.g., using `.toFixed()`); always return a rounded integer `number`.
- **NEVER** ignore or silence RangeError exceptions for negative prices or non-integer quantities.