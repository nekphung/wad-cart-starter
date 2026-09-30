# BRIEF: Implementation of `cartTotal(items, options)`

## 1. Allowed Files
- Modify only `src/cart.js`.
- Test files in `test/` may be added/updated.
- Project dependency configuration: `package.json` and `package-lock.json` (for devDependencies and formatting scripts)

## 2. Core Specification
Calculate total cart amount: `Total = Math.round(Subtotal + VAT + Shipping)`.
- **Empty Cart:** Return `0` immediately if `items` array is empty or invalid (no VAT or shipping applied).
- **Subtotal:** Sum of `(price * qty)` for all valid items in `items`.
- **VAT Calculation:** `VAT = subtotal * vatRate`.
- **Shipping Fee:** `0` when `subtotal >= freeShipFrom`; otherwise use `shipFee`.
- **Rounding:** Return final total rounded to the nearest whole đồng using `Math.round()`.
- **Input Validation:** Throw a `RangeError` if any item contains:
  - A negative price (`price < 0`).
  - A quantity that is not a positive integer (`qty <= 0` or non-integer).

## 3. Error Cases
Throw a `RangeError` if any item in `items` fails validation: 
- **Negative Price:** `item.price < 0`.
- **Invalid Quantity:** `item.qty` is not a positive integer (`item.qty <= 0` or `!Number.isInteger(item.qty)`).

## 4. Constraint
- Plain JavaScript only.
- No dependencies: Do not import or use any external third-party packages or modules.