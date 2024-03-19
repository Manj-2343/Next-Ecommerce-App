export default function generateCouponCode(title, expiryDate) {
  if (!title || !expiryDate) {
    throw new Error("Title and expiry date are required.");
  }
  // Remove spaces and special characters from the title and convert to uppercase
  const formattedTitle = title.replace(/\s+/g, "").toUpperCase();

  // Convert expiration date to a string in the format YYYYMMDD
  const formattedExpiryDate = expiryDate.replace(/-/g, "");

  // Combine the formatted title and expiration date to generate the coupon code
  const couponCode = `${formattedTitle}${formattedExpiryDate}`;

  return couponCode;
}
