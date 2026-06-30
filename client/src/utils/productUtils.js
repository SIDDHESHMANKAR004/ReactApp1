export function calculateDiscountedPrice(mrp, discount) {
  const safeMrp = Number(mrp) || 0;
  const safeDiscount = Number(discount) || 0;
  return safeMrp * (1 - safeDiscount / 100);
}

export function getItemTotal(product) {
  return calculateDiscountedPrice(product?.mrp, product?.discount) * Number(product?.qty || 0);
}
