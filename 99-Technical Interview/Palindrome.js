function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
const result = isPalindrome("madam");
console.log(result);
