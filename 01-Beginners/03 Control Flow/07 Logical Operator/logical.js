// 1. Logical AND (&&)
const a = true,
  b = false;
const c = 4;

console.log(a && a);
console.log(a && b);

console.log(c > 2 && c < 2);

// 2. Logical OR (||)
console.log(a || b);
console.log(b || b);
console.log(c > 2 || c < 2);

// 3. Logical NOT (!)
console.log(!a);
console.log(!b);


let password = "Petrus Handika";

if (password.length >= 8 && password.includes("dika")) {
  console.log("VALID PASSWORD");
} else {
  console.log("Invalid password");
}