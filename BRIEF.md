# BRIEF: Implementation of `cartTotal(items, options)`

## 1. Allowed Files
- Modify only `src/cart.js`.
- Test files in `test/` may be added/updated.

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

## 3. Exception Handling
Throw a `RangeError` if:
- Any item `price` is negative (`price < 0`).
- Any item `quantity` is not an integer (`!Number.isInteger(quantity)` or `quantity < 0`).

## 4. Constraint
Plain JavaScript only. No external dependencies allowed.