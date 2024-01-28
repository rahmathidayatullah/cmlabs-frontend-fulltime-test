export function convertStringUrlWithDash(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export function convertStringUrlWithCamel(value: string) {
  const convertedString = value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return convertedString;
}
