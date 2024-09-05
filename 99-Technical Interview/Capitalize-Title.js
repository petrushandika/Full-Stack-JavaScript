function toTitleCase(str) {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
}
const result = toTitleCase("charge");
console.log(result);
