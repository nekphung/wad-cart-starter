import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
// Test 1: the worked example 
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

// Test 2: the empty cart 
test('the empty cart returns 0', () => {
  const items = []

  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 0)
})

// Test 3: the free-shipping threshold 
test('free shipping applies at the threshold', () => {
  const items = [
    { name: 'Sản phẩm', price: 500000, qty: 1 },
  ]

  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 540000)
})

// Test 4: the negative price 
test('negative price throws RangeError', () => {
  const items = [
    { name: 'Sản phẩm', price: -1, qty: 1 },
  ]

  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

// Test 5: the zero quantity 
test('throws RangeError for zero quantity', () => {
  const items = [
    { name: 'Sản phẩm', price: 100000, qty: 0 },
  ]

  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

// Test 6: the non-integer 
test('non-integer quantity throws RangeError', () => {
  const items = [
    { name: 'Sản phẩm', price: 100000, qty: 1.5 },
  ]

  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})
