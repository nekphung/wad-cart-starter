// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }

  const { vatRate = 0, freeShipFrom = 0, shipFee = 0 } = options || {};

  let subtotal = 0;

  for (const item of items) {
    const { price, qty } = item;

    // Validate price (must not be negative)
    if (typeof price !== 'number' || price < 0) {
      throw new RangeError(`Invalid price: ${price}. Price must be non-negative.`);
    }

    // Validate qty (must be a positive integer > 0)
    if (typeof qty !== 'number' || !Number.isInteger(qty) || qty <= 0) {
      throw new RangeError(`Invalid quantity: ${qty}. Quantity must be a positive integer.`);
    }

    subtotal += price * qty;
  }

  const vat = subtotal * vatRate;
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee;

  return Math.round(subtotal + vat + shipping);
}
