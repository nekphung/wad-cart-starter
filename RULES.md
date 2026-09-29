# Project Rules & Development Harness

## Tech Stack
- Node.js (v18+)
- Plain JavaScript (ES6 Modules/CommonJS)
- Jest (Testing framework)

## Verification Commands
- `npm test`: Run test suite locally

## Constraints & Guidelines
- **NEVER** use external third-party dependencies/libraries in `src/cart.js`.
- **NEVER** return prices as formatted strings (e.g., using `.toFixed()`); always return a rounded integer `number`.
- **NEVER** ignore or silence RangeError exceptions for negative prices or non-integer quantities.