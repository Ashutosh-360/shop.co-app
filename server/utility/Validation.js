export function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0) ||
    value === false
  );
}

export function isEmail(value) {
  let result = String(value)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  return !!result;
}

export function isSizeAccepted(size) {
  const sizesValues = ["XS", "S", "M", "L", "XL", "XXL"];

  return !!sizesValues.includes(size?.toUpperCase());
}
